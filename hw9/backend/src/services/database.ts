import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

export interface User {
  id?: number
  name: string
  email: string
  phone: string
  category: string
  is_active: boolean
  avatar_url?: string
  created_at?: Date
}

class DatabaseService {
  private pool: Pool

  constructor() {
    this.pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      idleTimeoutMillis: 30000, // tự đóng connection idle sau 30s
      connectionTimeoutMillis: 2000 // timeout khi connect
    })
  }

  async initializeDatabase(): Promise<void> {
    try {
      await this.pool.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          phone VARCHAR(20),
          category VARCHAR(100),
          is_active BOOLEAN DEFAULT true,
          avatar_url VARCHAR(500),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `)

      console.log('✅ Database initialized successfully')
    } catch (error) {
      console.error('❌ Database initialization error:', error)
      throw error
    }
  }

  async createUser(user: Omit<User, 'id' | 'created_at'>): Promise<User> {
    const query = `
      INSERT INTO users (name, email, phone, category, is_active, avatar_url)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `
    const values = [user.name, user.email, user.phone, user.category, user.is_active, user.avatar_url]
    const result = await this.pool.query(query, values)
    return result.rows[0]
  }

  async getAllUsers(): Promise<User[]> {
    const result = await this.pool.query('SELECT * FROM users ORDER BY created_at DESC')
    return result.rows
  }

  async getUserById(id: number): Promise<User | null> {
    const result = await this.pool.query('SELECT * FROM users WHERE id = $1', [id])
    return result.rows.length > 0 ? result.rows[0] : null
  }

  async disconnect(): Promise<void> {
    await this.pool.end()
    console.log('✅ Database pool closed')
  }
}

export const databaseService = new DatabaseService()
