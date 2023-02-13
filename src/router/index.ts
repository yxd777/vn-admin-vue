/*
 * @Author: yxd
 * @Date: 2023-02-13 12:41:47
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-02-13 12:58:49
 * @Description: 
 */
import { App } from 'vue'
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes =[
  {
    path:'/login',
    component:()=>import('@/views/login/login.vue')
  },
    {
    path:'/reg',
    component:()=>import('@/views/login/reg.vue')
  }
]  as  RouteRecordRaw[]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export function setupRouter (app:App<Element>){
  app.use(router)
}

