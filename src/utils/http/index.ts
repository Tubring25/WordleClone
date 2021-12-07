/*
 * @Description:
 * @Date: 2021-11-02 21:43:13
 * @LastEditTime: 2021-12-07 18:46:28
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
    const timestamp = new Date()
    if (config.method?.toLocaleLowerCase() === 'post') {
      console.log(config.data)
    }
    config.method?.toLocaleLowerCase() === 'post' ? config.data = Object.assign(config.data, { timestamp: Date.parse(timestamp.toString()) }, { realIP: '192.168.8.108' }) : config.params = Object.assign(config.params ?? {}, { realIP: '192.168.8.108' })
    console.log(config)
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
