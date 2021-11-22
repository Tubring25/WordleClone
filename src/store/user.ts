/*
 * @Description:
 * @Date: 2021-11-08 11:39:16
 * @LastEditTime: 2021-11-22 10:09:32
 */
import { defineStore } from 'pinia'

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
