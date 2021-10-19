<!--
 * @Description:
 * @Date: 2021-10-13 18:43:03
 * @LastEditTime: 2021-10-19 20:28:54
-->
<template>
  <div class="home">
    <div class="home-current">
      <h3 class="home-current__title">晚安</h3>
      <a-row class="home-current__content" :gutter="[16,16]">
        <a-col :span="6">
          <div class="home-current__content__item gutter-box"></div>
        </a-col>
        <a-col class="gutter-row" :span="6">
          <a-row class="home-current__content__item">
            <a-col :span="6"><img class="home-current__content__item__img" src="" alt=""></a-col>
            <a-col class="home-current__content__item__title" :span="18">11112424241414123214124124312341234124</a-col>
          </a-row>
        </a-col>
        <a-col class="gutter-row" :span="6">
          <div class="home-current__content__item gutter-box">col-6</div>
        </a-col>
        <a-col class="gutter-row" :span="6">
          <div class="home-current__content__item gutter-box">col-6</div>
        </a-col>
        <a-col :span="6">
          <div class="home-current__content__item gutter-box"></div>
        </a-col>
        <a-col class="gutter-row" :span="6">
          <div class="home-current__content__item gutter-box">col-6</div>
        </a-col>
        <a-col class="gutter-row" :span="6">
          <div class="home-current__content__item gutter-box">col-6</div>
        </a-col>
        <a-col class="gutter-row" :span="6">
          <div class="home-current__content__item gutter-box">col-6</div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="">
import { defineComponent } from 'vue'
// import axios from 'axios'
import SpotifyApi from '@/apis/index'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const getstart = () => {
      SpotifyApi.getArtistAlbums(
        '43ZHCT0cAZBISjO8DG9PnE',
        { limit: 10, offset: 20 },
        function(err, data) {
          if (err) {
            console.error('Something went wrong!')
          } else {
            console.log(data.body)
          }
        }
      )
    }
    return getstart
  },
  mounted() {
    this.getstart()
  }
})
</script>
<style lang="less" scoped>
.home-current {
  &__content {
    width: 100%;
    &__item {
      overflow: hidden;
      min-height: 80px;
      width: 100%;
      border-radius: 5px;
      background: lightgray;
      &__img {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
      &__title {
        padding: 0 20px;
        width: 75%;
        word-break: break-all;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
}
</style>
