const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 75   //设计稿等分之后的值，等分的比例同页面rem的比例是一致的
})
//__dirname 绝对路径;代表的是当前文件的目录
const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  runtimeCompiler: true,
  devServer:{
    open:true,
    proxy:{
      '/3001': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          pathRewrite:{
              "^/3001":""
          }
      }
  }
  },
  configureWebpack:{
    resolve: {
      alias: {
        'components': resolve('src/components'),
        'pages': resolve('src/pages'),
        'store': resolve('src/store'),
      }
  }
  },  
  lintOnSave: false, // 关闭EsLint的规则
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
}