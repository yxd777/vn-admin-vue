/*
 * @Author: yxd
 * @Date: 2022-11-06 17:33:34
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-02-15 00:33:40
 * @Description: 
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'bootstrap';