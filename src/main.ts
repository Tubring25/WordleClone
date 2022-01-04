/*
 * @Description:
 * @Date: 2021-10-02 23:32:24
 * @LastEditTime: 2022-01-02 13:23:40
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@/theme/index.less'
import '@/assets/iconfont/iconfont.css'
import { useMessage } from 'naive-ui'

const app = createApp(App)

app.config.globalProperties.$message = useMessage()

app.use(router).use(createPinia()).mount('#app')
