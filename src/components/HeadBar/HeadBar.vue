<!--
 * @Description: center-head
 * @Date: 2021-10-07 14:43:14
 * @LastEditTime: 2021-10-13 18:36:40
-->
<template>
  <div class="headbar">
    <div class="headbar__left-arrows">
      <i class="headbar__left-arrows__icon iconfont icon-arrow-left-bold"></i>
      <i class="headbar__left-arrows__icon iconfont icon-arrow-right-bold"></i>
    </div>
    <div class="headbar__right-info">
      <i class="headbar__right-info__icon iconfont icon-user"></i>
      <a-dropdown :trigger="['click']">
        <span class="ant-dropdown-link" @click.prevent>
          Click me
          <CaretDownOutlined />
        </span>
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
import { CaretDownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    CaretDownOutlined,
  },
});
</script>
<style lang="less" scoped>
.headbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  &__left-arrows{
    display: flex;
    justify-content: space-between;
    width: 85px;
    i {
      display: inline-block;
      width: 32px;
      height: 32px;
      border-radius: 16px;
      background: @theme-bg-dark;
      text-align: center;
      font-size: 20px;
      line-height: 32px;
    }
  }
  &__right-info {
    padding: 3px 5px 3px 3px;
    height: 32px;
    border-radius: 16px;
    background: @theme-bg-dark;
    i {
      display: inline-block;
      width: 26px;
      height: 26px;
      border-radius: 13px;
      background: @theme-bg-gray;
      text-align: center;
      line-height: 26px;
    }
  }
  
}
</style>