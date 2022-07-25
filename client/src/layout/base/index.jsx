import React, { useState, useEffect } from 'react';
import { Layout, Space } from '@douyinfe/semi-ui';
import logoImg from '@/assets/logo_20220719_uugai.com-1658201338741.png';
const { Header, Content, Footer } = Layout;
import { ConIconList } from '@@@/';
import Bheader from '../BHeader'
import sty from './style.less';

// 基础布局layout
const BaseLayout = (props) => {
  return (
    <div className={sty['base-warp']}>
      <Layout className={sty['base-container']}>
        <Header className={sty['base-header']}>
          <Bheader />
        </Header>
        <Content className={sty['main-content']}>
          {props.children}
        </Content>
        <Footer className={sty['base-footer']}>
          <ConIconList margin="0 50px" size="36px" />
        </Footer>
      </Layout>
    </div>

  );
};

export default BaseLayout;
