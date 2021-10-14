<!--
 * @Description:
 * @Date: 2021-10-03 15:02:04
 * @LastEditTime: 2021-10-14 22:05:22
-->
<template>
  <div class="center__container">
    <HeadBar />
    <router-view/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HeadBar from '@/components/HeadBar/HeadBar.vue'

export default defineComponent({
  name: 'CenterContainer',
  components: { HeadBar }
})
</script>
<style lang="less" scoped>
.center__container {
  padding: 0 35px;
  min-width: 700px;
  width: 70%;
  background: @theme-bg;
}
</style>
