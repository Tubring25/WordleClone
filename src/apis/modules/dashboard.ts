/*
 * @Description:
 * @Date: 2021-11-08 18:21:12
 * @LastEditTime: 2021-11-11 17:50:53
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
  limit?: string,
  offset?: string
}
