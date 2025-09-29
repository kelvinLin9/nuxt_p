import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: () => import('@/pages/layout/index.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/auth/login.vue'),
    },
  ],
})

export default router
