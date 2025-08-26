<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppSidebar from './AppSidebar.vue'
import AppHeader from './AppHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-#0f1e3a text-white">
    <main class="p-6">
      
      <div class="mt-6 flex gap-6">
        <AppSidebar />
        <section class="flex-1">
          <AppHeader />
          <RouterView />
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
</style>


