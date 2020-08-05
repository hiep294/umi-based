import React from 'react';
import { Layout } from 'antd';
import Cookies from 'js-cookie';

import { Redirect } from 'umi';
import AppSider from './AppSider';

const { Content } = Layout;

// for remove 'prefixNamespace' error message
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-alert
  console.error = (message = '') => {
    if (message.indexOf('prefixNamespace') === -1) {
      // console.log('message');
    }
  };
}

export default ({ children }: any) => {
  // if (!isAuthenticated) {
  //   return <Redirect to="/auth/login" />;
  // }
  return (
    <Layout style={{ height: '100vh' }}>
      {/* <CmsHeader /> */}
      <Layout>
        <AppSider />
        <Layout style={{ padding: '24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 'auto',
              backgroundColor: 'white',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
