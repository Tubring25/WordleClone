<template>
  <div class="nav-bar">
    NavBar
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'nav-bar'
})
</script>
<style lang="less" scoped>
.nav-bar {
  width: 100%;
  height: 50px;
  background: lightblue;
}
</style>