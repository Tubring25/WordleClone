/*
 * @Description: icon
 * @Date: 2021-07-24 18:55:58
 * @LastEditTime: 2021-07-28 18:27:22
 */

import { createVNode } from 'vue'
import * as Icons from '@ant-design/icons-vue'
const Icon = (props: {icon: string}) => {
  const { icon } = props
  return createVNode(Icons[icon as keyof typeof Icons])
}
export default Icon
