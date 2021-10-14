<!--
 * @Description:
 * @Date: 2021-10-13 18:43:03
 * @LastEditTime: 2021-10-14 22:04:37
-->
<template>
  <div class="home">
    <div class="home-current">
      <a-row :gutter="16">
            <a-col class="gutter-row" :span="6">
              <div class="gutter-box">col-6</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <div class="gutter-box">col-6</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <div class="gutter-box">col-6</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <div class="gutter-box">col-6</div>
            </a-col>
          </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {

  }
})
</script>
<style lang="less" scoped>
.gutter-example :deep(.ant-row > div) {
  border: 0;
  background: transparent;
}
.gutter-box {
  padding: 5px 0;
  background: #00a0e9;
}
</style>
