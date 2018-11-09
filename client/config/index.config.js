export default {
  banner: {
    options: {
      autoplay: 5000
    },
    slider: {
      pc: [{
        type: 'img',
        url: 'img/index/index-ban1.jpg'
      }],
      mobile: [
        {
          type: 'img',
          url: 'img/index/index-ban1-m.jpg'
        }
      ]
    }
  },
  recommend: {
    list: [{
      img: 'img/index/01.png',
      title: '品牌故事',
      intro: '网易味央将互联网思维根植现代农业，创造性地为食品安全、农业生产模式输出等问题带来全新解决思路。',
      url: '/brand#section-2',
      order: '01'
    },
    {
      img: 'img/index/02.png',
      title: '味央产品',
      intro: '从农场到餐桌，力求到您口中的每一口肉都安心、美味。',
      url: '/product',
      order: '02'
    },
    {
      img: 'img/index/03.png',
      title: '环保系统',
      intro: '零污染环保科技,实现人、猪、环境和谐与可持续发展。',
      url: '/farm#hbxt',
      order: '03'
    }
    ],
    more: [{
      title: '农场',
      intro: '农场俯瞰',
      url: '/farm'
    },
    {
      title: '养殖',
      intro: '幸福养殖',
      url: '/farm#xfyz'
    },
    {
      title: '猪小花',
      intro: 'IP形象',
      url: '/brand#section-4'
    }
    ]
  }
};
