/*
 * @Description:
 * @Date: 2021-11-08 11:39:16
 * @LastEditTime: 2021-12-09 16:53:33
 */
import { defineStore } from 'pinia'
declare type Nullable<T> = T | null

interface Profile {
  nickname: string,
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
  }),
  getters: {
    getProfile: (state) => {
      return state.profile ?? JSON.parse(sessionStorage.getItem('netease-profile') ?? '') ?? null
    },
    getToken: (state) => {
      return state.token ?? sessionStorage.getItem('netease-token') ?? null
    },
    getAccount: (state) => {
      return state.account ?? JSON.parse(sessionStorage.getItem('netease-account') ?? '') ?? null
    }
  },
  actions: {
    setProfile(profile: Profile):void {
      this.profile = profile
      sessionStorage.setItem('netease-profile', JSON.stringify(profile))
    },
    setToken(token: string):void {
      this.token = token
      sessionStorage.setItem('netease-token', token)
    },
    setAccount(account: Account):void {
      this.account = account
      sessionStorage.setItem('netease-account', JSON.stringify(account))
    }
  }
})
