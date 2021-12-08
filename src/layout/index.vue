<!--
 * @Description: Layout Index
 * @Date: 2021-10-03 15:02:17
 * @LastEditTime: 2021-12-08 16:31:37
-->
<template>
  <div class="layout-container">
    <div class="layout-container__top">
      <LeftContainer></LeftContainer>
      <CenterContainer></CenterContainer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LeftContainer from './LeftContainer/LeftContainer.vue'
import CenterContainer from './CenterContainer/CenterContainer.vue'
import { useMessage } from 'naive-ui'
window.$message = useMessage()
</script>
<style lang="less" scoped>
.layout-container {
  position: relative;
  overflow: hidden;
  margin: 50px 150px;
  width: calc(100vw -100px);
  height: calc(100vh - 100px);
  border-radius: 10px;
  box-shadow: 0 0 50px #f3f0ef82;
  &__top {
    display: flex;
    flex-direction: row;
    height: 100%
  }
}
</style>
