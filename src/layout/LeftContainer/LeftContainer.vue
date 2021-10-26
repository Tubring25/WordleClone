<!--
 * @Description: Left Container
 * @Date: 2021-10-03 15:01:29
 * @LastEditTime: 2021-10-26 22:50:32
-->
<template>
  <div class="left__container">
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LeftContainer'
})
</script>
<style lang="less" scoped>
.left__container {
  min-width: 150px;
  width: 20%;
  background: @theme-bg;
  color: @text-gray;
}
</style>
