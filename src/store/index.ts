/*
 * @Author: yxd
 * @Date: 2023-02-13 12:38:33
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-02-13 12:39:58
 * @Description: 
 */
import {createPinia} from 'pinia'
import {App} from 'vue'

const store = createPinia();

export function setupStore (app:App<Element>){
  app.use(store)
}

export {store}