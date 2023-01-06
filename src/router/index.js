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

router.afterEach((to)=>{
  window.scrollTo(0,0);
})

export default router
