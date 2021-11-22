<!--
 * @Description:
 * @Date: 2021-10-13 18:43:03
 * @LastEditTime: 2021-11-22 23:43:45
-->
<template>
  <div class="home">
    <n-grid :x-gap="14" :y-gap="20" :cols="14">
      <n-grid-item :span="9">
        <div class="home__banner">
          <h2>Recent Release</h2>
          <n-carousel autoplay>
            <img :src="item.imageUrl" alt="" v-for="item in bannerList" :key="item.imageUrl">
          </n-carousel>
        </div>
      </n-grid-item>
      <n-grid-item :span="5">
        <h2>Top List</h2>
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
        </n-space>
      </n-grid-item>
      <n-grid-item :span="9">
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
            <span class="home__music-list__item__artist" v-for="artist in item.ar" :key="artist.id">
              {{artist.name}}
            </span>
            <i class="iconfont icon-bofang" @click="addCurrentPlay(item)"></i>
          </div>
        </n-space>
      </n-grid-item>
      <n-grid-item :span="5">
        <div class="home__player">
          <img src="" alt="">
          <span class="home__player__title">{{}}</span>
          <span class="home__player__artist">{{}}</span>
        </div>
      </n-grid-item>
    </n-grid>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import * as Dashboard from '@/apis/dashboard'
import { NGrid, NGridItem, NCarousel, NSpace, NTabs, NTabPane, NTooltip } from 'naive-ui'
// import { songStore } from '@/store/song'

export default defineComponent({
  name: 'Home',
  components: { NGrid, NGridItem, NCarousel, NSpace, NTabs, NTabPane, NTooltip },
  setup() {
    // const SongStore = songStore()

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

    const currentPlayer = reactive({})
    const getSongUrl = async(id: number | string) => {
      try {
        const res = await Dashboard.getSongUrl({ id: 1893736474 })
        console.log(res)
      } catch (err: any) { console.error(err) }
    }

    const addCurrentPlay = async(item:any) => {
      const { id, name, picUrl: img } = item.al
      const artist = item.ar
      const currentSongInfo = { id, name, img, artist, url: null, enable: tru }
      try {
        const res = await Dashboard.getSongUrl(id)
        currentSongInfo.url = res.data[0].url
      } catch (err) { console.error(err) }
      console.log('item', item)
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
      box-shadow: 0 3px 10px @text-dark;
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
      width: 65%;
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
}
</style>
