import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
//获取应用实例对象
const app = createApp(App)
//安装element-plus
app.use(ElementPlus)
app.mount('#app')
