<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside class="w-64 min-h-screen bg-#0b2a5a p-4 hidden md:block">
    <div class="flex items-center gap-3 px-2 py-3">
      <i class="i-mdi-cube-outline text-2xl" />
      <span class="font-semibold">Rubick</span>
    </div>
    <nav class="mt-6 space-y-1">
      <RouterLink to="/" class="flex items-center gap-3 rounded-lg px-3 py-2 bg-white/10"><i class="i-mdi-view-dashboard-outline" />Dashboard</RouterLink>
      <a class="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/10" href="#"><i class="i-mdi-email-outline" />Inbox</a>
      <RouterLink to="/users" class="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/10"><i class="i-mdi-account-group-outline" />Users</RouterLink>
      <a class="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/10" href="#"><i class="i-mdi-settings-outline" />Settings</a>
    </nav>
  </aside>
</template>

<style scoped>
</style>


