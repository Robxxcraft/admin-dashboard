import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: window.scrollTo(0,0),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/dashboard.vue')
    },
    {
      path: '/statistics',
      component: () => import('../views/statistics.vue')
    },
    {
      path: '/transactions',
      component: () => import('../views/transactions.vue')
    },
    {
      path: '/products',
      component: () => import('../views/products.vue')
    },
    {
      path: '/customer',
      component: () => import('../views/customer.vue')
    },
    {
      path: '/report',
      component: () => import('../views/report.vue')
    },
  ]
})

export default router
