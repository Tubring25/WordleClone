<!--
 * @Description:
 * @Date: 2021-10-13 18:43:03
 * @LastEditTime: 2021-11-14 21:14:16
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
              <span>{{item.name}}</span>
            </div>
        </n-space>
      </n-grid-item>
      <n-grid-item :span="9">
        <h2>Most Popular</h2>
        <n-tabs>
          <n-tab-pane name="1"></n-tab-pane>
          <n-tab-pane name="2"></n-tab-pane>
          <n-tab-pane name="3"></n-tab-pane>
        </n-tabs>
      </n-grid-item>
    </n-grid>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as Dashboard from '@/apis/dashboard'
import { NGrid, NGridItem, NCarousel, NSpace, NTabs, NTabPane } from 'naive-ui'

export default defineComponent({
  name: 'Home',
  components: { NGrid, NGridItem, NCarousel, NSpace, NTabs, NTabPane },
  setup() {
    const bannerList = ref([])
    const getBanner = async() => {
      try {
        const res = await Dashboard.getBanner({ type: 0 })
        bannerList.value = res.banners
      } catch { (err:any) => console.error(err) }
    }

    const topPlayList = ref([])
    const getTopPlayList = async() => {
      try {
        const res = await Dashboard.getTopPlaylist({ limit: 4 })
        topPlayList.value = res.playlists
      } catch { (err:any) => console.error(err) }
    }

    const getTopList = async() => {
      console.log(1212)

      try {
        console.log(Dashboard.getTopList())

        const res = await Dashboard.getTopList()
        console.log(res)
      } catch { (err:any) => console.error(err) }
    }

    onMounted(() => {
      getBanner()
      getTopPlayList()
      getTopList()
    })
    return {
      bannerList,
      topPlayList
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
      margin-left: 10px;
      height: 100%;
      vertical-align: top;
    }
  }
}
</style>
