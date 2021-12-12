/*
 * @Description:
 * @Date: 2021-12-09 19:01:16
 * @LastEditTime: 2021-12-09 19:03:33
 */
import request from '@/utils/http/index'
import * as Common from './modules/common'

export function getRecentPlaylist(params:Common.onlyAvaLimit):Promise<any> {
  return request({ url: '/record/recent/playlist', params: params })
}
