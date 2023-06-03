import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../components/sign-up/SignUp.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login.vue')
    }
  ]
})

export default router
