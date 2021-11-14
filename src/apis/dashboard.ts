/*
 * @Description:
 * @Date: 2021-11-08 16:32:15
 * @LastEditTime: 2021-11-14 20:54:28
 */

import request from '@/utils/http/index'
import * as Dashboard from './modules/dashboard'

/**
 * @description: 首页搜索
 * @param {Search} params
 * @return {*}
 */
export function search(params:Dashboard.Search):Promise<any> {
  return request({ url: `/search`, params })
}

export function getBanner(params:Dashboard.BannerType):Promise<any> {
  return request({ url: '/banner', params })
}

export function getTopPlaylist(params:Dashboard.TopList):Promise<any> {
  return request({ url: '/top/playlist', params })
}

export function getTopList():Promise<any> {
  return request({ url: '/toplist' })
}
