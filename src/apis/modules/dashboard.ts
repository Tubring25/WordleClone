/*
 * @Description:
 * @Date: 2021-11-08 18:21:12
 * @LastEditTime: 2022-01-04 20:56:55
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
  offset?: number
}

export interface PlaylistDetail {
  id: number | string,
  s?: number
}

export interface SongUrl {
  id: number | string,
  br?: number
}
