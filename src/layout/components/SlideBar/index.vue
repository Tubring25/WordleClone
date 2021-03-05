<template>
  <div class="slide-bar">slidebar</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'slide-bar',
  setup(props) {
    console.log(props);
  }
})
</script>
<style lang="less" scoped>
.slide-bar {
  height: 100vh;
  width: 100%;
}
</style>