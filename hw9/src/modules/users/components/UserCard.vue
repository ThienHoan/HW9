<script setup lang="ts">
defineProps<{ avatar: string; name: string; title: string }>()
</script>

<template>
  <div class="rounded-xl bg-white/5 border border-white/10">
    <div class="p-5 flex items-start gap-4">
      <img :src="avatar" class="w-14 h-14 rounded-full object-cover" />
      <div class="flex-1">
        <div class="flex items-start justify-between">
          <div>
            <div class="font-semibold">{{ name }}</div>
            <div class="text-sm text-slate-300">{{ title }}</div>
          </div>
          <div class="flex items-center gap-3 text-slate-300">
            <i class="i-mdi-facebook" />
            <i class="i-mdi-twitter" />
            <i class="i-mdi-linkedin" />
          </div>
        </div>
        <div class="mt-5">
          <div class="text-sm text-slate-300 mb-2">Progress</div>
          <div class="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div class="h-full w-1/5 bg-secondary"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-5 pb-5 flex items-center justify-end gap-3">
      <button class="px-4 py-1.5 rounded bg-secondary text-white">Message</button>
      <button class="px-3 py-1.5 rounded border border-white/20 text-slate-200">Profile</button>
    </div>
  </div>
</template>

<style scoped>
</style>


