/*
 * @Description:
 * @Date: 2021-11-08 18:21:12
 * @LastEditTime: 2021-11-08 22:17:23
 */

export interface Search {
  keywords: string
}

export interface SearchResult {
  [key:string]: any
}

export interface BannerType{
  type?: number
}

export interface BannerList {
  imageUrl?: string,
  typeTitle?: string
}
