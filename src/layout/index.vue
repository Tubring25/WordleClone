<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu mode="inline" theme="dark" :inline-collapsed="collapsed" v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys">
        <div v-for="route in hasShowingChid(openRoutes)">
          <a-menu-item v-if="route.children.length==1">
            <span>{{route.children[0].meta.title}}</span>
          </a-menu-item>
          <a-sub-menu key="sub1" v-else>
            <template #title>
              <span>
                <span>{{route.meta.title}}</span>
              </span>
            </template>
          </a-sub-menu>
        </div>

      </a-menu>
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
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue'
import { defineComponent, ref, reactive, toRefs, provide } from 'vue'
import { openRoutes } from '@/router/index'

export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    })
    func
    
    return {
      // ...toRefs(state),
      openRoutes,
      // showRoutes,
    }
  },
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
