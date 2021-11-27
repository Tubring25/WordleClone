/*
 * @Description:
 * @Date: 2021-11-02 21:43:13
 * @LastEditTime: 2021-11-26 18:12:12
 */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AxiosCanceler } from './axiosCanceler'
import { checkStatus } from './checkStatus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})

const axiosCanceler = new AxiosCanceler()

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    axiosCanceler.addPending(config)

    Object.assign(config.params ?? {}, { realIP: '192.168.8.108' })
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  async(response:AxiosResponse<any>) => {
    await checkStatus(response.status)
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
