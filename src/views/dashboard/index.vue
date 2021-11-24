<!--
 * @Description:
 * @Date: 2021-10-13 18:43:03
 * @LastEditTime: 2021-11-24 23:04:22
-->
<template>
  <div class="home">
        <div class="home__grid box-1">
          <div class="home__banner">
            <h2>Recent Release</h2>
            <n-carousel autoplay>
              <img :src="item.imageUrl" alt="" v-for="item in bannerList" :key="item.imageUrl">
            </n-carousel>
          </div>
        <!-- <h2>Top List</h2>
        <n-space vertical class="home__top-list" >
           <div class="home__top-list__item" v-for="item in topPlayList" :key="item.id">
              <img :src="item.coverImgUrl" alt="">
              <n-tooltip v-if="item.name.length > 15" placement="top-start" trigger="hover">
                <template #trigger>
                  <span class="home__top-list__item__title">{{item.name}}</span>
                </template>
                {{item.name}}
              </n-tooltip>
              <span v-else class="home__top-list__item__title">{{item.name}}</span>
            </div>
        </n-space> -->
        </div>
        <div class="home__grid box-2">
<h2>Player</h2>
        <div class="home__player">
          <img src="@/assets/icon.png" alt="">
          <span class="home__player__title">{{currentPlayer?.name ?? 'name'}}</span>
          <span class="home__player__artist">{{currentPlayer?.artist ?? 'artist'}}</span>
          <!-- <audio controls>
            <source src="music.mp3" type="audio/mpeg">
          </audio> -->
          <ProgressBar />
        </div>
        </div>
        <div class="home__grid box-3">
          <h2>Ranks</h2>
        <n-tabs type="card" @update:value="changeTab" class="home__music-tabs">
          <n-tab-pane tab="飙升榜" name="19723756"></n-tab-pane>
          <n-tab-pane tab="新歌榜" name="3779629"></n-tab-pane>
          <n-tab-pane tab="热歌榜" name="3778678"></n-tab-pane>
        </n-tabs>
        <n-space vertical class="home__music-list">
          <div class="home__music-list__item"  v-for="(item, index) in rankList" :key="item.id">
            <span class="home__music-list__item__index">{{index+1}}</span>
            <img :src="item.al.picUrl" alt="">
            <n-tooltip v-if="item.name.length > 15" placement="top-start" trigger="hover">
              <template #trigger>
                <span class="home__music-list__item__title">{{item.name}}</span>
              </template>
              {{item.name}}
            </n-tooltip>
            <span v-else  class="home__music-list__item__title">
              {{item.name}}
            </span>
            <n-tooltip v-if="item.ar.map(ar => ar.name).join('/').length > 10" placement="top-start" trigger="hover">
              <template #trigger>
                <span class="home__music-list__item__artist" >
                  {{`${item.ar.map(ar => ar.name).join('/')}`}}
                </span>
              </template>
              {{`${item.ar.map(ar => ar.name).join('/')}`}}
            </n-tooltip>
            <span v-else class="home__music-list__item__artist" >
              {{`${item.ar.map(ar => ar.name).join('/')}`}}
            </span>
            <i class="iconfont icon-bofang" @click="addCurrentPlay(item)"></i>
          </div>
        </n-space>
        </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as Dashboard from '@/apis/dashboard'
import { NCarousel, NSpace, NTabs, NTabPane, NTooltip } from 'naive-ui'
import { songStore } from '@/store/song'
import ProgressBar from '@/components/ProgressBar/ProgressBar.vue'

// interface SongInfo{
//   id: string | number,
//   name: string
//   artist: string[],
//   url: string,
//   img: string,
//   enable: boolean
// }

export default defineComponent({
  name: 'Home',
  components: { NCarousel, NSpace, NTabs, NTabPane, NTooltip, ProgressBar },
  setup() {
    const SongStore = songStore()

    const bannerList = ref([])
    const getBanner = async() => {
      try {
        const res = await Dashboard.getBanner({ type: 0 })
        bannerList.value = res.banners
      } catch (err:any) { console.error(err) }
    }

    const topPlayList = ref([])
    const getTopPlayList = async() => {
      try {
        const res = await Dashboard.getTopPlaylist({ limit: 4 })
        topPlayList.value = res.playlists
      } catch (err:any) { console.error(err) }
    }

    const changeTab = (value: string | number):void => {
      getPlaylistDetail(value)
    }
    const rankList = ref([])
    const getPlaylistDetail = async(tabId: number | string) => {
      try {
        const res = await Dashboard.getPlaylistDetail({ id: tabId })
        rankList.value = res.playlist.tracks.slice(0, 9)
      } catch (err:any) { console.error(err) }
    }

    let currentPlayer
    const getSongUrl = async(id: number | string) => {
      try {
        const res = await Dashboard.getSongUrl({ id: 1893736474 })
        console.log(res)
      } catch (err: any) { console.error(err) }
    }

    const addCurrentPlay = async(item:any) => {
      const { id, name, picUrl: img } = item.al
      const artist = item.ar
      currentPlayer = { id, name, img, artist, url: '', enable: true }
      try {
        const res = await Dashboard.getSongUrl(id)
        currentPlayer.url = res.data[0].url
        SongStore.songInfo = currentPlayer
      } catch (err) { console.error(err) }
    }

    onMounted(() => {
      getBanner()
      getTopPlayList()
      getPlaylistDetail(19723756)
      getSongUrl(1886371886)
    })
    return {
      bannerList,
      topPlayList,
      changeTab,
      rankList,
      currentPlayer,
      addCurrentPlay
    }
  }
})
</script>
<style lang="less" scoped>
.home {
  display: grid;
  overflow: scroll;

  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  .box-1 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 1;
  }
  .box-2 {
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .box-3 {
    grid-row: 2;
    grid-column-start: 1;
    grid-column-end: 4;
  }
  h2 {
    color: @text-dark;
    opacity: .7;
  }
  &__banner {
    width: 95%;
    .n-carousel {
      width: 100%;
      height: 100%;
      border-radius: 15px;
      box-shadow: 0 3px 10px @active-color;
      img {
        width: 100%;
        height: 100%;
        border-radius: 15px;
      }
    }
  }
  &__top-list__item, &__music-list__item{
    height: 50px;
    border-radius: 5px;
    background: #fff;
    line-height: 50px;
    img {
      padding: 10px 20px;
      width: 30px;
      border-radius: 5px;
    }
    &__index {
      display:inline-block;
      margin: 0 10px;
      width: 10px;
      height: 100%;
      vertical-align: top;
    }
    &__title{
      display:inline-block;
      overflow: hidden;
      margin-left: 10px;
      width: 55%;
      height: 100%;
      vertical-align: top;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  &__music-tabs {
    width: 95%;
  }
  &__music-list {
    overflow: scroll;
    max-height: 220px;
    &__item{
      width: 95%;
      &__title {
        width: 40%;
      }
      &__artist {
        display: inline-block;
        padding: 0 10px;
        width: 30%;
        height: 100%;
        vertical-align: top;
        opacity: .7;
      }
      i {
        vertical-align: top;
      }
    }
  }
  &__player {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95%;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 2px 10px @active-color;
    img {
      margin: 60px auto;
      width: 60%;
      border-radius: 10px;
    }
    &__title, &__artist{
      display: inline-block;
      width: 100%;
      text-align: center;
      font-size: 16px;
    }
    &__title {
      padding-bottom: 10px;
      font-weight: bold;
      font-size: 18px;
    }
  }
}
</style>
