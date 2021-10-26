<!--
 * @Description:
 * @Date: 2021-10-13 18:43:03
 * @LastEditTime: 2021-10-26 22:53:15
-->
<template>
  <div class="home">
  </div>
</template>

<script lang="">
import { defineComponent } from 'vue'
// import axios from 'axios'
export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const getstart = () => {
      console.log(12312)
    }
    return {
      getstart
    }
  },
  mounted() {
    this.getstart()
  }
})
</script>
<style lang="less" scoped>
</style>
