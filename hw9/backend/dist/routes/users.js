"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("../services/database");
const user_1 = require("../schemas/user");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
// GET /api/users - Lấy danh sách users
router.get('/users', async (req, res) => {
    try {
        const users = await database_1.databaseService.getAllUsers();
        res.json({
            success: true,
            data: users,
            count: users.length
        });
    }
    catch (error) {
        console.error('Error in GET /users:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch users',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
});
// POST /api/users - Tạo user mới
router.post('/users', async (req, res) => {
    try {
        // Validate input với Zod
        const validatedData = user_1.CreateUserSchema.parse(req.body);
        // Tạo user trong database
        const newUser = await database_1.databaseService.createUser(validatedData);
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: newUser
        });
    }
    catch (error) {
        console.error('Error in POST /users:', error);
        if (error instanceof zod_1.z.ZodError) {
            // Validation errors
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: error.errors
            });
        }
        // Database errors (như duplicate email)
        if (error instanceof Error && error.message.includes('duplicate key')) {
            return res.status(409).json({
                success: false,
                message: 'Email already exists'
            });
        }
        // Other errors
        res.status(500).json({
            success: false,
            message: 'Failed to create user',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
});
// GET /api/users/:id - Lấy user theo ID
router.get('/users/:id', async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        if (isNaN(userId)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid user ID'
            });
        }
        const user = await database_1.databaseService.getUserById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        res.json({
            success: true,
            data: user
        });
    }
    catch (error) {
        console.error('Error in GET /users/:id:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch user',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
});
exports.default = router;
//# sourceMappingURL=users.js.map