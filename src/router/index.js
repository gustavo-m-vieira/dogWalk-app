import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: () => import('../components/landing-page/LandingPage.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../components/sign-up/SignUp.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login/Login.vue')
    },
    {
      path: '/pet-register',
      name: 'pet-register',
      component: () => import('../components/pet-register/PetRegister.vue')
    },
    {
      path: '/walker-trip',
      name: 'create-trip',
      component: () => import('../components/create-trip/CreateTrip.vue')
    },
    {
      path: '/tutor-page',
      name: 'tutor-page',
      component: () => import('../components/tutor-page/TutorPage.vue')
    }
  ]
})

export default router
