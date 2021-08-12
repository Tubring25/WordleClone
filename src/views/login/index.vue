<!--
 * @Description: Login
 * @Date: 2021-08-06 16:04:26
 * @LastEditTime: 2021-08-08 22:49:11
-->
<template>
  <div class="login__container">
    <a-form ref="loginForm" :model="loginForm" :rules="rules" :label-col="{span: 4}">
      <a-form-item has-feedback label="Password" name="pass">
        <a-input v-model:value="formState.pass" type="password" autocomplete="off" />
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
  confirmPsw: string;
  email?: string;
}
export default defineComponent({
  setup () {
    const state = {
      formType: 'login'
    }
    const loginForm: UnwrapRef<Login> = {
      username: '',
      password: ''
    }
    const registerFomr: UnwrapRef<Register> = {
      username: '',
      password: '',
      confirmPsw: '',
      email: ''
    }
    const rules = {
      username: [
        { required: true, trigger: 'blur', message: '请输入用户名' }
      ],
      password: [
        { required: true, trigger: 'blur', message: '请输入密码' }
      ],
      confirmPsw: [
        { required: true, trigger: 'blur', message: '请确认密码' }
      ]
    }
    return {
      ...toRefs(state),
      loginForm,
      registerFomr
    }
  }
})
</script>
