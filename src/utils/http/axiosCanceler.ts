/*
 * @Description: Axios取消重复请求
 * @Date: 2021-11-05 08:30:17
 * @LastEditTime: 2021-11-08 18:43:02
 */

import axios, { AxiosRequestConfig } from 'axios'
import qs from 'qs'

export class AxiosCanceler {
  private pendingRequest = new Map()
  /**
   * @description: create request key
   * @param {AxiosRequestConfig} config
   * @return {*}
   */
  generateReqKey(config: AxiosRequestConfig): string {
    const { method, url, params, data } = config
    return [method, url, qs.stringify(params), qs.stringify(data)].join('&')
  }
  /**
   * @description: add request to pending map
   * @param {AxiosRequestConfig} config
   * @return {*}
   */
  addPending(config:AxiosRequestConfig):void {
    this.removePending(config)
    const url = this.generateReqKey(config)
    console.log('reeee', config)
    config.cancelToken = config.cancelToken || new axios.CancelToken(cancel => {
      if (!this.pendingRequest.has(url)) this.pendingRequest.set(url, cancel)
    })
  }
  /**
   * @description: remove request from pending map
   * @param {AxiosRequestConfig} config
   * @return {*}
   */
  removePending(config: AxiosRequestConfig): void {
    console.log(123123123123, config)

    const url = this.generateReqKey(config)
    if (this.pendingRequest.has(url)) {
      const cancelToken = this.pendingRequest.get(url)
      cancelToken && cancelToken(url)
      this.pendingRequest.delete(url)
    }
  }
  /**
   * @description: clear all pending request
   * @param {*}
   * @return {*}
   */
  removeAllPending():void {
    this.pendingRequest.forEach(cancel => {
      cancel && cancel()
    })
    this.pendingRequest.clear()
  }
}
