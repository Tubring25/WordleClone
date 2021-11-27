/*
 * @Description:
 * @Date: 2021-11-26 17:26:46
 * @LastEditTime: 2021-11-26 17:59:46
 */

export interface SentCaptcha{
  phone: number | string,
  ctcode?: number | string
}

export interface VerifyCaptcha {
  phone: number | string,
  captcha: number | string
}

export interface CellphoneLogin {
  phone: number | string,
  password: string,
  countrycode?: number,
  md5_password?: string,
  captcha?: number | string
}
