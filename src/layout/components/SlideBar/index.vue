<!--
 * @Description: 侧边栏
 * @Date: 2021-07-13 17:10:23
 * @LastEditTime: 2021-08-04 08:43:04
-->
<template>
  <div class="slide-bar__container">
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
    >
      <template v-for="route in routes" :key="route.path">
        <a-menu-item v-if="route.children?.length === 1 && !route.meta.hidden" :key="route.path">
          <Icon v-if="route.meta.icon" :icon="route.meta.icon"></Icon>
          <span :class="['menu-icon', route.meta.icon ? '' : 'no-icon']">{{route.meta.title}}</span>
        </a-menu-item>
        <template v-else>
          <sub-menu :menu-info="route" :key="route.path" />
        </template>
      </template>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch, ref } from 'vue'
import Icon from './icon'
import SubMenu from './subMenu'
import routerOpts from '@/router'

export default defineComponent({
  setup () {
    console.log('route', routerOpts)
    const routes = routerOpts.options.routes
    const state = reactive({
      collapsed: false,
      selectedKeys: [],
      openKeys: [],
      preOpenKeys: []
    })
    const icon = ref('PieChartOutlined')
    watch(
      () => state.openKeys,
      (val, oldVal) => {
        state.preOpenKeys = oldVal
      }
    )
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed
      state.openKeys = state.collapsed ? [] : state.preOpenKeys
    }

    return {
      ...toRefs(state),
      routes,
      toggleCollapsed,
      icon
    }
  },
  components: {
    Icon,
    SubMenu
  }
})
</script>

<style lang="less" scoped>
</style>
