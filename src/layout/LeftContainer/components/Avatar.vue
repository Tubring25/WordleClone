<!--
 * @Description:
 * @Date: 2021-10-31 20:34:23
 * @LastEditTime: 2021-12-03 18:21:29
-->
<template>
  <div class="avatar">
    <img id="avatar" ref="avatar" src="../../../assets/logo.png" alt="">
    <div v-if="UserStore.token">
      <h3 class="avatar__name">{{userInfo.username}}</h3>
      <p class="avatar__email">{{userInfo.email}}</p>
    </div>
    <n-button v-else type="primary" ghost @click="openLogin">Login</n-button>
  </div>
  <n-modal :show="isLogin">
    <n-card style="width: 600px;" title="" :bordered="false" embedded size="huge">
      <login />
    </n-card>
  </n-modal>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
import { NButton, NModal, NCard } from 'naive-ui'
import { userStore } from '@/store/user'
import Login from '@/views/login/login.vue'
// import * as UserInterface from '@/apis/modules/user'

export default defineComponent({
  name: 'Avatar',
  components: { NButton, Login, NModal, NCard },
  setup() {
    const userInfo = reactive({
      username: 'username',
      email: 'email'
    })
    const UserStore = userStore()

    const isLogin = ref<boolean>(false)
    const openLogin = () => {
      isLogin.value = true
    }
    return {
      openLogin,
      isLogin,
      userInfo,
      UserStore
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
