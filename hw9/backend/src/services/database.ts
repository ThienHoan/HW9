import { Client } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

export interface User {
  id?: number
  name: string
  email: string
  phone: string
  category: string
  is_active: boolean
  created_at?: Date
}

class DatabaseService {
  private client: Client | null = null

  private async getClient(): Promise<Client> {
    if (!this.client) {
      this.client = new Client({
        connectionString: process.env.DATABASE_URL
      })
      await this.client.connect()
      console.log('✅ Connected to Neon PostgreSQL')
    }
    return this.client
  }

  async initializeDatabase(): Promise<void> {
    try {
      const client = await this.getClient()
      
      // Tạo bảng users nếu chưa tồn tại
      await client.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          phone VARCHAR(20),
          category VARCHAR(100),
          is_active BOOLEAN DEFAULT true,
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
    try {
      const client = await this.getClient()
      
      const query = `
        INSERT INTO users (name, email, phone, category, is_active)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `
      
      const values = [user.name, user.email, user.phone, user.category, user.is_active]
      const result = await client.query(query, values)
      
      console.log('✅ User created:', result.rows[0])
      return result.rows[0]
    } catch (error) {
      console.error('❌ Error creating user:', error)
      throw error
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const client = await this.getClient()
      
      const query = 'SELECT * FROM users ORDER BY created_at DESC'
      const result = await client.query(query)
      
      console.log(`✅ Retrieved ${result.rows.length} users`)
      return result.rows
    } catch (error) {
      console.error('❌ Error fetching users:', error)
      throw error
    }
  }

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.end()
      this.client = null
      console.log('✅ Database disconnected')
    }
  }
}

export const databaseService = new DatabaseService()
