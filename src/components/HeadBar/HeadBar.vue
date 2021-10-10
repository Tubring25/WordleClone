<!--
 * @Description: center-head
 * @Date: 2021-10-07 14:43:14
 * @LastEditTime: 2021-10-10 17:59:24
-->
<template>
  <div class="headbar">
    <div class="headbar__left-arrows">
      <i class="headbar__left-arrows__icon iconfont icon-arrow-left-bold"></i><i class="headbar__left-arrows__icon iconfont icon-arrow-right-bold"></i>
    </div>
    <div class="headbar__right-info">
      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link" @click.prevent>
          Click me
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <a href="http://www.alipay.com/">1st menu item</a>
            </a-menu-item>
            <a-menu-item key="1">
              <a href="http://www.taobao.com/">2nd menu item</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">3rd menu item</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    DownOutlined,
  },
});
</script>