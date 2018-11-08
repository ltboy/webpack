import testRoutes from './views/test/routes';
import entry from './app.vue';
import Index from './pages/index';

const routes = [{
  path: '/',
  name: 'index',
  component: Index
},
{
  path: '/test',
  component: entry,
  children: testRoutes
}
];

export default routes;
