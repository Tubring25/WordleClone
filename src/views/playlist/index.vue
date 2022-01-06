<!--
 * @Description:
 * @Date: 2021-12-12 22:25:18
 * @LastEditTime: 2022-01-06 22:48:03
-->
<template>
  <n-switch v-model:value="isOpenSwitch" :rail-style="railStyle">
    <template #checked>Card</template>
    <template #unchecked>List</template>
  </n-switch>
  <n-grid :x-gap="24" :y-gap="24" :cols="4">
    <n-grid-item v-for="item in playlists" :key="item.id">
      <n-card class="card">
        <img class="card__cover" :src="item.coverImgUrl">
        <span class="card__title">{{item.name}}</span>
        <span class="card__description">{{item.description}}</span>
      </n-card>
    </n-grid-item>
  </n-grid>
</template>
<script lang="ts" setup>
import { getTopPlaylist } from '@/apis/dashboard'
import { NSwitch, NCard, NGrid, NGridItem } from 'naive-ui'
import { onMounted, ref } from 'vue'

onMounted(() => {
  getTopPlaylist_()
})

const isOpenSwitch = ref<boolean>(true)
const playlists = ref([])
const getTopPlaylist_ = async() => {
  const params = {
    limit: 30,
    offset: 30
  }
  try {
    const res = await getTopPlaylist(params)
    playlists.value = res.playlists
    console.log(playlists)
  } catch (error) {
    console.error(error)
  }
}
console.log(playlists)
const railStyle = (config:any) => {
  const style = { background: '', boxShadow: '' }
  if (config.checked) {
    style.background = '#d03050'
    if (config.focused) {
      style.boxShadow = '0 0 0 2px #d0305040'
    }
  } else {
    style.background = '#2080f0'
    if (config.focused) {
      style.boxShadow = '0 0 0 2px #2080f40'
    }
  }
  return style
}
</script>
<style lang="less" scoped>
.n-card{
  :deep(.n-card__content) {
    padding: 0;
  }
}
.card {
  &__cover {
    width: 100%;
  }
  &__title, &__description {
    display: block;
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: @active-color;
  }
  &__title {
    padding: 10px 10px 0;
    font-weight: bold;
    font-size: 16px;
    opacity: .8;
  }
  &__description{
    opacity: .6;
    padding: 10px;
  }
}
</style>
