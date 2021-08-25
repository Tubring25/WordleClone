/*
 * @Description: main.ts
 * @Date: 2021-06-21 18:30:03
 * @LastEditTime: 2021-08-24 09:31:09
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import * as Icons from '@ant-design/icons-vue'

const icons: any = Icons

const app = createApp(App)
app.use(Antd).use(store).use(router).mount('#app')
for (const i in icons) {
  app.component(i, icons[i])
}
