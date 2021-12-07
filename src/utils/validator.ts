/*
 * @Description:
 * @Date: 2021-12-03 16:21:44
 * @LastEditTime: 2021-12-06 15:03:00
 */

export const checkEmpty = (rule:any, value:string | number, msg:string) => {
  if (!value) {
    console.log(value, 'check')

    return (new Error(msg))
  } else {
    return
  }
}
