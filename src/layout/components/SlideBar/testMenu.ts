/*
 * @Description: 测试
 * @Date: 2021-08-21 16:08:36
 * @LastEditTime: 2021-08-21 18:27:59
 */
import { defineComponent, h, toRefs } from 'vue'
import Menu from 'ant-design-vue/es/menu'
import Icon from './icon'

const { Item, SubMenu } = Menu
interface RouterItem {
  path: string;
  name: string;
  component: Function;
  meta: RouterItemMeta;
  children?: RouterItem[];
  redirect?: string;
  fullPath?: string;
}
interface RouterItemMeta {
  title: string;
  icon?: string;
  hidden?: boolean;
}
export default defineComponent({
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    menuInfo (val) {
      if (val.length > 0) {

      }
    }
  },
  setup (props) {
    const { menuInfo } = toRefs(props)

    function renderMenuItem (h: any, menu: RouterItem) {
      const tag = 'router-link'
      const config = { props: { to: menu.fullPath } }
      return [
        Item, { key: menu.fullPath },
        [
          h(tag, config,
            [
              h(Icon, {
                icon: menu.meta.icon
              })
            ]),
          menu.meta.title
        ]
      ]
    }
    function renderSubMenu (h: any, menu: RouterItem) {
      const subItem = [
        h('span', { slot: 'title' },
          [
            h(Icon, { icon: menu.meta.icon })
          ],
          menu.meta.title
        )
      ]
    }
    function formatPath (menu: object[], parentPath?: string): void {
      menu.forEach((item: any) => {
        if (!item.fullPath) {
          const isFullPath: boolean = item.path.substring(0, 1) === '/'
          item.fullPath = isFullPath ? item.path : parentPath + '/' + item.path
          if (item.children) {
            formatPath(item.children, item.fullPath)
          }
        }
      })
    }
    return {
      formatPath
    }
  }
})
