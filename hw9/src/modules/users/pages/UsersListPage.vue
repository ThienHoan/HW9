<script setup lang="ts">
import UserCard from '../components/UserCard.vue'

const users = [
  { id: 1, name: 'Will Smith', title: 'Backend Engineer', avatar: '/images/profile-1-DTCKrF_v.jpg' },
  { id: 2, name: 'Tom Hanks', title: 'Software Engineer', avatar: '/images/profile-11-BNomuplL.jpg' },
  { id: 3, name: 'Denzel Washington', title: 'Software Engineer', avatar: '/images/profile-14-BW__wcG6.jpg' },
  { id: 4, name: 'Sylvester Stallone', title: 'DevOps Engineer', avatar: '/images/profile-15-CIs--CL5.jpg' },
  { id: 5, name: 'Angelina Jolie', title: 'Backend Engineer', avatar: '/images/profile-2-UOW-458T.jpg' },
]
</script>

<template>
  <section class="mt-2">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-semibold">Users Layout</h2>
      <div class="flex items-center gap-3">
        <button class="px-4 py-2 bg-secondary rounded text-white hover:opacity-90">Add New User</button>
        <button class="w-8 h-8 rounded bg-white/10 grid place-items-center"><i class="i-mdi-plus" /></button>
      </div>
    </div>

    <p class="text-slate-300 text-sm mt-4">Showing 1 to 10 of 150 entries</p>

    <div class="mt-6 grid gap-6 md:grid-cols-2">
      <UserCard
        v-for="u in users"
        :key="u.id"
        :avatar="u.avatar"
        :name="u.name"
        :title="u.title"
      />
    </div>
  </section>
</template>

<style scoped>
</style>


