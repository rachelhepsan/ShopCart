import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/signin/SignIn.vue")

    },
    {
      path: "/SignUp",
      name:"SignUp",
      component: () => import("@/views/signup/SignUp.vue")
    },
    {
      path: "/fashion",
      name:"fashion",
      component: () => import("@/views/pdp/PDP.vue")
    },
    
  ]
})

export default router
