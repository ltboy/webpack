/**
 * 新闻数据模板
 * 2018-10-17
 */
export default {
  default: 'img/news/default.png',
  banner: {
    pc: 'img/news/ban1.png',
    mobile: 'img/news/ban1-m.jpg'
  }, // 大图
  map: (r => {
    return r.keys().map(key => r(key));
  })(require.context('./news', false, /\.json$/)).reverse()
};
