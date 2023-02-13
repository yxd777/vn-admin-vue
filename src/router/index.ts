/*
 * @Author: yxd
 * @Date: 2023-02-13 12:41:47
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-02-13 23:22:27
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
  },
  {
    path:'/home',
    component:()=>import('@/layouts/default.vue'),
    redirect:'/home/dashboard',
    children:[
      {
        path:"dashboard",
        component:()=>import('@/views/dashboard/index.vue')
      },
      {
        name:'users',
        path:"users",
        component:()=>import('@/views/users/index.vue')
      },
      {
        name:'menus',
        path:"menus",
        component:()=>import('@/views/menus/index.vue')
      },
      {
        name:'roles',
        path:"roles",
        component:()=>import('@/views/roles/index.vue')
      },
    ]
  }
]  as  RouteRecordRaw[]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export function setupRouter (app:App<Element>){
  app.use(router)
}

