/*
 * @Description:
 * @Date: 2021-10-02 23:32:24
 * @LastEditTime: 2021-10-25 22:05:47
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/theme/index.less'
import '@/assets/iconfont/iconfont.css'

createApp(App).use(store).use(router).mount('#app')
