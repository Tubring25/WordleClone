<!--
 * @Description: MenuItem
 * @Date: 2021-07-13 17:04:22
 * @LastEditTime: 2021-07-13 17:05:17
-->

<script>
export default {
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: () => ''
    },
    title: {
      type: String,
      default: () => ''
    }
  }
}
</script>
