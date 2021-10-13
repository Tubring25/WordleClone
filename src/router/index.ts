/*
 * @Description: 
 * @Date: 2021-10-02 23:32:24
 * @LastEditTime: 2021-10-13 18:43:20
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index',
    name: 'About',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'about',
        component: () => import('@/views/home/index.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
