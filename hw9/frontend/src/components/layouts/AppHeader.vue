<script setup lang="ts">

</script>

<template>
    <div
      class="relative z-[51] flex h-[67px] items-center border-b border-slate-200"
    >
      <nav class="flex hidden mr-auto -intro-x sm:flex" aria-label="breadcrumb">
        <ol class="flex items-center text-primary dark:text-slate-300">
          <li class="">
            <a href="/" class="router-link-active">Application</a>
          </li>
          <li
            class="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400"
          >
            <a href="/" class="router-link-active"> Dashboard </a>
          </li>
        </ol>
      </nav>
      <div class="relative mr-3 intro-x sm:mr-6">
        <div class="relative hidden sm:block">
          <input
            class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent text-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 border-transparent w-56 shadow-none rounded-full bg-slate-300/50 pr-8 transition-[width] duration-300 ease-in-out focus:border-transparent focus:w-72 dark:bg-darkmode-400/70"
            type="text"
            placeholder="Search..."
          /><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search-icon stroke-1.5 absolute inset-y-0 right-0 w-5 h-5 my-auto mr-3 text-slate-600 dark:text-slate-500 absolute inset-y-0 right-0 w-5 h-5 my-auto mr-3 text-slate-600 dark:text-slate-500"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
        <a class="relative text-slate-600 sm:hidden" href=""
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search-icon stroke-1.5 w-5 h-5 dark:text-slate-500 w-5 h-5 dark:text-slate-500"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path></svg></a
        ><!---->
      </div>
      <div
        is="div"
        class="relative mr-auto intro-x sm:mr-6"
        data-headlessui-state=""
      >
        <button
          is="div"
          class="cursor-pointer relative text-slate-600 outline-none block before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full before:absolute before:top-[-2px] before:right-0 before:bg-danger"
          id="headlessui-popover-button-v-0"
          type="button"
          aria-expanded="false"
          data-headlessui-state=""
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
            class="lucide lucide-bell-icon stroke-1.5 w-5 h-5 dark:text-slate-500 w-5 h-5 dark:text-slate-500"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg></button
        ><!----><!---->
      </div>
      <div
        hidden=""
        style="
          position: fixed;
          height: 0px;
          padding: 0px;
          overflow: hidden;
          clip: rect(0px, 0px, 0px, 0px);
          white-space: nowrap;
          border-width: 0px;
          display: none;
        "
      ></div>
      <div class="relative">
        <div
          class="cursor-pointer block w-8 h-8 overflow-hidden rounded-full shadow-lg image-fit zoom-in intro-x"
          disabled="false"
          id="headlessui-menu-button-v-2"
          aria-haspopup="menu"
          aria-expanded="false"
          data-headlessui-state=""
        >
          <img
            alt="Midone Tailwind HTML Admin Template"
            src="../../../public/images/profile-11-BNomuplL.jpg"
          />
        </div>
        <!---->
      </div>
    </div>
</template>

<style scoped></style>
