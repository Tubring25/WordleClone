/*
 * @Description:
 * @Date: 2021-12-09 10:24:41
 * @LastEditTime: 2021-12-09 17:13:24
 */
import { userStore } from '@/store/user'

const UserStore = userStore()

declare type Nullable<T> = T | null

export const checkToken = () => {
  const token:Nullable<string> = UserStore.getToken
  return new Promise((resolve, reject) => {
    token ? resolve(true) : reject(false)
  })
}
