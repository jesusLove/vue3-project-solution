import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import './permission'
import 'element-plus/dist/index.css'
import './styles/index.scss'
import * as ElementPlusIcons from '@element-plus/icons-vue'

const app = createApp(App)
app.use(pinia)
app.use(router)

// 引入 Element-Plus/Icons
for (const [key, component] of Object.entries(ElementPlusIcons)) {
  app.component(key, component)
}

app.mount('#app')
