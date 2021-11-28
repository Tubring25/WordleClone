<!--
 * @Description: Login
 * @Date: 2021-11-28 10:35:05
 * @LastEditTime: 2021-11-28 22:02:32
-->
<template>
  <img src="" alt="" class="login__img">
  <h1>{{loginStatus === 0 ? 'Sign up' : 'Login in'}}</h1>
  <n-form :model="loginStatus === 0 ? loginType === 'phone' ? cellPhoneLoginForm : emailLoginForm : registerForm" :rules="rules" label-placement="top">
    <n-form-item v-if="loginType !== 'email'" label="Phone" path="phone">
      <n-input :value="loginStatus === 0 ? cellPhoneLoginForm.phone : registerForm.phone" @input="loginStatus === 0 ? cellPhoneLoginForm.phone = $event.target.value : registerForm.phone = $event.target.value"></n-input>
    </n-form-item>
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
    const loginStatus = ref(0) // 0:登录 1:注册
    const loginType = ref('phone')
    const cellPhoneLoginForm = reactive<UserInterface.CellphoneLogin>({
      phone: '',
      password: ''
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
