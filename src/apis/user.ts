/*
 * @Description:
 * @Date: 2021-11-08 16:24:04
 * @LastEditTime: 2021-12-07 19:02:16
 */
import request from '@/utils/http/index'
import * as User from './modules/user'

export function loginByPhone(data:User.CellphoneLogin):Promise<any> {
  return request({ url: '/login/cellphone', params: data })
}

export function sendCaptcha(params: User.SentCaptcha):Promise<any> {
  return request({ url: '/captcha/sent', params })
}

export function loginByEmail(data:User.EmailLogin):Promise<any> {
  return request({ url: '/login', params: data })
}

export function getAccountInfo():Promise<any> {
  return request({ url: '/user/account' })
}

