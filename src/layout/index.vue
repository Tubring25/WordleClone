<!--
 * @Description: layout
 * @Date: 2021-06-21 18:30:03
 * @LastEditTime: 2021-07-24 19:16:44
-->
<template>
  <a-layout style="height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <slide-bar></slide-bar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)"
          style="padding-left: 10px" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" style="padding-left: 10px" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        style="padding-left: 10px">
        <keep-alive>
          <router-view />
        </keep-alive>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue'
import { defineComponent, ref, reactive, toRefs, provide } from 'vue'
import SlideBar from '@/layout/components/SlideBar/index.vue'
import { openRoutes } from '@/router/index'

export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SlideBar
  },
  setup () {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1']
    })
    return {
      ...toRefs(state),
      openRoutes
      // showRoutes,
    }
  }
})
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
