/*
 * @Description:
 * @Date: 2021-10-02 23:32:24
 * @LastEditTime: 2021-11-08 15:55:33
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { store } from './store'
import '@/theme/index.less'
import '@/assets/iconfont/iconfont.css'

createApp(App).use(router).mount('#app')
