<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useUsers } from '../composables/useUsers'
import { useRouter } from 'vue-router'

const router = useRouter()
const { createUser, checkBackendHealth, loading, error } = useUsers()

// Form data
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  category: 'Software Engineer',
  is_active: true
})

// Status messages
const message = ref<{ type: 'success' | 'error', text: string } | null>(null)
const backendStatus = ref<boolean | null>(null)

// Categories for dropdown
const categories = [
  'Software Engineer',
  'Backend Engineer', 
  'Frontend Engineer',
  'DevOps Engineer',
  'Full Stack Engineer'
]

// Check backend health on mount
onMounted(async () => {
  backendStatus.value = await checkBackendHealth()
  if (!backendStatus.value) {
    message.value = { 
      type: 'error', 
      text: 'Backend server is not running. Please start the backend server first.' 
    }
  }
})

const handleSubmit = async () => {
  try {
    // Clear previous messages
    message.value = null
    
    // Validation
    if (!formData.name.trim()) {
      message.value = { type: 'error', text: 'Name is required!' }
      return
    }
    
    if (!formData.email.trim()) {
      message.value = { type: 'error', text: 'Email is required!' }
      return
    }

    // Create user via API
    const newUser = await createUser({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      category: formData.category,
      is_active: formData.is_active
    })

    message.value = { type: 'success', text: `User "${newUser.name}" created successfully!` }
    
    // Reset form
    Object.assign(formData, {
      name: '',
      email: '',
      phone: '',
      category: 'Software Engineer',
      is_active: true
    })

    // Redirect to users list after 2 seconds
    setTimeout(() => {
      router.push('/users')
    }, 2000)

  } catch (err) {
    message.value = { 
      type: 'error', 
      text: error.value || 'Failed to create user. Please try again.' 
    }
  }
}

const handleCancel = () => {
  // Reset form
  Object.assign(formData, {
    name: '',
    email: '',
    phone: '',
    category: 'Software Engineer',
    is_active: true
  })
  message.value = null
}
</script>

<template>
  <div class="flex items-center mt-8 intro-y">
    <h2 class="mr-auto text-lg font-medium">Create New User</h2>
  </div>
  
  <!-- Backend Status Warning -->
  <div v-if="backendStatus === false" class="mt-4">
    <div class="p-4 text-red-700 bg-red-100 border border-red-300 rounded-md">
      <div class="flex items-center">
        <span class="text-lg mr-2">⚠️</span>
        <div>
          <strong>Backend server is not running!</strong>
          <p class="text-sm mt-1">Please start the backend server by running: <code class="bg-red-200 px-1 rounded">cd backend && npm run dev</code></p>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Success/Error Messages -->
  <div v-if="message" class="mt-4">
    <div v-if="message.type === 'success'" class="p-4 text-green-700 bg-green-100 border border-green-300 rounded-md">
      <div class="flex items-center">
        <span class="text-lg mr-2">✅</span>
        {{ message.text }}
      </div>
    </div>
    <div v-if="message.type === 'error'" class="p-4 text-red-700 bg-red-100 border border-red-300 rounded-md">
      <div class="flex items-center">
        <span class="text-lg mr-2">❌</span>
        {{ message.text }}
      </div>
    </div>
  </div>
  
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="col-span-12 intro-y lg:col-span-6">
      <div class="p-5 intro-y box">
        <div>
          <label class="inline-block mb-2" for="crud-form-1">Name *</label
          ><input
            v-model="formData.name"
            class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 w-full"
            type="text"
            id="crud-form-1"
            placeholder="Enter full name"
            required
          />
        </div>
        <div class="mt-3">
          <label
            class="inline-block mb-2"
            for="crud-form-2"
            >Category *</label
          >
          <select 
            v-model="formData.category"
            id="crud-form-2"
            class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 w-full"
            required
          >
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
        <div class="mt-3">
          <label class="inline-block mb-2" for="crud-form-3">Email *</label>
          <div class="flex">
            <input
              v-model="formData.email"
              class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 rounded-none [&amp;:not(:first-child)]:border-l-transparent first:rounded-l last:rounded-r z-10"
              type="email"
              id="crud-form-3"
              placeholder="Enter email address"
              aria-describedby="input-group-1"
              required
            />
          </div>
        </div>
        <div class="mt-3">
          <label class="inline-block mb-2" for="crud-form-4">Phone Number</label>
          <div class="flex">
            <input
              v-model="formData.phone"
              class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 rounded-none [&amp;:not(:first-child)]:border-l-transparent first:rounded-l last:rounded-r z-10"
              type="tel"
              id="crud-form-4"
              placeholder="Enter phone number"
              aria-describedby="input-group-2"
            />
          </div>
        </div>
        <div class="mt-3">
          <label>Active Status</label>
          <div class="flex items-center mt-2">
            <input
              v-model="formData.is_active"
              class="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;[type='radio']]:checked:bg-primary [&amp;[type='radio']]:checked:border-primary [&amp;[type='radio']]:checked:border-opacity-10 [&amp;[type='checkbox']]:checked:bg-primary [&amp;[type='checkbox']]:checked:border-primary [&amp;[type='checkbox']]:checked:border-opacity-10 [&amp;:disabled:not(:checked)]:bg-slate-100 [&amp;:disabled:not(:checked)]:cursor-not-allowed [&amp;:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&amp;:disabled:checked]:opacity-70 [&amp;:disabled:checked]:cursor-not-allowed [&amp;:disabled:checked]:dark:bg-darkmode-800/50 w-[38px] h-[24px] p-px rounded-full relative before:w-[20px] before:h-[20px] before:shadow-[1px_1px_3px_rgba(0,0,0,0.25)] before:transition-[margin-left] before:duration-200 before:ease-in-out before:absolute before:inset-y-0 before:my-auto before:rounded-full before:dark:bg-darkmode-600 checked:bg-primary checked:border-primary checked:bg-none before:checked:ml-[14px] before:checked:bg-white"
              type="checkbox"
            />
            <span class="ml-2 text-sm">{{ formData.is_active ? 'Active' : 'Inactive' }}</span>
          </div>
        </div>
        <div class="mt-5 text-right">
          <button
            @click="handleCancel"
            :disabled="loading"
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-secondary/20 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-100/10 w-24 mr-1"
            type="button"
          >
            Cancel</button
          ><button
            @click="handleSubmit"
            :disabled="loading || backendStatus === false"
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary w-24"
            type="button"
          >
            <span v-if="loading">Creating...</span>
            <span v-else>Create User</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
