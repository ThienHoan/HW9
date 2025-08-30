import axios from 'axios'

// Base API configuration
const API_BASE_URL = 'http://localhost:3001/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    console.log(`🔄 API Request: ${config.method?.toUpperCase()} ${config.url}`)
    return config
  },
  (error) => {
    console.error('❌ Request Error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.status} ${response.config.url}`)
    return response
  },
  (error) => {
    console.error('❌ Response Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export interface User {
  id?: number
  name: string
  email: string
  phone: string
  category: string
  is_active: boolean
  created_at?: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  count?: number
  errors?: any[]
}

class ApiService {
  // GET /api/users - Lấy danh sách users
  async getUsers(): Promise<User[]> {
    try {
      const response = await apiClient.get<ApiResponse<User[]>>('/users')
      return response.data.data || []
    } catch (error) {
      console.error('Failed to fetch users:', error)
      throw new Error('Unable to fetch users. Please check if the backend server is running.')
    }
  }

  // POST /api/users - Tạo user mới
  async createUser(userData: Omit<User, 'id' | 'created_at'>): Promise<User> {
    try {
      const response = await apiClient.post<ApiResponse<User>>('/users', userData)
      if (!response.data.success || !response.data.data) {
        throw new Error(response.data.message || 'Failed to create user')
      }
      return response.data.data
    } catch (error: any) {
      console.error('Failed to create user:', error)
      
      // Handle validation errors
      if (error.response?.status === 400) {
        const errorMessage = error.response.data.errors 
          ? error.response.data.errors.map((e: any) => e.message).join(', ')
          : error.response.data.message
        throw new Error(`Validation Error: ${errorMessage}`)
      }
      
      // Handle duplicate email
      if (error.response?.status === 409) {
        throw new Error('Email already exists')
      }
      
      // Handle server errors
      if (error.response?.status >= 500) {
        throw new Error('Server error. Please try again later.')
      }
      
      throw new Error('Unable to create user. Please check if the backend server is running.')
    }
  }

  // Health check
  async healthCheck(): Promise<boolean> {
    try {
      const response = await axios.get('http://localhost:3001/health')
      return response.status === 200
    } catch (error) {
      return false
    }
  }
}

export const apiService = new ApiService()
