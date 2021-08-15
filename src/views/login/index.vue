<!--
 * @Description: Login
 * @Date: 2021-08-06 16:04:26
 * @LastEditTime: 2021-08-15 21:35:11
-->
<template>
  <div class="login__container">
    <a-form v-if="formType==='login'" ref="loginForm" :model="loginForm" :rules="rules" :label-col="{span: 4}">
      <a-form-item has-feedback label="Username" name="username">
        <a-input v-model.trim:value="loginForm.username" type="text" autocomplete="off" />
      </a-form-item>
      <a-form-item has-feedback label="Password" name="password">
        <a-input v-model.trim:value="loginForm.password" type="password" autocomplete="off" />
      </a-form-item>
    </a-form>
    <a-form v-else-if="formType==='register'" ref="registerForm" :model="registerForm" :rules="rules" :label-col="{span: 4}">
      <a-form-item has-feedback label="Username" name="username">
        <a-input v-model.trim:value="registerForm.username" type="text" autocomplete="off" />
      </a-form-item>
      <a-form-item has-feedback label="Password" name="password">
        <a-input v-model.trim:value="registerForm.password" type="password" autocomplete="off" />
      </a-form-item>
      <a-form-item has-feedback label="ConfirmPwd" name="ConfirmPwd">
        <a-input v-model.trim:value="registerForm.ConfirmPwd" type="password" autocomplete="off" />
      </a-form-item>
      <a-form-item >
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs, UnwrapRef } from 'vue'
interface Login {
  username: string;
  password: string;
}
interface Register {
  username: string;
  password: string;
  ConfirmPwd: string;
  email?: string;
}
export default defineComponent({
  name: 'Login',
  setup () {
    const state = {
      formType: 'login'
    }
    const loginForm: UnwrapRef<Login> = {
      username: '',
      password: ''
    }
    const registerForm: UnwrapRef<Register> = {
      username: '',
      password: '',
      ConfirmPwd: '',
      email: ''
    }
    const rules = {
      username: [
        { required: true, trigger: 'blur', message: '请输入用户名' }
      ],
      password: [
        { required: true, trigger: 'blur', message: '请输入密码' }
      ],
      ConfirmPwd: [
        { required: true, trigger: 'blur', message: '请确认密码' }
      ]
    }
    return {
      ...toRefs(state),
      loginForm,
      registerForm,
      rules
    }
  }
})
</script>
<style lang="less" scoped>
.login__container {
  // background:
}
</style>
