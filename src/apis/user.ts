/*
 * @Description:
 * @Date: 2021-11-08 16:24:04
 * @LastEditTime: 2021-12-04 20:29:34
 */
import request from '@/utils/http/index'
import * as User from './modules/user'

export function loginByPhone(data:User.CellphoneLogin):Promise<any> {
  return request({ url: '/login/cellphone', method: 'post', data })
}

export function sendCaptcha(params: User.SentCaptcha):Promise<any> {
  return request({ url: '/captcha/sent', params })
}

