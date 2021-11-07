<!--
 * @Description: Left Container
 * @Date: 2021-10-03 15:01:29
 * @LastEditTime: 2021-11-07 22:22:07
-->
<template>
  <div class="left__container">
    <Avatar />
    <div class="left__container__nav">
      <n-menu :options="commonMenu" style="width: 180px;" />
    </div>
    <n-divider />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Avatar from './components/Avatar.vue'
import { NDivider, NMenu } from 'naive-ui'

const commonMenu = [
  { label: '最近播放', key: 'Recent' },
  { label: '专辑', key: 'Album' }
]
export default defineComponent({
  name: 'LeftContainer',
  components: { Avatar, NDivider, NMenu },
  setup() {
    const leftNav = ['Recommend', 'Brand', 'Artists', 'Podcast']
    return {
      leftNav,
      commonMenu
    }
  }
})
</script>
<style lang="less" scoped>
.left__container {
  min-width: 150px;
  width: 20%;
  background: @theme-bg;
  color: @text-gray;
  .avatar {
    margin-top: 40px;
  }
  &__nav {
    margin: 30px 0;
    /deep/ .n-menu-item-content-header {
      color: @text-light;
    }
  }
}
</style>
