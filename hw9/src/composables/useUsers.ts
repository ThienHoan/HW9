import { ref, onMounted } from 'vue'
import { apiService, type User } from '../services/api'

export const useUsers = () => {
  const users = ref<User[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Load all users
  const loadUsers = async () => {
    try {
      loading.value = true
      error.value = null
      users.value = await apiService.getUsers()
      console.log(`✅ Loaded ${users.value.length} users`)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load users'
      console.error('Error loading users:', err)
    } finally {
      loading.value = false
    }
  }

  // Create new user
  const createUser = async (userData: Omit<User, 'id' | 'created_at'>) => {
    try {
      loading.value = true
      error.value = null
      
      const newUser = await apiService.createUser(userData)
      
      // Add to local state
      users.value.unshift(newUser)
      
      console.log('✅ User created:', newUser)
      return newUser
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to create user'
      console.error('Error creating user:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  // Check if backend is running
  const checkBackendHealth = async () => {
    try {
      const isHealthy = await apiService.healthCheck()
      if (!isHealthy) {
        error.value = 'Backend server is not running. Please start the backend server.'
      }
      return isHealthy
    } catch (err) {
      error.value = 'Cannot connect to backend server'
      return false
    }
  }

  return {
    users,
    loading,
    error,
    loadUsers,
    createUser,
    checkBackendHealth
  }
}
