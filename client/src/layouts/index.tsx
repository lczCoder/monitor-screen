import React from 'react';
import { Layout } from '@douyinfe/semi-ui';
import { Outlet } from 'react-router-dom';
import BHeader from './components/BHeader';
import BFooter from './components/BFooter';
import RouterBeforeEach from '../routes/RouterBeforeEach';
import './index.module.css';

const BaseLayout = () => {
  return (
    <Layout className="baseLayout">
      <BHeader />
      <Layout.Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <Outlet />
        <RouterBeforeEach />
      </Layout.Content>

      <BFooter />
    </Layout>
  );
};

export default React.memo(BaseLayout);
