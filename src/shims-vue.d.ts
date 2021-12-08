/*
 * @Description:
 * @Date: 2021-10-02 23:32:24
 * @LastEditTime: 2021-12-08 18:35:54
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare interface Window {
  $message: any
}