/*
 * @Author: yxd
 * @Date: 2023-02-13 12:32:13
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-02-13 14:56:49
 * @Description: 
 */
import { createApp } from 'vue' 
import App from './App.vue'

import { setupStore } from './store'
import { setupRouter } from './router'

import 'bootstrap/dist/js/bootstrap'


function bootstrap(){
  const app = createApp(App)

  //router 
  setupRouter(app)
  //store
  setupStore(app)

  app.mount('#app')
}



bootstrap()