/*
 * @Description: Menu (trying)
 * @Date: 2021-08-01 16:10:58
<<<<<<< HEAD
 * @LastEditTime: 2021-08-15 21:59:32
=======
 * @LastEditTime: 2021-08-12 22:37:02
>>>>>>> eb2b45a8c7b890a66f8281f1a94a3ea206c3e1de
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
<<<<<<< HEAD
        <router-link :to="menuInfo.redirect ?? menuInfo.path">
          <Icon v-if="menuInfo.meta.icon" :icon="menuInfo.meta.icon" />{{ menuInfo.meta.title }}
        </router-link>
      </template>
      <template v-for="item in menuInfo.children" :key="item.path">
        <template v-if="!item.children">
          <a-menu-item v-if="!item.meta.hidden" :key="item.path">
            <router-link :to="menuInfo.path+'/'+item.path">
              <Icon v-if="item.meta.icon" :icon="item.meta.icon" />
              {{ item.meta.title }}
            </router-link>  
          </a-menu-item>
=======
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
          
>>>>>>> eb2b45a8c7b890a66f8281f1a94a3ea206c3e1de
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.path" />
        </template>
      </template>
    </a-sub-menu>
  `,
  components: { Icon }
})
