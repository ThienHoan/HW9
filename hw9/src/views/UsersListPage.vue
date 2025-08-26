<script setup lang="ts">
import UserCard from "../components/UserCard.vue";

const users = [
  {
    id: 1,
    name: "Will Smith",
    title: "Backend Engineer",
    avatar: "/images/profile-1-DTCKrF_v.jpg",
  },
  {
    id: 2,
    name: "Tom Hanks",
    title: "Software Engineer",
    avatar: "/images/profile-11-BNomuplL.jpg",
  },
  {
    id: 3,
    name: "Denzel Washington",
    title: "Software Engineer",
    avatar: "/images/profile-14-BW__wcG6.jpg",
  },
  {
    id: 4,
    name: "Sylvester Stallone",
    title: "DevOps Engineer",
    avatar: "/images/profile-15-CIs--CL5.jpg",
  },
  {
    id: 5,
    name: "Angelina Jolie",
    title: "Backend Engineer",
    avatar: "/images/profile-2-UOW-458T.jpg",
  },
];
</script>

<template>
  <h2 class="mt-10 text-lg font-medium intro-y">Users Layout</h2>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div
      class="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap"
    >
      <button
        class="transition duration-200 border inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary mr-2 shadow-md"
      >
        Add New User
      </button>
      <div class="relative">
        <button
          class="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer px-2 !box"
          id="headlessui-menu-button-v-11"
          aria-haspopup="menu"
          aria-expanded="false"
          data-headlessui-state=""
          type="button"
        >
          <span class="flex items-center justify-center w-5 h-5"
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
              class="lucide lucide-plus-icon stroke-1.5 w-4 h-4 w-4 h-4"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path></svg
          ></span></button
        ><!---->
      </div>
      <div class="hidden mx-auto md:block text-slate-500">
        Showing 1 to 10 of 150 entries
      </div>
      <div class="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
        <div class="relative w-56 text-slate-500">
          <input
            class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 w-56 pr-10 !box"
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
            class="lucide lucide-search-icon stroke-1.5 absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3 absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="col-span-12 intro-y md:col-span-6">
      <div class="box">
        <div
          class="flex flex-col items-center p-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              src="../../../../public/images/profile-11-BNomuplL.jpg"
            />
          </div>
          <div class="mt-3 text-center lg:ml-2 lg:mr-auto lg:text-left lg:mt-0">
            <a href="" class="font-medium">Keanu Reeves</a>
            <div class="text-slate-500 text-xs mt-0.5">Software Engineer</div>
          </div>
          <div class="flex mt-3 -ml-2 lg:ml-0 lg:justify-end lg:mt-0">
            <a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-facebook-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-twitter-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-linkedin-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle></svg
            ></a>
          </div>
        </div>
        <div
          class="flex flex-wrap items-center justify-center p-5 lg:flex-nowrap"
        >
          <div class="w-full mb-4 mr-auto lg:w-1/2 lg:mb-0">
            <div class="flex text-xs text-slate-500">
              <div class="mr-auto">Progress</div>
              <div>20%</div>
            </div>
            <div
              class="w-full bg-slate-200 rounded dark:bg-black/20 h-1 mt-2 h-1 mt-2"
            >
              <div
                class="h-full rounded text-xs text-white flex justify-center items-center w-1/4 bg-primary w-1/4 bg-primary"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary px-2 py-1 mr-2"
          >
            Message</button
          ><button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-secondary/20 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-100/10 px-2 py-1"
          >
            Profile
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-12 intro-y md:col-span-6">
      <div class="box">
        <div
          class="flex flex-col items-center p-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              src="../../../../public/images/profile-3-CwUxbhGj.jpg"
            />
          </div>
          <div class="mt-3 text-center lg:ml-2 lg:mr-auto lg:text-left lg:mt-0">
            <a href="" class="font-medium">Leonardo DiCaprio</a>
            <div class="text-slate-500 text-xs mt-0.5">Backend Engineer</div>
          </div>
          <div class="flex mt-3 -ml-2 lg:ml-0 lg:justify-end lg:mt-0">
            <a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-facebook-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-twitter-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-linkedin-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle></svg
            ></a>
          </div>
        </div>
        <div
          class="flex flex-wrap items-center justify-center p-5 lg:flex-nowrap"
        >
          <div class="w-full mb-4 mr-auto lg:w-1/2 lg:mb-0">
            <div class="flex text-xs text-slate-500">
              <div class="mr-auto">Progress</div>
              <div>20%</div>
            </div>
            <div
              class="w-full bg-slate-200 rounded dark:bg-black/20 h-1 mt-2 h-1 mt-2"
            >
              <div
                class="h-full rounded text-xs text-white flex justify-center items-center w-1/4 bg-primary w-1/4 bg-primary"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary px-2 py-1 mr-2"
          >
            Message</button
          ><button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-secondary/20 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-100/10 px-2 py-1"
          >
            Profile
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-12 intro-y md:col-span-6">
      <div class="box">
        <div
          class="flex flex-col items-center p-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              src="../../../../public/images/profile-13-De9Tu6qz.jpg"
            />
          </div>
          <div class="mt-3 text-center lg:ml-2 lg:mr-auto lg:text-left lg:mt-0">
            <a href="" class="font-medium">Kate Winslet</a>
            <div class="text-slate-500 text-xs mt-0.5">Software Engineer</div>
          </div>
          <div class="flex mt-3 -ml-2 lg:ml-0 lg:justify-end lg:mt-0">
            <a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-facebook-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-twitter-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-linkedin-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle></svg
            ></a>
          </div>
        </div>
        <div
          class="flex flex-wrap items-center justify-center p-5 lg:flex-nowrap"
        >
          <div class="w-full mb-4 mr-auto lg:w-1/2 lg:mb-0">
            <div class="flex text-xs text-slate-500">
              <div class="mr-auto">Progress</div>
              <div>20%</div>
            </div>
            <div
              class="w-full bg-slate-200 rounded dark:bg-black/20 h-1 mt-2 h-1 mt-2"
            >
              <div
                class="h-full rounded text-xs text-white flex justify-center items-center w-1/4 bg-primary w-1/4 bg-primary"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary px-2 py-1 mr-2"
          >
            Message</button
          ><button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-secondary/20 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-100/10 px-2 py-1"
          >
            Profile
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-12 intro-y md:col-span-6">
      <div class="box">
        <div
          class="flex flex-col items-center p-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              src="../../../../public/images/profile-6-D6EgTFFQ.jpg"
            />
          </div>
          <div class="mt-3 text-center lg:ml-2 lg:mr-auto lg:text-left lg:mt-0">
            <a href="" class="font-medium">Bruce Willis</a>
            <div class="text-slate-500 text-xs mt-0.5">Software Engineer</div>
          </div>
          <div class="flex mt-3 -ml-2 lg:ml-0 lg:justify-end lg:mt-0">
            <a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-facebook-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-twitter-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-linkedin-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle></svg
            ></a>
          </div>
        </div>
        <div
          class="flex flex-wrap items-center justify-center p-5 lg:flex-nowrap"
        >
          <div class="w-full mb-4 mr-auto lg:w-1/2 lg:mb-0">
            <div class="flex text-xs text-slate-500">
              <div class="mr-auto">Progress</div>
              <div>20%</div>
            </div>
            <div
              class="w-full bg-slate-200 rounded dark:bg-black/20 h-1 mt-2 h-1 mt-2"
            >
              <div
                class="h-full rounded text-xs text-white flex justify-center items-center w-1/4 bg-primary w-1/4 bg-primary"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary px-2 py-1 mr-2"
          >
            Message</button
          ><button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-secondary/20 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-100/10 px-2 py-1"
          >
            Profile
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-12 intro-y md:col-span-6">
      <div class="box">
        <div
          class="flex flex-col items-center p-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              src="../../../../public/images/profile-9-CxE8y3dY.jpg"
            />
          </div>
          <div class="mt-3 text-center lg:ml-2 lg:mr-auto lg:text-left lg:mt-0">
            <a href="" class="font-medium">Leonardo DiCaprio</a>
            <div class="text-slate-500 text-xs mt-0.5">Backend Engineer</div>
          </div>
          <div class="flex mt-3 -ml-2 lg:ml-0 lg:justify-end lg:mt-0">
            <a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-facebook-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-twitter-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-linkedin-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle></svg
            ></a>
          </div>
        </div>
        <div
          class="flex flex-wrap items-center justify-center p-5 lg:flex-nowrap"
        >
          <div class="w-full mb-4 mr-auto lg:w-1/2 lg:mb-0">
            <div class="flex text-xs text-slate-500">
              <div class="mr-auto">Progress</div>
              <div>20%</div>
            </div>
            <div
              class="w-full bg-slate-200 rounded dark:bg-black/20 h-1 mt-2 h-1 mt-2"
            >
              <div
                class="h-full rounded text-xs text-white flex justify-center items-center w-1/4 bg-primary w-1/4 bg-primary"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary px-2 py-1 mr-2"
          >
            Message</button
          ><button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-secondary/20 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-100/10 px-2 py-1"
          >
            Profile
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-12 intro-y md:col-span-6">
      <div class="box">
        <div
          class="flex flex-col items-center p-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              src="../../../../public/images/profile-2-UOW-458T.jpg"
            />
          </div>
          <div class="mt-3 text-center lg:ml-2 lg:mr-auto lg:text-left lg:mt-0">
            <a href="" class="font-medium">Al Pacino</a>
            <div class="text-slate-500 text-xs mt-0.5">Software Engineer</div>
          </div>
          <div class="flex mt-3 -ml-2 lg:ml-0 lg:justify-end lg:mt-0">
            <a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-facebook-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-twitter-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-linkedin-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle></svg
            ></a>
          </div>
        </div>
        <div
          class="flex flex-wrap items-center justify-center p-5 lg:flex-nowrap"
        >
          <div class="w-full mb-4 mr-auto lg:w-1/2 lg:mb-0">
            <div class="flex text-xs text-slate-500">
              <div class="mr-auto">Progress</div>
              <div>20%</div>
            </div>
            <div
              class="w-full bg-slate-200 rounded dark:bg-black/20 h-1 mt-2 h-1 mt-2"
            >
              <div
                class="h-full rounded text-xs text-white flex justify-center items-center w-1/4 bg-primary w-1/4 bg-primary"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary px-2 py-1 mr-2"
          >
            Message</button
          ><button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-secondary/20 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-100/10 px-2 py-1"
          >
            Profile
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-12 intro-y md:col-span-6">
      <div class="box">
        <div
          class="flex flex-col items-center p-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              src="../../../../public/images/profile-9-CxE8y3dY.jpg"
            />
          </div>
          <div class="mt-3 text-center lg:ml-2 lg:mr-auto lg:text-left lg:mt-0">
            <a href="" class="font-medium">Vin Diesel</a>
            <div class="text-slate-500 text-xs mt-0.5">DevOps Engineer</div>
          </div>
          <div class="flex mt-3 -ml-2 lg:ml-0 lg:justify-end lg:mt-0">
            <a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-facebook-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-twitter-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-linkedin-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle></svg
            ></a>
          </div>
        </div>
        <div
          class="flex flex-wrap items-center justify-center p-5 lg:flex-nowrap"
        >
          <div class="w-full mb-4 mr-auto lg:w-1/2 lg:mb-0">
            <div class="flex text-xs text-slate-500">
              <div class="mr-auto">Progress</div>
              <div>20%</div>
            </div>
            <div
              class="w-full bg-slate-200 rounded dark:bg-black/20 h-1 mt-2 h-1 mt-2"
            >
              <div
                class="h-full rounded text-xs text-white flex justify-center items-center w-1/4 bg-primary w-1/4 bg-primary"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary px-2 py-1 mr-2"
          >
            Message</button
          ><button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-secondary/20 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-100/10 px-2 py-1"
          >
            Profile
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-12 intro-y md:col-span-6">
      <div class="box">
        <div
          class="flex flex-col items-center p-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              src="../../../../public/images/profile-11-BNomuplL.jpg"
            />
          </div>
          <div class="mt-3 text-center lg:ml-2 lg:mr-auto lg:text-left lg:mt-0">
            <a href="" class="font-medium">Kevin Spacey</a>
            <div class="text-slate-500 text-xs mt-0.5">Backend Engineer</div>
          </div>
          <div class="flex mt-3 -ml-2 lg:ml-0 lg:justify-end lg:mt-0">
            <a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-facebook-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-twitter-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-linkedin-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle></svg
            ></a>
          </div>
        </div>
        <div
          class="flex flex-wrap items-center justify-center p-5 lg:flex-nowrap"
        >
          <div class="w-full mb-4 mr-auto lg:w-1/2 lg:mb-0">
            <div class="flex text-xs text-slate-500">
              <div class="mr-auto">Progress</div>
              <div>20%</div>
            </div>
            <div
              class="w-full bg-slate-200 rounded dark:bg-black/20 h-1 mt-2 h-1 mt-2"
            >
              <div
                class="h-full rounded text-xs text-white flex justify-center items-center w-1/4 bg-primary w-1/4 bg-primary"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary px-2 py-1 mr-2"
          >
            Message</button
          ><button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-secondary/20 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-100/10 px-2 py-1"
          >
            Profile
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-12 intro-y md:col-span-6">
      <div class="box">
        <div
          class="flex flex-col items-center p-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              src="../../../../public/images/profile-3-CwUxbhGj.jpg"
            />
          </div>
          <div class="mt-3 text-center lg:ml-2 lg:mr-auto lg:text-left lg:mt-0">
            <a href="" class="font-medium">Hugh Jackman</a>
            <div class="text-slate-500 text-xs mt-0.5">Backend Engineer</div>
          </div>
          <div class="flex mt-3 -ml-2 lg:ml-0 lg:justify-end lg:mt-0">
            <a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-facebook-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-twitter-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-linkedin-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle></svg
            ></a>
          </div>
        </div>
        <div
          class="flex flex-wrap items-center justify-center p-5 lg:flex-nowrap"
        >
          <div class="w-full mb-4 mr-auto lg:w-1/2 lg:mb-0">
            <div class="flex text-xs text-slate-500">
              <div class="mr-auto">Progress</div>
              <div>20%</div>
            </div>
            <div
              class="w-full bg-slate-200 rounded dark:bg-black/20 h-1 mt-2 h-1 mt-2"
            >
              <div
                class="h-full rounded text-xs text-white flex justify-center items-center w-1/4 bg-primary w-1/4 bg-primary"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary px-2 py-1 mr-2"
          >
            Message</button
          ><button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-secondary/20 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-100/10 px-2 py-1"
          >
            Profile
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-12 intro-y md:col-span-6">
      <div class="box">
        <div
          class="flex flex-col items-center p-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              src="../../../../../public/images/profile-12-BcWdyPTT.jpg"
            />
          </div>
          <div class="mt-3 text-center lg:ml-2 lg:mr-auto lg:text-left lg:mt-0">
            <a href="" class="font-medium">Keanu Reeves</a>
            <div class="text-slate-500 text-xs mt-0.5">Backend Engineer</div>
          </div>
          <div class="flex mt-3 -ml-2 lg:ml-0 lg:justify-end lg:mt-0">
            <a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-facebook-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-twitter-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                ></path></svg></a
            ><a
              class="cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
              href=""
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
                class="lucide lucide-linkedin-icon stroke-1.5 w-3 h-3 fill-current w-3 h-3 fill-current"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle></svg
            ></a>
          </div>
        </div>
        <div
          class="flex flex-wrap items-center justify-center p-5 lg:flex-nowrap"
        >
          <div class="w-full mb-4 mr-auto lg:w-1/2 lg:mb-0">
            <div class="flex text-xs text-slate-500">
              <div class="mr-auto">Progress</div>
              <div>20%</div>
            </div>
            <div
              class="w-full bg-slate-200 rounded dark:bg-black/20 h-1 mt-2 h-1 mt-2"
            >
              <div
                class="h-full rounded text-xs text-white flex justify-center items-center w-1/4 bg-primary w-1/4 bg-primary"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary px-2 py-1 mr-2"
          >
            Message</button
          ><button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-secondary/20 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-100/10 px-2 py-1"
          >
            Profile
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap"
    >
      <nav class="w-full sm:w-auto sm:mr-auto">
        <ul class="flex w-full mr-0 sm:w-auto sm:mr-auto">
          <li class="flex-1 sm:flex-initial">
            <a
              class="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
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
                class="lucide lucide-chevrons-left-icon stroke-1.5 w-4 h-4 w-4 h-4"
              >
                <path d="m11 17-5-5 5-5"></path>
                <path d="m18 17-5-5 5-5"></path></svg
            ></a>
          </li>
          <li class="flex-1 sm:flex-initial">
            <a
              class="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
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
                class="lucide lucide-chevron-left-icon stroke-1.5 w-4 h-4 w-4 h-4"
              >
                <path d="m15 18-6-6 6-6"></path></svg
            ></a>
          </li>
          <li class="flex-1 sm:flex-initial">
            <a
              class="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
              >...</a
            >
          </li>
          <li class="flex-1 sm:flex-initial">
            <a
              class="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
              >1</a
            >
          </li>
          <li class="flex-1 sm:flex-initial">
            <a
              class="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3 !box font-medium dark:bg-darkmode-400"
              >2</a
            >
          </li>
          <li class="flex-1 sm:flex-initial">
            <a
              class="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
              >3</a
            >
          </li>
          <li class="flex-1 sm:flex-initial">
            <a
              class="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
              >...</a
            >
          </li>
          <li class="flex-1 sm:flex-initial">
            <a
              class="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
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
                class="lucide lucide-chevron-right-icon stroke-1.5 w-4 h-4 w-4 h-4"
              >
                <path d="m9 18 6-6-6-6"></path></svg
            ></a>
          </li>
          <li class="flex-1 sm:flex-initial">
            <a
              class="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
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
                class="lucide lucide-chevrons-right-icon stroke-1.5 w-4 h-4 w-4 h-4"
              >
                <path d="m6 17 5-5-5-5"></path>
                <path d="m13 17 5-5-5-5"></path></svg
            ></a>
          </li>
        </ul>
      </nav>
      <select
        class="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 w-20 mt-3 !box sm:mt-0"
      >
        <option>10</option>
        <option>25</option>
        <option>35</option>
        <option>50</option>
      </select>
    </div>
  </div>
</template>

<style scoped></style>
