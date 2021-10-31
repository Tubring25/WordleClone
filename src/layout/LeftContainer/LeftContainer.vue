<!--
 * @Description: Left Container
 * @Date: 2021-10-03 15:01:29
 * @LastEditTime: 2021-10-31 22:34:37
-->
<template>
  <div class="left__container">
    <Avatar />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Avatar from './components/Avatar.vue'

export default defineComponent({
  name: 'LeftContainer',
  components: { Avatar }
})
</script>
<style lang="less" scoped>
.left__container {
  min-width: 150px;
  width: 20%;
  background: @theme-bg;
  color: @text-gray;
  .avatar {
    margin-top: 40px;
  }
}
</style>
