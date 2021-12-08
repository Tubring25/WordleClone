<!--
 * @Description:
 * @Date: 2021-10-02 23:32:24
 * @LastEditTime: 2021-12-08 16:28:54
-->
<template>
  <div class="app-container">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { NMessageProvider } from 'naive-ui'
export default defineComponent({
  name: '',
  components: { NMessageProvider }
})
</script>
<style lang="less">
.app-container {
  overflow: scroll;
  color: rgba(20,49,25, .7);
  font-size: 14px;
  p {
    margin: 0;
  }
}
</style>
