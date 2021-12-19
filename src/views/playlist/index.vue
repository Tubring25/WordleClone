<!--
 * @Description:
 * @Date: 2021-12-12 22:25:18
 * @LastEditTime: 2021-12-19 15:41:33
-->
<template>
  <n-switch :rail-style="railStyle">
    <template #checked>傍晚六点下班</template>
    <template #unchecked>午夜零点下班</template>
  </n-switch>
</template>
<script lang="ts" setup>
import { NSwitch } from 'naive-ui'
const railStyle = (config:any) => {
  const style = { background: '', boxShadow: '' }
  if (config.checked) {
    style.background = '#d03050'
    if (config.focused) {
      style.boxShadow = '0 0 0 2px #d0305040'
    }
  } else {
    style.background = '#2080f0'
    if (config.focused) {
      style.boxShadow = '0 0 0 2px #2080f40'
    }
  }
  return style
}
</script>
