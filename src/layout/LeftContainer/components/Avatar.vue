<!--
 * @Description:
 * @Date: 2021-10-31 20:34:23
 * @LastEditTime: 2021-11-08 10:21:51
-->
<template>
  <div class="avatar">
    <img id="avatar" ref="avatar" src="../../../assets/logo.png" alt="">
    <div v-if="username">
      <h3 class="avatar__name">{{username}}</h3>
      <p class="avatar__email">{{email}}</p>
    </div>
    <n-button v-else type="primary" ghost>Login</n-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { NButton } from 'naive-ui'

export default defineComponent({
  name: 'Avatar',
  components: { NButton },
  setup() {
    const username = ref('username')
    const email = ref('email')

    return {
      username,
      email
    }
  }
})
</script>
<style lang="less" scoped>
.avatar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  text-align: center;
  img {
    display: block;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  h3 {
    margin: 20px 0 10px;
    color: @text-dark;
  }
}
</style>
