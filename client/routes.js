import Index from './pages/index/index';
import About from './pages/about';
import Brand from './pages/brand';
import Farm from './pages/farm';
import Product from './pages/product';
import CookBook from './pages/cookbook/index';
import CookBookDetail from './pages/cookbook/detail';
import Shop from './pages/shop/index';
import Pigpa from './pages/shop/pigpa';
import News from './pages/news/index';
import NewsDetail from './pages/news/detail/index';
const routes = [{
  path: '/',
  name: 'index',
  component: Index
},
{
  path: '/about',
  component: About,
  name: 'about'
},
{
  path: '/brand',
  component: Brand,
  name: 'brand'
},
{
  path: '/farm',
  component: Farm,
  name: 'farm'
},
{
  path: '/product',
  component: Product,
  name: 'product'
}, {
  path: '/cookbook',
  component: CookBook,
  name: 'cookBook'
}, {
  path: '/cookbook/detail/:id',
  component: CookBookDetail,
  name: 'cookBookDetail'
},
{
  path: '/shop',
  component: Shop,
  name: 'shop'
},
{
  path: '/shop/pigpa',
  component: Pigpa,
  name: 'pigpa'
}, {
  path: '/news',
  component: News,
  name: 'news'
}, {
  path: '/news/detail/:id',
  component: NewsDetail,
  name: 'newsDetail'
}
];

export default routes;
