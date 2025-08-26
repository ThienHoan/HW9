<script setup lang="ts">
// No need to import AppSidebar and AppHeader - they're handled by AppLayout
</script>

<template>
  <div class="flex items-center mt-8 intro-y">
    <h2 class="mr-auto text-lg font-medium">Profile Layout</h2>
  </div>
  <div>
    <div class="px-5 pt-5 mt-5 intro-y box">
      <div
        class="flex flex-col pb-5 -mx-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400"
      >
        <div
          class="flex items-center justify-center flex-1 px-5 lg:justify-start"
        >
          <div
            class="relative flex-none w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 image-fit"
          >
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              src="../../../public/images/profile-11-BNomuplL.jpg"
            />
            <div
              class="absolute bottom-0 right-0 flex items-center justify-center p-2 mb-1 mr-1 rounded-full bg-primary"
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
                class="lucide lucide-camera-icon stroke-1.5 w-4 h-4 text-white w-4 h-4 text-white"
              >
                <path
                  d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
                ></path>
                <circle cx="12" cy="13" r="3"></circle>
              </svg>
            </div>
          </div>
          <div class="ml-5">
            <div
              class="w-24 text-lg font-medium truncate sm:w-40 sm:whitespace-normal"
            >
              Richard Gere
            </div>
            <div class="text-slate-500">Software Engineer</div>
          </div>
        </div>
        <div
          class="flex-1 px-5 pt-5 mt-6 border-t border-l border-r lg:mt-0 border-slate-200/60 dark:border-darkmode-400 lg:border-t-0 lg:pt-0"
        >
          <div class="font-medium text-center lg:text-left lg:mt-3">
            Contact Details
          </div>
          <div
            class="flex flex-col items-center justify-center mt-4 lg:items-start"
          >
            <div class="flex items-center truncate sm:whitespace-normal">
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
                class="lucide lucide-mail-icon stroke-1.5 w-4 h-4 mr-2 w-4 h-4 mr-2"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              richardgere@left4code.com
            </div>
            <div class="flex items-center mt-3 truncate sm:whitespace-normal">
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
                class="lucide lucide-instagram-icon stroke-1.5 w-4 h-4 mr-2 w-4 h-4 mr-2"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                ></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              Instagram Richard Gere
            </div>
            <div class="flex items-center mt-3 truncate sm:whitespace-normal">
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
                class="lucide lucide-twitter-icon stroke-1.5 w-4 h-4 mr-2 w-4 h-4 mr-2"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                ></path>
              </svg>
              Twitter Richard Gere
            </div>
          </div>
        </div>
        <div
          class="flex-1 px-5 pt-5 mt-6 border-t lg:mt-0 lg:border-0 border-slate-200/60 dark:border-darkmode-400 lg:pt-0"
        >
          <div class="font-medium text-center lg:text-left lg:mt-5">
            Sales Growth
          </div>
          <div class="flex items-center justify-center mt-2 lg:justify-start">
            <div class="flex w-20 mr-2">
              USP: <span class="ml-3 font-medium text-success">+23%</span>
            </div>
            <div class="w-3/4">
              <div style="height: 55px">
                <canvas
                  class="-mr-5"
                  style="
                    display: block;
                    box-sizing: border-box;
                    height: 55px;
                    width: 404px;
                  "
                  width="404"
                  height="55"
                ></canvas>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center lg:justify-start">
            <div class="flex w-20 mr-2">
              STP: <span class="ml-3 font-medium text-danger">-2%</span>
            </div>
            <div class="w-3/4">
              <div style="height: 55px">
                <canvas
                  class="-mr-5"
                  style="
                    display: block;
                    box-sizing: border-box;
                    height: 55px;
                    width: 404px;
                  "
                  width="404"
                  height="55"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul
        role="tablist"
        aria-orientation="horizontal"
        class="w-full flex flex-col justify-center text-center sm:flex-row lg:justify-start"
      >
        <li
          class="focus-visible:outline-none"
          id="headlessui-tabs-tab-v-103"
          role="tab"
          aria-selected="true"
          tabindex="0"
          data-headlessui-state="selected"
          aria-controls="headlessui-tabs-panel-v-107"
        >
          <a
            class="block appearance-none px-3 border transition-colors text-slate-700 dark:text-white border-b-2 border-transparent dark:border-transparent border-b-primary font-medium dark:border-b-primary py-4 cursor-pointer"
            >Dashboard</a
          >
        </li>
        <li
          class="focus-visible:outline-none"
          id="headlessui-tabs-tab-v-104"
          role="tab"
          aria-selected="false"
          tabindex="-1"
          data-headlessui-state=""
        >
          <a
            class="block appearance-none px-3 border text-slate-600 transition-colors dark:text-slate-400 border-b-2 border-transparent dark:border-transparent py-4 cursor-pointer"
          >
            Account &amp; Profile
          </a>
        </li>
        <li
          class="focus-visible:outline-none"
          id="headlessui-tabs-tab-v-105"
          role="tab"
          aria-selected="false"
          tabindex="-1"
          data-headlessui-state=""
        >
          <a
            class="block appearance-none px-3 border text-slate-600 transition-colors dark:text-slate-400 border-b-2 border-transparent dark:border-transparent py-4 cursor-pointer"
          >
            Activities
          </a>
        </li>
        <li
          class="focus-visible:outline-none"
          id="headlessui-tabs-tab-v-106"
          role="tab"
          aria-selected="false"
          tabindex="-1"
          data-headlessui-state=""
        >
          <a
            class="block appearance-none px-3 border text-slate-600 transition-colors dark:text-slate-400 border-b-2 border-transparent dark:border-transparent py-4 cursor-pointer"
            >Tasks</a
          >
        </li>
      </ul>
    </div>
    <div class="mt-5 intro-y">
      <div
        id="headlessui-tabs-panel-v-107"
        role="tabpanel"
        tabindex="0"
        data-headlessui-state="selected"
        class=""
        aria-labelledby="headlessui-tabs-tab-v-103"
      >
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 intro-y box lg:col-span-6">
            <div
              class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400"
            >
              <h2 class="mr-auto text-base font-medium">Top Categories</h2>
              <div class="relative ml-auto">
                <div
                  class="cursor-pointer block w-5 h-5"
                  tag="a"
                  href="#"
                  disabled="false"
                  id="headlessui-menu-button-v-109"
                  aria-haspopup="menu"
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
                    class="lucide lucide-more-horizontal-icon stroke-1.5 w-5 h-5 text-slate-500 w-5 h-5 text-slate-500"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </div>
                <!---->
              </div>
            </div>
            <div class="p-5">
              <div class="flex flex-col sm:flex-row">
                <div class="mr-auto">
                  <a href="" class="font-medium"> Wordpress Template </a>
                  <div class="mt-1 text-slate-500">HTML, PHP, Mysql</div>
                </div>
                <div class="flex">
                  <div class="w-32 mt-5 mr-auto -ml-2 sm:ml-0 sm:mr-5">
                    <div style="height: 30px">
                      <canvas
                        class=""
                        style="
                          display: block;
                          box-sizing: border-box;
                          height: 30px;
                          width: 128px;
                        "
                        width="128"
                        height="30"
                      ></canvas>
                    </div>
                  </div>
                  <div class="text-center">
                    <div class="font-medium">6.5k</div>
                    <div class="bg-success/20 text-success rounded px-2 mt-1.5">
                      +150
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col mt-5 sm:flex-row">
                <div class="mr-auto">
                  <a href="" class="font-medium"> Bootstrap HTML Template </a>
                  <div class="mt-1 text-slate-500">HTML, PHP, Mysql</div>
                </div>
                <div class="flex">
                  <div class="w-32 mt-5 mr-auto -ml-2 sm:ml-0 sm:mr-5">
                    <div style="height: 30px">
                      <canvas
                        class=""
                        style="
                          display: block;
                          box-sizing: border-box;
                          height: 30px;
                          width: 128px;
                        "
                        width="128"
                        height="30"
                      ></canvas>
                    </div>
                  </div>
                  <div class="text-center">
                    <div class="font-medium">2.5k</div>
                    <div class="bg-pending/10 text-pending rounded px-2 mt-1.5">
                      +150
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col mt-5 sm:flex-row">
                <div class="mr-auto">
                  <a href="" class="font-medium"> Tailwind HTML Template </a>
                  <div class="mt-1 text-slate-500">HTML, PHP, Mysql</div>
                </div>
                <div class="flex">
                  <div class="w-32 mt-5 mr-auto -ml-2 sm:ml-0 sm:mr-5">
                    <div style="height: 30px">
                      <canvas
                        class=""
                        style="
                          display: block;
                          box-sizing: border-box;
                          height: 30px;
                          width: 128px;
                        "
                        width="128"
                        height="30"
                      ></canvas>
                    </div>
                  </div>
                  <div class="text-center">
                    <div class="font-medium">3.4k</div>
                    <div class="bg-primary/10 text-primary rounded px-2 mt-1.5">
                      +150
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!---->
          <div class="col-span-12 intro-y box lg:col-span-6">
            <div
              class="flex items-center px-5 py-5 border-b sm:py-0 border-slate-200/60 dark:border-darkmode-400"
            >
              <h2 class="mr-auto text-base font-medium">Work In Progress</h2>
              <div class="relative ml-auto sm:hidden">
                <div
                  class="cursor-pointer block w-5 h-5"
                  tag="a"
                  href="#"
                  disabled="false"
                  id="headlessui-menu-button-v-110"
                  aria-haspopup="menu"
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
                    class="lucide lucide-more-horizontal-icon stroke-1.5 w-5 h-5 text-slate-500 w-5 h-5 text-slate-500"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </div>
                <!---->
              </div>
              <ul
                role="tablist"
                aria-orientation="horizontal"
                class="hidden w-auto ml-auto sm:flex"
              >
                <li
                  class="focus-visible:outline-none"
                  id="headlessui-tabs-tab-v-111"
                  role="tab"
                  aria-selected="true"
                  tabindex="0"
                  data-headlessui-state="selected"
                  aria-controls="headlessui-tabs-panel-v-113"
                >
                  <a
                    class="block appearance-none px-3 border transition-colors text-slate-700 dark:text-white border-b-2 border-transparent dark:border-transparent border-b-primary font-medium dark:border-b-primary py-5 cursor-pointer"
                  >
                    New
                  </a>
                </li>
                <li
                  class="focus-visible:outline-none"
                  id="headlessui-tabs-tab-v-112"
                  role="tab"
                  aria-selected="false"
                  tabindex="-1"
                  data-headlessui-state=""
                >
                  <a
                    class="block appearance-none px-3 border text-slate-600 transition-colors dark:text-slate-400 border-b-2 border-transparent dark:border-transparent py-5 cursor-pointer"
                  >
                    Last Week
                  </a>
                </li>
              </ul>
            </div>
            <div class="p-5">
              <div>
                <div
                  id="headlessui-tabs-panel-v-113"
                  role="tabpanel"
                  tabindex="0"
                  data-headlessui-state="selected"
                  class=""
                  aria-labelledby="headlessui-tabs-tab-v-111"
                >
                  <div>
                    <div class="flex">
                      <div class="mr-auto">Pending Tasks</div>
                      <div>20%</div>
                    </div>
                    <div
                      class="w-full bg-slate-200 rounded dark:bg-black/20 h-1 mt-2 h-1 mt-2"
                    >
                      <div
                        class="h-full rounded text-xs text-white flex justify-center items-center w-1/2 bg-primary w-1/2 bg-primary"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="mt-5">
                    <div class="flex">
                      <div class="mr-auto">Completed Tasks</div>
                      <div>2 / 20</div>
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
                  <div class="mt-5">
                    <div class="flex">
                      <div class="mr-auto">Tasks In Progress</div>
                      <div>42</div>
                    </div>
                    <div
                      class="w-full bg-slate-200 rounded dark:bg-black/20 h-1 mt-2 h-1 mt-2"
                    >
                      <div
                        class="h-full rounded text-xs text-white flex justify-center items-center w-3/4 bg-primary w-3/4 bg-primary"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <a
                    class="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-secondary/70 border-secondary/70 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-400 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-slate-100 [&amp;:hover:not(:disabled)]:border-slate-100 [&amp;:hover:not(:disabled)]:dark:border-darkmode-300/80 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-300/80 block w-40 mx-auto mt-5"
                    href=""
                  >
                    View More Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12 intro-y box lg:col-span-6">
            <div
              class="flex items-center px-5 py-5 border-b sm:py-3 border-slate-200/60 dark:border-darkmode-400"
            >
              <h2 class="mr-auto text-base font-medium">Daily Sales</h2>
              <div class="relative ml-auto sm:hidden">
                <div
                  class="cursor-pointer block w-5 h-5"
                  tag="a"
                  href="#"
                  disabled="false"
                  id="headlessui-menu-button-v-115"
                  aria-haspopup="menu"
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
                    class="lucide lucide-more-horizontal-icon stroke-1.5 w-5 h-5 text-slate-500 w-5 h-5 text-slate-500"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </div>
                <!---->
              </div>
              <button
                class="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-secondary/20 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-100/10 hidden sm:flex"
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
                  class="lucide lucide-file-icon stroke-1.5 w-4 h-4 mr-2 w-4 h-4 mr-2"
                >
                  <path
                    d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                  ></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                Download Excel
              </button>
            </div>
            <div class="p-5">
              <div class="relative flex items-center">
                <div class="flex-none w-12 h-12 image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-full"
                    src="../../../public/images/profile-8-AyJHXIQy.jpg"
                  />
                </div>
                <div class="ml-4 mr-auto">
                  <a href="" class="font-medium">Richard Gere</a>
                  <div class="mr-5 text-slate-500 sm:mr-5">
                    Bootstrap 4 HTML Admin Template
                  </div>
                </div>
                <div class="font-medium text-slate-600 dark:text-slate-500">
                  +$19
                </div>
              </div>
              <div class="relative flex items-center mt-5">
                <div class="flex-none w-12 h-12 image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-full"
                    src="../../../public/images/profile-10-LonGsNg2.jpg"
                  />
                </div>
                <div class="ml-4 mr-auto">
                  <a href="" class="font-medium">Vin Diesel</a>
                  <div class="mr-5 text-slate-500 sm:mr-5">
                    Tailwind HTML Admin Template
                  </div>
                </div>
                <div class="font-medium text-slate-600 dark:text-slate-500">
                  +$25
                </div>
              </div>
              <div class="relative flex items-center mt-5">
                <div class="flex-none w-12 h-12 image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-full"
                    src="../../../public/images/profile-11-BNomuplL.jpg"
                  />
                </div>
                <div class="ml-4 mr-auto">
                  <a href="" class="font-medium">Hugh Jackman</a>
                  <div class="mr-5 text-slate-500 sm:mr-5">
                    Vuejs HTML Admin Template
                  </div>
                </div>
                <div class="font-medium text-slate-600 dark:text-slate-500">
                  +$21
                </div>
              </div>
            </div>
          </div>
          <!---->
          <div class="col-span-12 intro-y box lg:col-span-6">
            <div
              class="flex items-center px-5 py-5 border-b sm:py-0 border-slate-200/60 dark:border-darkmode-400"
            >
              <h2 class="mr-auto text-base font-medium">Latest Tasks</h2>
              <div class="relative ml-auto sm:hidden">
                <div
                  class="cursor-pointer block w-5 h-5"
                  tag="a"
                  href="#"
                  disabled="false"
                  id="headlessui-menu-button-v-116"
                  aria-haspopup="menu"
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
                    class="lucide lucide-more-horizontal-icon stroke-1.5 w-5 h-5 text-slate-500 w-5 h-5 text-slate-500"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </div>
                <!---->
              </div>
              <ul
                role="tablist"
                aria-orientation="horizontal"
                class="hidden w-auto ml-auto sm:flex"
              >
                <li
                  class="focus-visible:outline-none"
                  id="headlessui-tabs-tab-v-117"
                  role="tab"
                  aria-selected="true"
                  tabindex="0"
                  data-headlessui-state="selected"
                  aria-controls="headlessui-tabs-panel-v-119"
                >
                  <a
                    class="block appearance-none px-3 border transition-colors text-slate-700 dark:text-white border-b-2 border-transparent dark:border-transparent border-b-primary font-medium dark:border-b-primary py-5 cursor-pointer"
                  >
                    New
                  </a>
                </li>
                <li
                  class="focus-visible:outline-none"
                  id="headlessui-tabs-tab-v-118"
                  role="tab"
                  aria-selected="false"
                  tabindex="-1"
                  data-headlessui-state=""
                >
                  <a
                    class="block appearance-none px-3 border text-slate-600 transition-colors dark:text-slate-400 border-b-2 border-transparent dark:border-transparent py-5 cursor-pointer"
                  >
                    Last Week
                  </a>
                </li>
              </ul>
            </div>
            <div class="p-5">
              <div>
                <div
                  id="headlessui-tabs-panel-v-119"
                  role="tabpanel"
                  tabindex="0"
                  data-headlessui-state="selected"
                  class=""
                  aria-labelledby="headlessui-tabs-tab-v-117"
                >
                  <div class="flex items-center">
                    <div
                      class="pl-4 border-l-2 border-primary dark:border-primary"
                    >
                      <a href="" class="font-medium"> Create New Campaign </a>
                      <div class="text-slate-500">10:00 AM</div>
                    </div>
                    <div class="flex items-center ml-auto">
                      <input
                        class="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;[type='radio']]:checked:bg-primary [&amp;[type='radio']]:checked:border-primary [&amp;[type='radio']]:checked:border-opacity-10 [&amp;[type='checkbox']]:checked:bg-primary [&amp;[type='checkbox']]:checked:border-primary [&amp;[type='checkbox']]:checked:border-opacity-10 [&amp;:disabled:not(:checked)]:bg-slate-100 [&amp;:disabled:not(:checked)]:cursor-not-allowed [&amp;:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&amp;:disabled:checked]:opacity-70 [&amp;:disabled:checked]:cursor-not-allowed [&amp;:disabled:checked]:dark:bg-darkmode-800/50 w-[38px] h-[24px] p-px rounded-full relative before:w-[20px] before:h-[20px] before:shadow-[1px_1px_3px_rgba(0,0,0,0.25)] before:transition-[margin-left] before:duration-200 before:ease-in-out before:absolute before:inset-y-0 before:my-auto before:rounded-full before:dark:bg-darkmode-600 checked:bg-primary checked:border-primary checked:bg-none before:checked:ml-[14px] before:checked:bg-white"
                        type="checkbox"
                      />
                    </div>
                  </div>
                  <div class="flex items-center mt-5">
                    <div
                      class="pl-4 border-l-2 border-primary dark:border-primary"
                    >
                      <a href="" class="font-medium"> Meeting With Client </a>
                      <div class="text-slate-500">02:00 PM</div>
                    </div>
                    <div class="flex items-center ml-auto">
                      <input
                        class="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;[type='radio']]:checked:bg-primary [&amp;[type='radio']]:checked:border-primary [&amp;[type='radio']]:checked:border-opacity-10 [&amp;[type='checkbox']]:checked:bg-primary [&amp;[type='checkbox']]:checked:border-primary [&amp;[type='checkbox']]:checked:border-opacity-10 [&amp;:disabled:not(:checked)]:bg-slate-100 [&amp;:disabled:not(:checked)]:cursor-not-allowed [&amp;:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&amp;:disabled:checked]:opacity-70 [&amp;:disabled:checked]:cursor-not-allowed [&amp;:disabled:checked]:dark:bg-darkmode-800/50 w-[38px] h-[24px] p-px rounded-full relative before:w-[20px] before:h-[20px] before:shadow-[1px_1px_3px_rgba(0,0,0,0.25)] before:transition-[margin-left] before:duration-200 before:ease-in-out before:absolute before:inset-y-0 before:my-auto before:rounded-full before:dark:bg-darkmode-600 checked:bg-primary checked:border-primary checked:bg-none before:checked:ml-[14px] before:checked:bg-white"
                        type="checkbox"
                      />
                    </div>
                  </div>
                  <div class="flex items-center mt-5">
                    <div
                      class="pl-4 border-l-2 border-primary dark:border-primary"
                    >
                      <a href="" class="font-medium"> Create New Repository </a>
                      <div class="text-slate-500">04:00 PM</div>
                    </div>
                    <div class="flex items-center ml-auto">
                      <input
                        class="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;[type='radio']]:checked:bg-primary [&amp;[type='radio']]:checked:border-primary [&amp;[type='radio']]:checked:border-opacity-10 [&amp;[type='checkbox']]:checked:bg-primary [&amp;[type='checkbox']]:checked:border-primary [&amp;[type='checkbox']]:checked:border-opacity-10 [&amp;:disabled:not(:checked)]:bg-slate-100 [&amp;:disabled:not(:checked)]:cursor-not-allowed [&amp;:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&amp;:disabled:checked]:opacity-70 [&amp;:disabled:checked]:cursor-not-allowed [&amp;:disabled:checked]:dark:bg-darkmode-800/50 w-[38px] h-[24px] p-px rounded-full relative before:w-[20px] before:h-[20px] before:shadow-[1px_1px_3px_rgba(0,0,0,0.25)] before:transition-[margin-left] before:duration-200 before:ease-in-out before:absolute before:inset-y-0 before:my-auto before:rounded-full before:dark:bg-darkmode-600 checked:bg-primary checked:border-primary checked:bg-none before:checked:ml-[14px] before:checked:bg-white"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12 intro-y box">
            <div
              class="flex items-center px-5 py-5 border-b sm:py-3 border-slate-200/60 dark:border-darkmode-400"
            >
              <h2 class="mr-auto text-base font-medium">General Statistics</h2>
              <div class="relative ml-auto sm:hidden">
                <div
                  class="cursor-pointer block w-5 h-5"
                  href="#"
                  disabled="false"
                  id="headlessui-menu-button-v-121"
                  aria-haspopup="menu"
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
                    class="lucide lucide-more-horizontal-icon stroke-1.5 w-5 h-5 text-slate-500 w-5 h-5 text-slate-500"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </div>
                <!---->
              </div>
              <button
                class="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-secondary/20 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-100/10 hidden sm:flex"
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
                  class="lucide lucide-file-icon stroke-1.5 w-4 h-4 mr-2 w-4 h-4 mr-2"
                >
                  <path
                    d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                  ></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                Download XML
              </button>
            </div>
            <div class="grid grid-cols-1 gap-6 p-5 2xl:grid-cols-7">
              <div class="2xl:col-span-2">
                <div class="grid grid-cols-2 gap-6">
                  <div
                    class="col-span-2 p-5 sm:col-span-1 2xl:col-span-2 box dark:bg-darkmode-500"
                  >
                    <div class="font-medium">Net Worth</div>
                    <div class="flex items-center mt-1 sm:mt-0">
                      <div class="flex w-20 mr-4">
                        USP:
                        <span class="ml-3 font-medium text-success">
                          +23%
                        </span>
                      </div>
                      <div class="w-5/6 overflow-auto">
                        <div style="height: 51px">
                          <canvas
                            class=""
                            style="
                              display: block;
                              box-sizing: border-box;
                              height: 51px;
                              width: 309px;
                            "
                            width="309"
                            height="51"
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-span-2 p-5 sm:col-span-1 2xl:col-span-2 box dark:bg-darkmode-500"
                  >
                    <div class="font-medium">Sales</div>
                    <div class="flex items-center mt-1 sm:mt-0">
                      <div class="flex w-20 mr-4">
                        USP:
                        <span class="ml-3 font-medium text-danger"> -5% </span>
                      </div>
                      <div class="w-5/6 overflow-auto">
                        <div style="height: 51px">
                          <canvas
                            class=""
                            style="
                              display: block;
                              box-sizing: border-box;
                              height: 51px;
                              width: 313px;
                            "
                            width="313"
                            height="51"
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-span-2 p-5 sm:col-span-1 2xl:col-span-2 box dark:bg-darkmode-500"
                  >
                    <div class="font-medium">Profit</div>
                    <div class="flex items-center mt-1 sm:mt-0">
                      <div class="flex w-20 mr-4">
                        USP:
                        <span class="ml-3 font-medium text-danger"> -10% </span>
                      </div>
                      <div class="w-5/6 overflow-auto">
                        <div style="height: 51px">
                          <canvas
                            class=""
                            style="
                              display: block;
                              box-sizing: border-box;
                              height: 51px;
                              width: 312px;
                            "
                            width="312"
                            height="51"
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-span-2 p-5 sm:col-span-1 2xl:col-span-2 box dark:bg-darkmode-500"
                  >
                    <div class="font-medium">Products</div>
                    <div class="flex items-center mt-1 sm:mt-0">
                      <div class="flex w-20 mr-4">
                        USP:
                        <span class="ml-3 font-medium text-success">
                          +55%
                        </span>
                      </div>
                      <div class="w-5/6 overflow-auto">
                        <div style="height: 51px">
                          <canvas
                            class=""
                            style="
                              display: block;
                              box-sizing: border-box;
                              height: 51px;
                              width: 309px;
                            "
                            width="309"
                            height="51"
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full 2xl:col-span-5">
                <div class="flex justify-center mt-8">
                  <div class="flex items-center mr-5">
                    <div class="w-2 h-2 mr-3 rounded-full bg-primary"></div>
                    <span>Product Profit</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-2 h-2 mr-3 rounded-full bg-slate-300"></div>
                    <span>Author Sales</span>
                  </div>
                </div>
                <div class="mt-8">
                  <div style="height: 420px">
                    <canvas
                      class=""
                      style="
                        display: block;
                        box-sizing: border-box;
                        height: 420px;
                        width: 1149px;
                      "
                      width="1149"
                      height="420"
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
