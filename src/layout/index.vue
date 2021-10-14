<!--
 * @Description: Layout Index
 * @Date: 2021-10-03 15:02:17
 * @LastEditTime: 2021-10-14 22:05:25
-->
<template>
  <div class="layout-container">
    <div class="layout-container__top">
      <LeftContainer></LeftContainer>
      <CenterContainer></CenterContainer>
      <RightContainer></RightContainer>
    </div>
    <div class="layout-container__bottom">
      <BottomContainer></BottomContainer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LeftContainer from './LeftContainer/LeftContainer.vue'
import CenterContainer from './CenterContainer/CenterContainer.vue'
import RightContainer from './RightContainer/RightContainer.vue'
import BottomContainer from './BottomContainer/BottomContainer.vue'

export default defineComponent({
  name: 'Layout',
  components: { LeftContainer, CenterContainer, RightContainer, BottomContainer }
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
    height: calc(100% - 90px);
  }
  &__bottom {
    width: 100%;
    height: 90px;
  }
}
</style>
