/*
 * @Description: 
 * @Date: 2021-10-02 23:32:24
 * @LastEditTime: 2021-10-03 19:50:24
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    redirect: '/about/index',
    name: 'About',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'about',
        component: () => import('../views/About.vue')
      },
      {
        path: 'home',
        name: 'Home2',
        component: Home
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
