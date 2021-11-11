/*
 * @Description:
 * @Date: 2021-11-08 22:20:18
 * @LastEditTime: 2021-11-08 22:40:54
 */
import { AxiosRequestConfig } from 'axios'

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
  }
}

export interface Result<T = any> {
  code: number;
  result: T;
}
