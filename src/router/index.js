import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue'
const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue')
  }
]
const privateRoutes = [
  {
    path: '/user',
    component: layout,
    redirect: '/user/manage',
    meta: {
      title: 'user',
      icon: 'personnel'
    },
    children: []
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
