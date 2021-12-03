<!--
 * @Description: Login
 * @Date: 2021-11-28 10:35:05
 * @LastEditTime: 2021-12-02 19:17:09
-->
<template>
  <img src="@/assets/icon.png" alt="" class="login__img">
  <h1>{{loginStatus === 0 ? 'Sign up' : 'Login in'}}</h1>
  <n-form :model="loginStatus === 0 ? loginType === 'phone' ? cellPhoneLoginForm : emailLoginForm : registerForm" :rules="rules" label-placement="top">
    <n-form-item v-if="loginType !== 'email'" label="Phone" path="phone">
      <n-input
        :value="loginStatus === 0 ? cellPhoneLoginForm.phone : registerForm.phone"
        @input="loginStatus === 0 ? cellPhoneLoginForm.phone = $event.target.value : registerForm.phone = $event.target.value"
        maxlength="11"
        placeholder="phone"
      />
    </n-form-item>
    <n-form-item v-else label="Email" prop="email">
      <n-input v-model="emailLoginForm.email" maxlength="50"></n-input>
    </n-form-item>
    <n-form-item label="Password" path="password">
      <n-input
        :value="loginStatus === 0 ? loginType === 'phone' ? cellPhoneLoginForm.password : emailLoginForm.password : registerForm.password"
        type="password"
        @input="loginStatus === 0 ? loginType === 'phone' ? cellPhoneLoginForm.password = $event.target.value : emailLoginForm.password = $event.target.value : registerForm.phone = $event.target.value"
      />
    </n-form-item>
    <n-form-item v-if="loginType !== 'email'" label="Capture">
      <n-input
        :value="loginStatus === 0 ? cellPhoneLoginForm.captcha : registerForm.captcha"
        @input="loginStatus === 0 ? cellPhoneLoginForm.captcha = $event.target.value : registerForm.captcha = $event.target.value"
        maxlength="10"
      ></n-input>
    </n-form-item>
    <n-button type="info" :ghost="loginStatus === 0">{{loginStatus === 0 ? 'Sign In' : 'Sign Up'}}</n-button>
  </n-form>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
import { NForm, NFormItem, NInput, NButton } from 'naive-ui'
import * as UserInterface from '@/apis/modules/user'

export default defineComponent({
  name: 'Login',
  components: { NForm, NFormItem, NInput, NButton },
  setup() {
    const loginStatus = ref<number>(0) // 0:登录 1:注册
    const loginType = ref<string>('phone')
    const cellPhoneLoginForm = reactive<UserInterface.CellphoneLogin>({
      phone: '',
      password: '',
      captcha: ''
    })
    const emailLoginForm = reactive<UserInterface.EmailLogin>({
      email: '',
      password: ''
    })
    const registerForm = reactive<UserInterface.Register>({
      captcha: '',
      nickname: '',
      phone: '',
      password: ''
    })

    return {
      loginStatus,
      loginType,
      cellPhoneLoginForm,
      emailLoginForm,
      registerForm
    }
  }
})
</script>
<style lang="less" scoped>
.login__img {
  display: block;
  margin: 0 auto;
  width: 30%;
  border-radius: 30px;
}
h1 {
  margin: 10px;
  color: @active-color;
  text-align: center;
}
.n-form {
  margin:  0 auto;
  width: 70%;
  .n-input-wrapper {
    height: 40px;
    border-radius: 5px;
  }
}
</style>
