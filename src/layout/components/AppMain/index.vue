<template>
  <section class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>
<script lang="ts">
import { defineComponent, Component } from 'vue'
import { routerKey } from 'vue-router'

export default defineComponent({
  name: 'app-main',
  setup() {
    console.log(routerKey)

    // return {

    // }
  },
})
</script>
<style lang="less" scoped>
.app-main {
  width: 100%;
  height: calc(100vh - 50px);
}
</style>
