"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserSchema = void 0;
const zod_1 = require("zod");
exports.CreateUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required').max(255, 'Name too long'),
    email: zod_1.z.string().email('Invalid email format'),
    phone: zod_1.z.string().min(1, 'Phone is required').max(20, 'Phone too long'),
    category: zod_1.z.string().min(1, 'Category is required').max(100, 'Category too long'),
    is_active: zod_1.z.boolean().default(true),
    avatar_url: zod_1.z.string().url('Invalid URL format').optional().or(zod_1.z.literal(''))
});
//# sourceMappingURL=user.js.map