<!--
 * @Description: Login
 * @Date: 2021-11-28 10:35:05
 * @LastEditTime: 2021-12-05 23:30:35
-->
<template>
  <img src="@/assets/icon.png" alt="" class="login__img">
  <h1>{{loginStatus === 0 ? 'Sign up' : 'Login in'}}</h1>
  <n-form ref="loginRef" :model="loginStatus === 0 ? loginType === 'phone' ? cellPhoneLoginForm : emailLoginForm : registerForm" :rules="rules" label-placement="top">
    <n-form-item v-if="loginType !== 'email'" label="Phone" path="phone">
      <n-input
        :value="loginStatus === 0 ? cellPhoneLoginForm.phone : registerForm.phone"
        @input="loginStatus === 0 ? cellPhoneLoginForm.phone = $event : registerForm.phone = $event"
        maxlength="11"
        placeholder=""
        style="width: 70%"
      />
      <n-button type="primary" style="width: 25%;margin-left: 5%" >{{isCaptchaSending ? `${leftSeconds}秒` : 'Send'}}</n-button>
    </n-form-item>
    <n-form-item v-else label="Email" path="email">
      <n-input v-model="emailLoginForm.email" maxlength="50"></n-input>
    </n-form-item>
    <n-form-item v-if="loginType !== 'captcha'" label="Password" path="password">
      <n-input
        :value="loginStatus === 0 ? loginType === 'phone' ? cellPhoneLoginForm.password : emailLoginForm.password : registerForm.password"
        @input="loginStatus === 0 ? loginType === 'phone' ? cellPhoneLoginForm.password = $event : emailLoginForm.password = $event : registerForm.phone = $event"
        type="password"
        placeholder=""
      />
    </n-form-item>
    <n-form-item v-if="loginType == 'captcha'" label="Captcha" path="captcha">
      <n-input
        :value="loginStatus === 0 ? cellPhoneLoginForm.captcha : registerForm.captcha"
        @input="loginStatus === 0 ? cellPhoneLoginForm.captcha = $event : registerForm.captcha = $event"
        maxlength="10"
        placeholder=""
      ></n-input>
    </n-form-item>
    <n-button type="primary" :ghost="loginStatus === 0" style="width:100%" @click="sendCaptcha">{{loginStatus === 0 ? 'Sign In' : 'Sign Up'}}</n-button>
    <div class="btn-sug">
      <span @click="changeLoginType(0)">{{loginType === 'email' ? '切换手机登陆' : '切换至邮箱登录' }}</span>
      <span @click="loginStatus = !loginStatus">{{loginStatus === 0 ? 'Sign Up' : 'Sign In'}}</span>
      <span v-if="loginType !== 'email'" @click="changeLoginType(1)">{{loginType === 'phone' ? '切换至验证码登陆' : '切换至密码登陆' }}</span>
    </div>
  </n-form>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
import { NForm, NFormItem, NInput, NButton } from 'naive-ui'
import * as UserInterface from '@/apis/modules/user'
import { checkEmpty } from '@/utils/validator'
import { sendCaptcha } from '@/apis/user'

export default defineComponent({
  name: 'Login',
  components: { NForm, NFormItem, NInput, NButton },
  setup() {
    const loginRef = ref()
    const loginStatus = ref<number>(0) // 0:登录 1:注册
    const loginType = ref<string>('phone') // phone email captcha
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
    const rules = reactive({
      phone: [{
        required: true,
        trigger: 'blur',
        validator: (rule:any, value:string | number) => checkEmpty(rule, value, 'Please Input Phone')
      }],
      password: [{
        required: true,
        trigger: 'blur',
        validator: (rule:any, value: string) => checkEmpty(rule, value, 'Please Input Password')
      }],
      email: [{
        required: true,
        trigger: 'blur',
        validator: (rule:any, value: string) => checkEmpty(rule, value, 'Please Input Email')
      }],
      captcha: [{
        required: true,
        trigger: 'blur',
        validator: (rule:any, value: string) => checkEmpty(rule, value, 'Please Input Captcha')
      }]
    })

    const changeLoginType = (type: number) => {
      if (type) {
        loginType.value === 'phone' ? loginType.value = 'captcha' : loginType.value = 'phone'
      } else {
        loginType.value === 'email' ? loginType.value = 'phone' : loginType.value = 'email'
      }
    }

    const isCaptchaSending = ref<boolean>(false)
    const leftSeconds = ref<number>(60)
    const sendCaptcha_ = async() => {
      isCaptchaSending.value = true
      try {
        // loginRef.value.validate(errors => {
        //   if (!errors) {
        //     await
        //   }
        // })
      } catch (err) { console.error(err) }
    }

    return {
      loginRef,
      loginStatus,
      loginType,
      cellPhoneLoginForm,
      emailLoginForm,
      registerForm,
      rules,
      isCaptchaSending,
      leftSeconds,
      sendCaptcha_,
      changeLoginType
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
  .n-form-item {
    .n-input {
      height: 40px;
      border-radius: 5px;
      :deep(input) {
        height: 40px;
      }
    }
  }
  .btn-sug {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
    color: @active-color;
    span {
      cursor: pointer;
    }
  }
}
</style>
