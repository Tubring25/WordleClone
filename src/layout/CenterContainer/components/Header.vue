<!--
 * @Description:
 * @Date: 2021-11-07 19:25:34
 * @LastEditTime: 2021-11-08 09:30:33
-->
<template>
  <div class="center-hader">
    <n-input v-model="searchKey" round placeholder="大" />
    <n-tabs justify-content="space-evenly" type="line">
      <template v-for="(item, index) in headerNav" :key="index">
        <n-tab-pane :name="item" :tab="item"></n-tab-pane>
      </template>
    </n-tabs>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue'
import type { Ref } from 'vue'
import { NInput, NTabs, NTabPane } from 'naive-ui'

const headerNav = ['首页', '歌手', '歌单', '电台']

export default defineComponent({
  name: 'CenterHeader',
  components: { NInput, NTabs, NTabPane },
  setup() {
    const searchKey:Ref<string> = ref('')

    return {
      searchKey,
      headerNav
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
  }
  .n-tabs {
    width: 50%;
    /deep/ .n-tabs-tab {
      color: @text-light;
      &--active,
      &:hover{
        color: @active-color;
      }
    }

  }
}
</style>
