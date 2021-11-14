/*
 * @Description:
 * @Date: 2021-10-03 22:24:42
 * @LastEditTime: 2021-11-14 13:48:52
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/theme/index.less')]
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#65D26E',
            'link-color': '#ababab',
            'text-color': '#143119'
          },
          javascriptEnabled: true
        }
      }
    }
  },
  devServer: {
    port: 6741
  }
}
