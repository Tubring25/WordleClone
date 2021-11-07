<!--
 * @Description:
 * @Date: 2021-10-03 15:02:04
 * @LastEditTime: 2021-11-07 21:54:21
-->
<template>
  <div class="center__container">
    <Header />
    <router-view/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'

export default defineComponent({
  name: 'CenterContainer',
  components: { Header }
})
</script>
<style lang="less" scoped>
.center__container {
  padding: 0 35px;
  min-width: 700px;
  width: 80%;
  background: linear-gradient(#FCFCFE, #F3F6FC);
}
</style>
