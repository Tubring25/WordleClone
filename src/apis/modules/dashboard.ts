/*
 * @Description:
 * @Date: 2021-11-08 18:21:12
 * @LastEditTime: 2021-11-12 18:03:34
 */

export interface Search {
  keywords: string
}

export interface BannerType{
  type?: number
}

export interface BannerList {
  imageUrl?: string,
  typeTitle?: string
}

export interface TopList {
  order?: string,
  cat?: string,
  limit?: number,
  offset?: string
}
