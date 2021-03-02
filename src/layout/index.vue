<template>
 <nav-bar></nav-bar>
 <slide-bar class="slide-bar-container"></slide-bar>
 <div class="main-container">
   <tags-view></tags-view>
   <app-main></app-main>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppMain from './components/AppMain/index.vue'
import NavBar from './components/NavBar/index.vue'
import SlideBar from './components/SlideBar/index.vue'
import TagsView from './components/TagsView/index.vue'

export default defineComponent({
  name: 'Layout',
  components: { AppMain, NavBar, SlideBar, TagsView },

})
</script>
<style lang="less" scoped>
nav-bar{
  height: 50px;
  background: lightblue;
}
</style>