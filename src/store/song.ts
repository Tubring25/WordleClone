/*
 * @Description:
 * @Date: 2021-11-22 09:48:45
 * @LastEditTime: 2021-12-09 10:29:34
 */
import { defineStore } from 'pinia'

declare type Nullable<T> = T | null

interface SongInfo{
  id: string | number,
  name: string
  artist: string[],
  url: string,
  img: string,
  enable: boolean
}

interface SongState {
  songInfo: Nullable<SongInfo>
}

export const songStore = defineStore({
  id: 'song-store',
  state: ():SongState => ({
    songInfo: null
  })
})
