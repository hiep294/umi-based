import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    immer: true,
  },
  routes: [
    {
      path: '/',
      exact: false,
      component: '@/wrappers/RootWrapper',
      routes: [
        {
          path: '/auth',
          exact: false,
          component: '@/wrappers/AuthWrapper',
          routes: [
            {
              path: '/auth/login',
              exact: true,
              component: '@/pages/Login',
            },
          ],
        },
        {
          path: '/',
          exact: false,
          component: '@/wrappers/AppWrapper',
          routes: [
            {
              path: '/',
              exact: true,
              component: '@/pages/Home',
            },
            {
              path: '/products',
              exact: true,
              component: '@/pages/Products',
            },
          ],
        },
      ],
    },
  ],
});
