import React from 'react';
import { Layout } from 'antd';
import Cookies from 'js-cookie';

import CmsHeader from './CmsHeader/CmsHeader';
import { Redirect } from 'umi';
import CmsSider from './CmsSider/CmsSider';

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
  const isAuthenticated = Cookies.get('token');
  if (!isAuthenticated) return <Redirect to="/login" />;
  return (
    <Layout style={{ height: '100vh' }}>
      <CmsHeader />
      <Layout>
        <CmsSider />
        <Layout style={{ padding: '24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 'auto',
              backgroundColor: 'white',
              display: 'flex',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
