<!--
 * @Description:
 * @Date: 2021-10-02 23:32:24
 * @LastEditTime: 2021-11-14 14:06:01
-->
<template>
  <div class="app-container">
    <router-view />
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: ''
})
</script>
<style lang="less">
.app-container {
  color: rgba(20,49,25, .7);
  font-size: 14px;
  p {
    margin: 0;
  }
}
</style>
