<!--
 * @Description:
 * @Date: 2021-10-13 18:43:03
 * @LastEditTime: 2021-11-08 22:16:08
-->
<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as Dashboard from '@/apis/dashboard'

export default defineComponent({
  name: 'Home',
  components: {},
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
    }
  }
})
</script>
<style lang="less" scoped>
</style>
