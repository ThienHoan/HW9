<script setup lang="ts">
// No need to import AppSidebar and AppHeader - they're handled by AppLayout
</script>

<template>
  <div class="flex items-center mt-8 intro-y">
    <h2 class="mr-auto text-lg font-medium">Form Layout</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="col-span-12 intro-y lg:col-span-6">
      <div class="p-5 intro-y box">
        <div>
          <label class="inline-block mb-2" for="crud-form-1">Product Name</label
          ><input
            class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 w-full"
            type="text"
            id="crud-form-1"
            placeholder="Input text"
          />
        </div>
        <div class="mt-3">
          <label
            class="inline-block mb-2"
            for="crud-form-2-ts-control"
            id="crud-form-2-ts-label"
            >Category</label
          ><select
            multiple=""
            class="tom-select w-full"
            id="crud-form-2"
            value="1,3"
            data-id="_oah7cizxg"
            hidden="true"
          >
            <option value="1">Sport &amp; Outdoor</option>
            <option value="2">PC &amp; Laptop</option>
            <option value="3">Smartphone &amp; Tablet</option>
            <option value="4">Photography</option>
          </select>
          <div
            class="ts-wrapper tom-select w-full multi plugin-remove_button plugin-dropdown_input has-items"
          >
            <div
              class="ts-control"
              role="combobox"
              aria-haspopup="listbox"
              aria-expanded="false"
              aria-controls="crud-form-2-ts-dropdown"
              id="crud-form-2-ts-control"
              aria-labelledby="crud-form-2-ts-label"
              tabindex="0"
            >
              <div data-value="1" class="item" data-ts-item="">
                Sport &amp; Outdoor<a
                  href="javascript:void(0)"
                  class="remove"
                  tabindex="-1"
                  title="Remove this item"
                  >×</a
                >
              </div>
              <div data-value="3" class="item" data-ts-item="">
                Smartphone &amp; Tablet<a
                  href="javascript:void(0)"
                  class="remove"
                  tabindex="-1"
                  title="Remove this item"
                  >×</a
                >
              </div>
              <input class="items-placeholder" tabindex="-1" placeholder="" />
            </div>
            <div
              class="ts-dropdown multi plugin-remove_button plugin-dropdown_input"
              style="display: none"
            >
              <div class="dropdown-input-wrap">
                <input
                  type="text"
                  autocomplete="off"
                  size="1"
                  tabindex="-1"
                  class="dropdown-input"
                />
              </div>
              <div
                role="listbox"
                tabindex="-1"
                class="ts-dropdown-content"
                id="crud-form-2-ts-dropdown"
                aria-labelledby="crud-form-2-ts-label"
              ></div>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <label class="inline-block mb-2" for="crud-form-3">Quantity</label>
          <div class="flex">
            <input
              class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 rounded-none [&amp;:not(:first-child)]:border-l-transparent first:rounded-l last:rounded-r z-10"
              type="text"
              id="crud-form-3"
              placeholder="Quantity"
              aria-describedby="input-group-1"
            />
            <div
              class="py-2 px-3 bg-slate-100 border shadow-sm border-slate-200 text-slate-600 dark:bg-darkmode-900/20 dark:border-darkmode-900/20 dark:text-slate-400 rounded-none [&amp;:not(:first-child)]:border-l-transparent first:rounded-l last:rounded-r"
              id="input-group-1"
            >
              pcs
            </div>
          </div>
        </div>
        <div class="mt-3">
          <label class="inline-block mb-2" for="crud-form-4">Weight</label>
          <div class="flex">
            <input
              class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 rounded-none [&amp;:not(:first-child)]:border-l-transparent first:rounded-l last:rounded-r z-10"
              type="text"
              id="crud-form-4"
              placeholder="Weight"
              aria-describedby="input-group-2"
            />
            <div
              class="py-2 px-3 bg-slate-100 border shadow-sm border-slate-200 text-slate-600 dark:bg-darkmode-900/20 dark:border-darkmode-900/20 dark:text-slate-400 rounded-none [&amp;:not(:first-child)]:border-l-transparent first:rounded-l last:rounded-r"
              id="input-group-2"
            >
              grams
            </div>
          </div>
        </div>
        <div class="mt-3">
          <label>Active Status</label>
          <div class="flex items-center mt-2">
            <input
              class="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;[type='radio']]:checked:bg-primary [&amp;[type='radio']]:checked:border-primary [&amp;[type='radio']]:checked:border-opacity-10 [&amp;[type='checkbox']]:checked:bg-primary [&amp;[type='checkbox']]:checked:border-primary [&amp;[type='checkbox']]:checked:border-opacity-10 [&amp;:disabled:not(:checked)]:bg-slate-100 [&amp;:disabled:not(:checked)]:cursor-not-allowed [&amp;:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&amp;:disabled:checked]:opacity-70 [&amp;:disabled:checked]:cursor-not-allowed [&amp;:disabled:checked]:dark:bg-darkmode-800/50 w-[38px] h-[24px] p-px rounded-full relative before:w-[20px] before:h-[20px] before:shadow-[1px_1px_3px_rgba(0,0,0,0.25)] before:transition-[margin-left] before:duration-200 before:ease-in-out before:absolute before:inset-y-0 before:my-auto before:rounded-full before:dark:bg-darkmode-600 checked:bg-primary checked:border-primary checked:bg-none before:checked:ml-[14px] before:checked:bg-white"
              type="checkbox"
            />
          </div>
        </div>
        <div class="mt-5 text-right">
          <button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-secondary/20 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-100/10 w-24 mr-1"
            type="button"
          >
            Cancel</button
          ><button
            class="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary w-24"
            type="button"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
