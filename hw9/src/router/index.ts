import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppLayout from '@/components/layouts/AppLayout.vue'
import UsersListPage from '@/modules/users/pages/UsersListPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        { path: '', name: 'home', component: UsersListPage },
        { path: 'users', name: 'users', component: UsersListPage },
        { path: 'about', name: 'about', component: () => import('../views/AboutView.vue') },
      ],
    },
  ],
})

export default router
