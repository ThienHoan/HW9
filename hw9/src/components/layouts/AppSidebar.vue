<script setup lang="ts">
import { RouterLink } from "vue-router";
import { index } from "@/assets/index.css";
</script>

<template>
  <nav
    class="side-nav hidden w-[80px] overflow-x-hidden pb-16 pr-5 md:block xl:w-[230px]"
  >
    <RouterLink to="/" class="side-menu flex items-center pt-4 pl-5 intro-x" :class="{ 'side-menu--active': $route.path === '/' }">
      <img
        alt="Midone - Tailwind Admin Dashboard Template"
        class="w-6"
        src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='311.899'%20height='291.707'%20viewBox='0%200%20311.899%20291.707'%3e%3cg%20id='Icon_ionic-ios-apps'%20data-name='Icon%20ionic-ios-apps'%20transform='translate(-4.57%20-4.492)'%3e%3cpath%20id='Path_9'%20data-name='Path%209'%20d='M305.678,64.318,184.327,9a65.721,65.721,0,0,0-47.842,0L15.134,64.318A65.721,65.721,0,0,0,0,110.16V281.547a65.721,65.721,0,0,0,15.134,45.842L136.485,382.707a65.721,65.721,0,0,0,47.842,0L290.544,327.389A65.721,65.721,0,0,0,305.678,281.547V110.16A65.721,65.721,0,0,0,290.544,64.318ZM136.485,327.389L15.134,281.547V110.16L136.485,164.002V327.389Z'%20transform='translate(4.57%204.492)'%20fill='%23fff'/%3e%3c/g%3e%3c/svg%3e"
      />
      <div class="side-menu__title">
        Rubick
        <div class="side-menu__sub-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </RouterLink>
    <div class="side-nav__divider my-6"></div>
    <ul>
      <li>
        <RouterLink to="/crud-form" class="side-menu" :class="{ 'side-menu--active': $route.path === '/crud-form' }">
          <div class="side-menu__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="side-menu__title">
            Crud
            <div class="side-menu__sub-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/users" class="side-menu" :class="{ 'side-menu--active': $route.path === '/users' || $route.path === '/' }">
          <div class="side-menu__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="side-menu__title">
            Users
            <div class="side-menu__sub-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/profile" class="side-menu" :class="{ 'side-menu--active': $route.path === '/profile' }">
          <div class="side-menu__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="side-menu__title">
            Profile
            <div class="side-menu__sub-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
