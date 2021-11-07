/*
 * @Description:
 * @Date: 2021-11-05 16:08:22
 * @LastEditTime: 2021-11-05 17:30:11
 */
import { useMessage } from 'naive-ui'

const Message = useMessage()
export function checkStatus(status: number): Promise<void> {
  let errMsg = ''
  switch (status) {
    case 401:
      errMsg = '未登录，暂无权限'
      break
    case 403:
      errMsg = '已登录，暂无权限'
      break
    case 405:
      errMsg = '请求错误，请求未允许'
      break
    case 408:
      errMsg = '请求超时'
      break
    case 500:
      errMsg = '服务器错误'
      break
    case 501 | 502 | 503 | 504 | 505:
      errMsg = '网络错误'
      break
  }
  if (errMsg) Message.error(errMsg)
  return new Promise<void>((resolve) => { resolve() })
}

