<!--
 * @Description: 
 * @Date: 2021-10-02 23:32:24
 * @LastEditTime: 2021-10-04 22:42:02
-->
<template>
  <div class="app-container">
    <router-view />
  </div>
</template>
<script lang='ts'>
import { defineComponent} from 'vue'
export default defineComponent({
  name: '',
})
</script>
<style lang="less">
.app-container {
  color: @text-color;
}
</style>
