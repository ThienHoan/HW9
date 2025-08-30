import { z } from 'zod'

export const CreateUserSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name too long'),
  email: z.string().email('Invalid email format'),
  phone: z.string().min(1, 'Phone is required').max(20, 'Phone too long'),
  category: z.string().min(1, 'Category is required').max(100, 'Category too long'),
  is_active: z.boolean().default(true)
})

export type CreateUserInput = z.infer<typeof CreateUserSchema>
