import { Router, Request, Response } from 'express'
import { databaseService } from '../services/database'
import { CreateUserSchema } from '../schemas/user'
import { z } from 'zod'

const router = Router()

// GET /api/users - Lấy danh sách users
router.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await databaseService.getAllUsers()
    res.json({
      success: true,
      data: users,
      count: users.length
    })
  } catch (error) {
    console.error('Error in GET /users:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch users',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

// POST /api/users - Tạo user mới
router.post('/users', async (req: Request, res: Response) => {
  try {
    // Validate input với Zod
    const validatedData = CreateUserSchema.parse(req.body)
    
    // Tạo user trong database
    const newUser = await databaseService.createUser(validatedData)
    
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: newUser
    })
  } catch (error) {
    console.error('Error in POST /users:', error)
    
    if (error instanceof z.ZodError) {
      // Validation errors
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.errors
      })
    }
    
    // Database errors (như duplicate email)
    if (error instanceof Error && error.message.includes('duplicate key')) {
      return res.status(409).json({
        success: false,
        message: 'Email already exists'
      })
    }
    
    // Other errors
    res.status(500).json({
      success: false,
      message: 'Failed to create user',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router
