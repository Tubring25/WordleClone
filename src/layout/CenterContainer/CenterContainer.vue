<!--
 * @Description: 
 * @Date: 2021-10-03 15:02:04
 * @LastEditTime: 2021-10-03 21:39:05
-->
<template>
  <div class="center__container">center part
    <router-view/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CenterContainer',
});
</script>
<style lang="less" scoped>
.center__container {
  min-width: 700px;
  width: 70%;
  background: @theme-bg;
}
</style>
