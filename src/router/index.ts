/*
 * @Description:
 * @Date: 2021-10-02 23:32:24
 * @LastEditTime: 2021-12-19 22:38:46
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue')
      },
      {
        path: 'playlist',
        name: 'PlayList',
        component: () => import('@/views/playlist/index.vue')
      }

    ]
  },
  { path: '/:catchAll(.*)', redirect: '/playlist' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
