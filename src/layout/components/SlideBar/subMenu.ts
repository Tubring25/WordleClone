/*
 * @Description: Menu (trying)
 * @Date: 2021-08-01 16:10:58
 * @LastEditTime: 2021-08-12 22:37:02
 */
import { defineComponent } from 'vue'
import Icon from './icon'

export default defineComponent({
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props) {
    console.log(props.menuInfo)
  },
  template: `
    <a-sub-menu v-if="!menuInfo.meta.hidden" :key="menuInfo.path">
      <template #title>
      <router-link :to="menuInfo.path">
        <Icon v-if="menuInfo.meta.icon" :icon="menuInfo.meta.icon" />{{ menuInfo.meta.title }}
      </router-link>
      </template>
      <template v-for="item in menuInfo.children" :key="item.path">
        <template v-if="!item.children">
          
            <a-menu-item :key="item.path">
            <router-link :to="menuInfo.path">
              <Icon v-if="item.meta.icon" :icon="item.meta.icon" />
              {{ item.meta.title }}
              </router-link>
            </a-menu-item>
          
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.path" />
        </template>
      </template>
    </a-sub-menu>
  `,
  components: { Icon }
})
