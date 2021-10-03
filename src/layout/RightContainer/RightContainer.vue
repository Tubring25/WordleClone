<!--
 * @Description: Right Container
 * @Date: 2021-10-03 15:01:29
 * @LastEditTime: 2021-10-03 20:23:59
-->
<template>
  <div class="right__container">right part</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RightContaienr',
});
</script>
<style lang="less" scoped>
.right__container {
  background: #111;
  width: 15%;
  min-width: 150px;
}
</style>