import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AppLayout from '@/components/layouts/AppLayout.vue'
import UsersListPage from '@/views/UsersListPage.vue'
import CrudPage from '@/views/CrudPage.vue'
import Profile from '@/views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        { path: '', name: 'home', component: UsersListPage },
        { path: 'users', name: 'users', component: UsersListPage },
        { path: 'about', name: 'about', component: HomeView },
        { path: 'crud-form', name: 'crud-form', component: CrudPage },
        { path: 'profile', name: 'profile', component: Profile },
        { path: 'profile/:id', name: 'user-profile', component: Profile },
      ],
    },
  ],
})

export default router
