import { createApp } from 'vue'
import App from './App.vue'
import router from './router/main'
// 统一样式规则
import './assets/css/index.less'

import store from './store'

import hyRequest from './service'

//axios 小demo练习
// import './service/axios_demo'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

//Element-Plus 全局引入icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// hyRequest.request({
//   url: '/api/Home/GetStu',
//   method: 'GET',
//   showLoading: false
// })
// .then((res) => {
//   // console.log(res.data)
//   // console.log(res.data)
// })
