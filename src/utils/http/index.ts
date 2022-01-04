/*
 * @Description:
 * @Date: 2021-11-02 21:43:13
 * @LastEditTime: 2022-01-02 13:25:14
 */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AxiosCanceler } from './axiosCanceler'
// import { checkStatus } from './checkStatus'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})

const axiosCanceler = new AxiosCanceler()

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    nProgress.start()
    axiosCanceler.addPending(config)
    const cookie = sessionStorage.getItem('netease-cookie')
    config.params = Object.assign(config.params ?? {}, { realIP: '192.168.8.108' }, cookie ? { cookie: encodeURIComponent(cookie) } : null)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  async(response:AxiosResponse<any>) => {
    if (response.data.code !== 200 || response.status !== 200) {
      window.$message.error(response?.data?.msg ?? '请求出错')
      nProgress.done()
      return Promise.reject(response?.data?.msg)
    } else {
      nProgress.done()
      return response.data
    }
  },
  error => {
    window.$message.error(error.response?.data?.msg ?? '请求出错')
    return Promise.reject(error)
  }
)

export default service
