import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: () => import('@/pages/index.vue'),
      children: [
        {
          path: '/about',
          name: 'About',
          component: () => import('@/pages/about/index.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/auth/login.vue'),
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('@/pages/admin/index.vue'),
      children: [
        {
          path: '/admin/about',
          name: 'AdminAbout',
          component: () => import('@/pages/about/index.vue'),
        },
      ],
    },
  ],
})

export default router
