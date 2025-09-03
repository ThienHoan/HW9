"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseService = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class DatabaseService {
    constructor() {
        this.pool = new pg_1.Pool({
            connectionString: process.env.DATABASE_URL,
            idleTimeoutMillis: 30000, // tự đóng connection idle sau 30s
            connectionTimeoutMillis: 2000 // timeout khi connect
        });
    }
    async initializeDatabase() {
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
      `);
            console.log('✅ Database initialized successfully');
        }
        catch (error) {
            console.error('❌ Database initialization error:', error);
            throw error;
        }
    }
    async createUser(user) {
        const query = `
      INSERT INTO users (name, email, phone, category, is_active, avatar_url)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
        const values = [user.name, user.email, user.phone, user.category, user.is_active, user.avatar_url];
        const result = await this.pool.query(query, values);
        return result.rows[0];
    }
    async getAllUsers() {
        const result = await this.pool.query('SELECT * FROM users ORDER BY created_at DESC');
        return result.rows;
    }
    async getUserById(id) {
        const result = await this.pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows.length > 0 ? result.rows[0] : null;
    }
    async disconnect() {
        await this.pool.end();
        console.log('✅ Database pool closed');
    }
}
exports.databaseService = new DatabaseService();
//# sourceMappingURL=database.js.map