import { createRouter, createWebHistory } from 'vue-router'
import SignIn from "../views/signin/SignIn.vue"

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
      path: "/plp",
      name:"plp",
      component: () => import("@/views/plp/PLP.vue")
    },
    {
      path: "/plp/:productId",
      name:"product-details",
      component: () => import("@/views/pdp/PDP.vue")
    },
  ]
})

export default router
