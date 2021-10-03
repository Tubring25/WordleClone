<!--
 * @Description: Left Container
 * @Date: 2021-10-03 15:01:29
 * @LastEditTime: 2021-10-03 20:24:04
-->
<template>
  <div class="left__container">left part</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LeftContainer',
});
</script>
<style lang="less" scoped>
.left__container {
  background: #111;
  width: 15%;
  min-width: 150px;
}
</style>
