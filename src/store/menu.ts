/*
 * @Author: yxd
 * @Date: 2023-02-13 23:54:31
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-02-13 23:59:35
 * @Description: 
 */
import { MenuItem } from '@/components/types/SidebarNav';
import { defineStore } from 'pinia';

export const useMenusStore=defineStore('menu' ,{
  state:()=>({
    menus:[
      {
        id:1,
        name:'首页2',
        path:'dashboard'
      },
      {
        id:2,
        name:'用户管理',
        path:'users'
      },
      {
        id:3,
        name:'菜单管理',
        path:'menus'
      },
      {
        id:4,
        name:'角色管理',
        path:'roles'
      },

    ] as MenuItem[]
  })
})