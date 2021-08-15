/*
 * @Description: 路由
 * @Date: 2021-06-21 18:30:03
<<<<<<< HEAD
 * @LastEditTime: 2021-08-15 22:30:12
=======
 * @LastEditTime: 2021-08-12 22:40:10
>>>>>>> eb2b45a8c7b890a66f8281f1a94a3ea206c3e1de
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

export const openRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: '首页', icon: 'AndroidOutlined' },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
        props: true,
        meta: { title: '首页', icon: 'AndroidOutlined' }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录', hidden: true }
  },
  {
    path: '/test',
    name: 'test',
    component: Layout,
    redirect: '/test/test1',
    meta: { title: '测试' },
    children: [
      {
        path: 'test1',
        name: 'test1',
        component: () => import('@/views/Home.vue'),
        meta: { title: '测试1', icon: 'AndroidOutlined' }
      },
      {
        path: 'test2',
        name: 'test2',
        redirect: 'test2/test3',
        meta: { title: '测试2', icon: 'WindowsOutlined' },
        children: [
          {
            path: 'test3',
            name: 'test3',
            component: () => import('@/views/test3.vue'),
            meta: { title: '测试3', icon: 'IeOutlined' }
          },
          {
            path: 'test',
            name: 'hidden',
            component: () => import('@/views/test2.vue'),
            meta: { title: '测试2', icon: 'AndroidOutlined', hidden: true }
          }
        ]
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: { hidden: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: openRoutes
})

export default router
