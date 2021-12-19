<!--
 * @Description:
 * @Date: 2021-11-07 19:25:34
 * @LastEditTime: 2021-12-19 22:26:35
-->
<template>
  <div class="center-hader">
    <n-input v-model="searchKey" round placeholder="" clearable @change="search_" />
    <n-tabs justify-content="space-evenly" type="line" @update:value="tabChange">
      <template v-for="(item, index) in headerNav" :key="index">
        <n-tab-pane :name="item.path" :tab="item.name"></n-tab-pane>
      </template>
    </n-tabs>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Ref } from 'vue'
import { NInput, NTabs, NTabPane } from 'naive-ui'
import { search } from '@/apis/dashboard'

const headerNav = [
  { name: '首页', path: 'dashboard' },
  { name: '歌手', path: 'singer' },
  { name: '歌单', path: 'playlist' },
  { name: '电台', path: 'podcast' }]

export default defineComponent({
  name: 'CenterHeader',
  components: { NInput, NTabs, NTabPane },
  setup() {
    const router = useRouter()
    const searchKey:Ref<string> = ref('')

    const search_ = async(value: string) => {
      search({ keywords: value })
    }
    const tabChange = (value: string | number) => {
      router.push(`/${value}`)
    }

    return {
      searchKey,
      headerNav,
      search_,
      tabChange
    }
  }
})
</script>
<style lang="less" scoped>
.center-hader {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  width: 100%;
  height: 40px;
  .n-input {
    width:40%;
    :deep(input){
      height: 100%;
      line-height: 1;
    }
  }
  .n-tabs {
    width: 50%;
    :deep(.n-tabs-tab) {
      color: @text-light;
      &--active,
      &:hover{
        color: @active-color;
      }
    }

  }
}
</style>
