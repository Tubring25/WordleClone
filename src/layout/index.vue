<!--
 * @Description: Layout Index
 * @Date: 2021-10-03 15:02:17
 * @LastEditTime: 2021-10-26 22:40:18
-->
<template>
  <div class="layout-container">
    <div class="layout-container__top">
      <LeftContainer></LeftContainer>
      <CenterContainer></CenterContainer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LeftContainer from './LeftContainer/LeftContainer.vue'
import CenterContainer from './CenterContainer/CenterContainer.vue'

export default defineComponent({
  name: 'Layout',
  components: { LeftContainer, CenterContainer }
})
</script>
<style lang="less" scoped>
.layout-container {
  overflow: hidden;
  margin: 50px;
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
