/*
 * @Description:
 * @Date: 2021-12-19 16:17:51
 * @LastEditTime: 2021-12-19 16:26:24
 */

import { defineStore } from 'pinia'
// declare type Nullable<T> = T | null

export const configStore = defineStore({
  id: 'netease-config',
  state: () => ({
    currentTab: 'dashboard'
  })
})
