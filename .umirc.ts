import { defineConfig } from 'umi';

export default defineConfig({
  dva: {
    immer: true,
    hmr: false,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  routes: [
    { path: '/', exact: true, redirect: '/index' },
    {
      path: '/login',
      exact: true,
      component: '@/pages/LoginPage/LoginPage',
    },
    {
      path: '/',
      exact: false,
      component: '@/wrappers/CmsWrapper/CmsWrapper',
      routes: [
        {
          path: '/index',
          exact: true,
          component: '@/pages/IndexPage/IndexPage',
        },
      ],
    },
  ],
  // theme: {
  //   '@primary-color': '#008a67',
  // },
});
