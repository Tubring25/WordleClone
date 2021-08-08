/*
 * @Description: 工具函数
 * @Date: 2021-08-08 16:03:17
 * @LastEditTime: 2021-08-08 16:17:41
 */

/**
 * @description: 验证是否合法账号 | 密码
 * @param {string} value
 * @return {boolean}
 */
export const isWebAccount = (value: string): boolean => /^[a-zA-Z]\w{4,15}$/g.test(value)

/**
 * @param { string } str 待处理字符串
 * @param  { number } type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
 */
export const trimStr = (str: string, type = 1): string | void => {
  if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return
  switch (type) {
    case 1:
      return str.replace(/\s/g, '')
    case 2:
      return str.replace(/(^\s)|(\s*$)/g, '')
    case 3:
      return str.replace(/(^\s)/g, '')
    case 4:
      return str.replace(/(\s$)/g, '')
    default:
      return str
  }
}
