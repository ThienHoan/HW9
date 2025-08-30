<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import UserCard from '@/components/users/UserCard.vue'
import { useUsers } from '@/composables/useUsers'

const router = useRouter()
const { users, loading, error, loadUsers } = useUsers()

// Search and pagination
const searchTerm = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(8)

// Computed properties
const filteredUsers = computed(() => {
  if (!searchTerm.value) return users.value
  
  const search = searchTerm.value.toLowerCase()
  return users.value.filter(user => 
    user.name.toLowerCase().includes(search) ||
    user.email.toLowerCase().includes(search) ||
    user.category.toLowerCase().includes(search) ||
    user.phone.toLowerCase().includes(search)
  )
})

const totalPages = computed(() => Math.ceil(filteredUsers.value.length / itemsPerPage.value))

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredUsers.value.slice(start, end)
})

const visiblePages = computed(() => {
  const total = totalPages.value
  const current = currentPage.value
  const visible = []
  
  let start = Math.max(1, current - 2)
  let end = Math.min(total, current + 2)
  
  for (let i = start; i <= end; i++) {
    visible.push(i)
  }
  
  return visible
})

// Methods
const handleAddUser = () => {
  router.push('/crud')
}

const refreshUsers = async () => {
  await loadUsers()
}

// Lifecycle
onMounted(() => {
  loadUsers()
})
</script>

<template>
  <h2 class="mt-10 text-lg font-medium intro-y">Users from Database</h2>
  
  <!-- Error/Loading States -->
  <div v-if="error" class="mt-4">
    <div class="p-4 text-red-700 bg-red-100 border border-red-300 rounded-md">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span class="text-lg mr-2">❌</span>
          <span>{{ error }}</span>
        </div>
        <button 
          @click="refreshUsers"
          class="px-3 py-1 text-sm bg-red-200 hover:bg-red-300 rounded"
        >
          Retry
        </button>
      </div>
    </div>
  </div>
  
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div
      class="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap"
    >
      <button
        @click="handleAddUser"
        class="transition duration-200 border inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary mr-2 shadow-md"
      >
        Add New User
      </button>
      
      <button
        @click="refreshUsers"
        :disabled="loading"
        class="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-secondary/20 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-100/10 mr-2"
      >
        {{ loading ? 'Loading...' : 'Refresh' }}
      </button>
      
      <div class="hidden mx-auto md:block text-slate-500">
        Showing {{ ((currentPage - 1) * itemsPerPage) + 1 }} to {{ Math.min(currentPage * itemsPerPage, filteredUsers.length) }} of {{ filteredUsers.length }} entries
      </div>
      
      <div class="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
        <div class="relative w-56 text-slate-500">
          <input
            v-model="searchTerm"
            @input="currentPage = 1"
            class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 w-56 pr-10 !box"
            type="text"
            placeholder="Search users..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search-icon stroke-1.5 absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3 absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
      </div>
    </div>
    
    <!-- User Cards Grid -->
    <div v-if="loading" class="col-span-12 text-center py-8">
      <div class="text-slate-500">Loading users...</div>
    </div>
    
    <div v-else-if="paginatedUsers.length === 0" class="col-span-12 text-center py-8">
      <div class="text-slate-500">No users found</div>
    </div>
    
    <div
      v-else
      v-for="user in paginatedUsers"
      :key="user.id"
      class="col-span-12 intro-y md:col-span-6"
    >
      <UserCard
        :user="user"
        :avatar="`/images/profile-${((user.id || 1) % 15) + 1}.jpg`"
      />
    </div>
    
    <!-- Pagination -->
    <div
      v-if="filteredUsers.length > itemsPerPage"
      class="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap"
    >
      <nav class="w-full sm:w-auto sm:mr-auto">
        <ul class="flex w-full mr-0 sm:w-auto sm:mr-auto">
          <li class="flex-1 sm:flex-initial">
            <button
              @click="currentPage = 1"
              :disabled="currentPage === 1"
              class="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevrons-left-icon stroke-1.5 w-4 h-4"
              >
                <path d="m11 17-5-5 5-5"></path>
                <path d="m18 17-5-5 5-5"></path>
              </svg>
            </button>
          </li>
          <li class="flex-1 sm:flex-initial">
            <button
              @click="currentPage = Math.max(1, currentPage - 1)"
              :disabled="currentPage === 1"
              class="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-left-icon stroke-1.5 w-4 h-4"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
          </li>
          
          <li v-for="page in visiblePages" :key="page" class="flex-1 sm:flex-initial">
            <button
              @click="currentPage = page"
              :class="[
                'transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3',
                page === currentPage ? '!box font-medium dark:bg-darkmode-400' : ''
              ]"
            >
              {{ page }}
            </button>
          </li>
          
          <li class="flex-1 sm:flex-initial">
            <button
              @click="currentPage = Math.min(totalPages, currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-right-icon stroke-1.5 w-4 h-4"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </li>
          <li class="flex-1 sm:flex-initial">
            <button
              @click="currentPage = totalPages"
              :disabled="currentPage === totalPages"
              class="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevrons-right-icon stroke-1.5 w-4 h-4"
              >
                <path d="m6 17 5-5-5-5"></path>
                <path d="m13 17 5-5-5-5"></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
      <select
        v-model="itemsPerPage"
        @change="currentPage = 1"
        class="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 w-20 mt-3 !box sm:mt-0"
      >
        <option value="8">8</option>
        <option value="12">12</option>
        <option value="24">24</option>
        <option value="50">50</option>
      </select>
    </div>
  </div>
</template>

<style scoped></style>
