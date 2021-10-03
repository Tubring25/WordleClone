// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/theme/index.less') ]
    }
  }
}
