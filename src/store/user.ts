/*
 * @Description:
 * @Date: 2021-11-08 11:39:16
 * @LastEditTime: 2021-12-08 18:59:15
 */
import { defineStore } from 'pinia'
declare type Nullable<T> = T | null

interface Profile {
  username: string,
  email?: string,
  phone?: string | number,
  [propName: string]: string | number | undefined;
}
interface Account {
  id: number,
  status: number,
  type: number,
  vipType: number,
  [propName: string]: string | number | undefined
}

interface UserState {
  profile: Nullable<Profile>,
  token?: string,
  account: Nullable<Account>
}

export const userStore = defineStore({
  id: 'user-store',
  state: (): UserState => ({
    profile: null,
    token: undefined,
    account: null
  })
})
