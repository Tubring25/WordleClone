<!--
 * @Description: Left Container
 * @Date: 2021-10-03 15:01:29
 * @LastEditTime: 2021-10-04 22:55:01
-->
<template>
  <div class="left__container">
    <div class="left__container__top">
      <div class="left__container__top__item"><i class="iconfont icon-home" /><span>首页</span></div>
      <div class="left__container__top__item"><i class="iconfont icon-search"></i><span>搜寻</span></div>
      <div class="left__container__top__item"><i class="iconfont icon-list"></i><span>你的音乐库</span></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LeftContainer',
});
</script>
<style lang="less" scoped>
.left__container {
  min-width: 150px;
  width: 15%;
  background: @theme-bg;
  color: @text-gray;
}
</style>
