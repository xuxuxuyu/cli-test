import testPageRouterConfig from '../pages/test-page/routers';
import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const config: RoutersConfig = [
  // Insert New Router
  {
    path: '/hzero-cli-test-xy/hello',
    component: () => import('../pages/hello/HelloHzeroCliTestXyPage'),
    authorized: true,
    title: 'Hello HzeroCliTestXy',
  },
];

export default config;
