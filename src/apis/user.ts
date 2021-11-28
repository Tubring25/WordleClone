/*
 * @Description:
 * @Date: 2021-11-08 16:24:04
 * @LastEditTime: 2021-11-28 10:34:23
 */
import request from '@/utils/http/index'
import * as User from './modules/user'

export function loginByPhone(data:User.CellphoneLogin):Promise<any> {
  return request({ url: '/login/cellphone', method: 'post', data })
}

