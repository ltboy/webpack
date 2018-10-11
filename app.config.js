/**
 * 项目的一些定制化配置
 */
const path = require('path');

module.exports = {
  // 主服务启动端口
  appPort: 8088,

  // webpack的差异化配置
  webpack: {
    entry: {
      app: path.join(__dirname, 'client/index.js'), // 入口
      vendor: ['vue', 'vue-router'] // 拆分框架代码
    },
    // 自定义Alias设置
    resolveAlias: {},
    // 扩展rules
    rules: []
  },
  // 自定义中间件 async await函数写法
  middleWares: []
};
