/*
 * @Description:
 * @Date: 2021-12-03 16:21:44
 * @LastEditTime: 2021-12-03 16:25:34
 */

export const checkEmpty = (rule:any, value:string | number, msg:string) => {
  if (!value) {
    return (new Error(msg))
  } else {
    return
  }
}
