/*
 * @Description:
 * @Date: 2021-07-13 17:10:23
 * @LastEditTime: 2021-08-24 09:29:50
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,

  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#30546e',
            'link-color': '#67859f',
            'heading-color': '16344c'
          },
          javascriptEnabled: true
        }
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/theme/theme.less')]
    }
  }
}
