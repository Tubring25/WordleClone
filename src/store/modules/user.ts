/*
 * @Description:
 * @Date: 2021-11-08 11:39:16
 * @LastEditTime: 2021-11-08 15:26:10
 */
import { defineStore } from 'pinia'

declare type Nullable<T> = T | null
interface UserInfo {
  username: string,
  email?: string,
  phone?: string | number,
}

interface UserState {
  userInfo: Nullable<UserInfo>,
  token?: string
}

export const useUserStore = defineStore({
  id: 'user-store',
  state: (): UserState => ({
    userInfo: null,
    token: undefined
  })
})
