/*
 * @Description: icon
 * @Date: 2021-07-24 18:55:58
 * @LastEditTime: 2021-07-25 10:30:13
 */

import { createVNode } from 'vue'
import * as $Icon from '@ant-design/icons'
const Icon = (props: {icon: string}) => {
  const { icon } = props
  return createVNode($Icon[icon])
}
export default Icon
