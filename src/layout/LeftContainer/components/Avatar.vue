<!--
 * @Description:
 * @Date: 2021-10-31 20:34:23
 * @LastEditTime: 2021-11-02 20:55:32
-->
<template>
  <div class="avatar">
    <img id="avatar" ref="avatar" src="../../../assets/logo.png" alt="">
    <h3 class="avatar__name">{{username}}</h3>
    <p class="avatar__email">{{email}}</p>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const username = ref('username')
const email = ref('email')

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
