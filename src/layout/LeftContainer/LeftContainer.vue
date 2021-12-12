<!--
 * @Description: Left Container
 * @Date: 2021-10-03 15:01:29
 * @LastEditTime: 2021-12-12 21:21:14
-->
<template>
  <div class="left__container">
    <Avatar />
    <div class="left__container__nav">
      <n-menu :options="commonMenu" style="width: 100%;" @update:value="selectMenu" />
    </div>
    <n-divider />

  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Avatar from './components/Avatar.vue'
import { NDivider, NMenu, MenuOption, useMessage } from 'naive-ui'
import { userStore } from '@/store/user'
import { getRecentPlaylist } from '@/apis/recent'

const commonMenu = [
  { label: '最近歌单', key: 'playlist' },
  { label: '最近单曲', key: 'song' }
]
export default defineComponent({
  name: 'LeftContainer',
  components: { Avatar, NDivider, NMenu },
  setup() {
    const message = useMessage()
    const UserStore = userStore()

    const leftNav = ['Recommend', 'Brand', 'Artists', 'Podcast']

    // const playList = reactive([])

    const selectMenu = async(key: string, item: MenuOption) => {
      console.log(key, item)
      if (!UserStore.getToken) {
        message.error('Please Login First!')
        return
      }
      try {
        let recent
        switch (key) {
          case 'playlist':
            recent = await getRecentPlaylist({ limit: 20 })
            console.log(recent)
            break
          case 'song':
            break
        }
      } catch (error) {
        console.error(error)
      }
    }

    return {
      leftNav,
      commonMenu,
      selectMenu
    }
  }
})
</script>
<style lang="less" scoped>
.left__container {
  min-width: 150px;
  width: 25%;
  background: @theme-bg;
  color: @text-gray;
  &__nav {
    margin: 30px 0;
    :deep(.n-menu-item-content-header) {
      color: @text-light;
    }
  }
}
</style>
