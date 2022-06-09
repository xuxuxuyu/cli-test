// 全局配置
// import { setLayout } from 'hzero-front/lib/customize/layout';
// import { getConfig } from 'choerodon-ui';
// import { AxiosStatic } from 'axios';
// import { extendsEnvConfig } from 'utils/iocUtils';

export const dvaAppInit = () => {
  // extendsEnvConfig({
  //     TODO_API: '/htodo',
  // });

  // const axios: AxiosStatic = getConfig('axios');
  // axios.interceptors.request.use(
  //   (config) => {
  //     return {
  //       ...config,
  //       headers: {
  //         ...config?.headers,
  //         get: {
  //           test: 'abcd',
  //           ...config?.headers?.get,
  //         },
  //       },
  //     };
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  // 全局配置
  //@ts-ignore
  // setLayout('company-horizontal', async () => import('hzero-cli-test-common/src/layouts/CustomLayout.tsx'));
  require('./global.module.less');
};

// /**
//  * 当子模块更新时触发事件
//  * @param diffData 子模块变更的版本信息
//  */
// export const onMicroModuleUpdate = async (diffData) => {
//   const isNeedReload = window.confirm(
//     `前端部署已经更新：${Object.keys(diffData).join(',')},是否刷新浏览器`
//   );
//   if (isNeedReload) {
//     window.location.reload();
//   }
// };
