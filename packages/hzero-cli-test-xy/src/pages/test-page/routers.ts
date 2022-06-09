import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const config: RoutersConfig = [
  {
    path: '/hzero-cli-test-xy/test-page',
    component: () => import('./TestPagePage'),
    authorized: true,
    title: 'Hello-TestPage',
  },
];

export default config;
