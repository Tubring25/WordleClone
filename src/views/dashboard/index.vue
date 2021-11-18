<!--
 * @Description:
 * @Date: 2021-10-13 18:43:03
 * @LastEditTime: 2021-11-18 22:24:39
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
        <n-space vertical >
           <div class="home__top-list" v-for="item in topPlayList" :key="item.id">
              <img :src="item.coverImgUrl" alt="">
              <n-tooltip v-if="item.name.length > 15" placement="top-start" trigger="hover">
                <template #trigger>
                  <span>{{item.name}}</span>
                </template>
                {{item.name}}
              </n-tooltip>
              <span v-else>{{item.name}}</span>
            </div>
        </n-space>
      </n-grid-item>
      <n-grid-item :span="9">
        <h2>Ranks</h2>
        <n-tabs type="card" @update:value="changeTab">
          <n-tab-pane tab="飙升榜" name="19723756"></n-tab-pane>
          <n-tab-pane tab="新歌榜" name="3779629"></n-tab-pane>
          <n-tab-pane tab="热歌榜" name="3778678"></n-tab-pane>
        </n-tabs>
        <n-space vertical >
          <div class="home__music-list"  v-for="(item, index) in rankList" :key="item.id">
            <span>{{index+1}}</span>
            <img :src="item.al.picUrl" alt="">
            <n-tooltip v-if="item.name.length > 15" placement="top-start" trigger="hover">
              <template #trigger>
                <span>{{item.name}}</span>
              </template>
              {{item.name}}
              </n-tooltip>
            <span v-else>{{item.name}}</span>
          </div>
        </n-space>
      </n-grid-item>
    </n-grid>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as Dashboard from '@/apis/dashboard'
import { NGrid, NGridItem, NCarousel, NSpace, NTabs, NTabPane, NTooltip } from 'naive-ui'

export default defineComponent({
  name: 'Home',
  components: { NGrid, NGridItem, NCarousel, NSpace, NTabs, NTabPane, NTooltip },
  setup() {
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
        console.log(rankList)
        const res = await Dashboard.getPlaylistDetail({ id: tabId })
        console.log(res)
        rankList.value = res.playlist.tracks
        console.log(rankList)
      } catch (err:any) { console.error(err) }
    }

    onMounted(() => {
      getBanner()
      getTopPlayList()
      getPlaylistDetail(19723756)
    })
    return {
      bannerList,
      topPlayList,
      changeTab,
      rankList
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
  &__top-list{
    height: 50px;
    border-radius: 5px;
    background: #fff;
    line-height: 50px;
    img {
      padding: 10px 20px;
      width: 30px;
      border-radius: 5px;
    }
    span{
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
}
</style>
