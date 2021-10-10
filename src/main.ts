import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.dark.less';
import '@/theme/index.less'
import '@/assets/iconfont/iconfont.css'
import Antd from 'ant-design-vue'


createApp(App).use(store).use(router).use(Antd).mount('#app')
