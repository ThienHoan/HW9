<script setup lang="ts">
defineProps<{ avatar: string; name: string; title: string }>()
</script>

<template>
  <div class="box">
    <div class="flex flex-col items-center p-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400">
      <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
        <img :alt="name" class="rounded-full" :src="avatar" />
      </div>
      <div class="mt-3 text-center lg:ml-2 lg:mr-auto lg:text-left lg:mt-0">
        <a href="" class="font-medium">{{ name }}</a>
        <div class="text-slate-500 text-xs mt-0.5">{{ title }}</div>
      </div>
      <div class="flex mt-3 -ml-2 lg:ml-0 lg:justify-end lg:mt-0">
        <slot name="actions">
          <a class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in" href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in" href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in" href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </slot>
      </div>
    </div>
    <div class="flex flex-wrap items-center justify-center p-5 lg:flex-nowrap">
      <div class="w-full mb-4 mr-auto lg:w-1/2 lg:mb-0">
        <slot name="progress">
          <div class="flex text-xs text-slate-500">
            <div class="mr-auto">Progress</div>
            <div>20%</div>
          </div>
          <div class="w-full bg-slate-200 rounded dark:bg-black/20 h-1 mt-2 h-1 mt-2">
            <div class="h-full rounded text-xs text-white flex justify-center items-center w-1/4 bg-primary w-1/4 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </slot>
      </div>
      <slot name="footer">
        <button class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary px-2 py-1 mr-2">Message</button>
        <button class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 px-2 py-1">Profile</button>
      </slot>
    </div>
  </div>
</template>

<style scoped></style>


