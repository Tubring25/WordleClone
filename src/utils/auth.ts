/*
 * @Description: auth
 * @Date: 2021-08-05 09:48:54
 * @LastEditTime: 2021-08-12 22:43:19
 */
import Cookies from 'js-cookie'

export function setToken (token: string): void {
  Cookies.set(process.env.VUE_APP_TOKEN, token)
}

export function getToken (): string {
  return Cookies.get(process.env.VUE_APP_TOKEN) ?? ''
}

export function removeToken (): void {
  Cookies.remove(process.env.VUE_APP_TOKEN)
}
