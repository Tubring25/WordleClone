/*
 * @Description:
 * @Date: 2021-10-02 23:32:24
 * @LastEditTime: 2021-11-22 17:55:51
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@/theme/index.less'
import '@/assets/iconfont/iconfont.css'

createApp(App).use(router).use(createPinia()).mount('#app')
