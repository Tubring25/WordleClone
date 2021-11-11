<!--
 * @Description:
 * @Date: 2021-10-13 18:43:03
 * @LastEditTime: 2021-11-11 22:22:55
-->
<template>
  <div class="home">
    <n-grid :x-gap="12" :y-gap="15" :cols="2">
      <n-grid-item>
        <div class="home__banner">
          <n-carousel autoplay>
            <img :src="item.imageUrl" alt="" v-for="item in bannerList" :key="item.imageUrl">
          </n-carousel>
        </div>
      </n-grid-item>
      <n-grid-item>
      </n-grid-item>
    </n-grid>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as Dashboard from '@/apis/dashboard'
import { NGrid, NGridItem, NCarousel } from 'naive-ui'

export default defineComponent({
  name: 'Home',
  components: { NGrid, NGridItem, NCarousel },
  setup() {
    const bannerList = ref([])
    const getBanner = async() => {
      try {
        const res = await Dashboard.getBanner({ type: 0 })
        console.log(res)

        bannerList.value = res.banners
      } catch { (err:any) => console.error(err) }
    }

    onMounted(() => {
      getBanner()
    })
    return {
      bannerList
    }
  }
})
</script>
<style lang="less" scoped>
.home {
  &__banner {
    width: 100%;
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
}
</style>
