import React, { useState, useEffect } from 'react';
import { Layout, Space } from '@douyinfe/semi-ui';
import logoImg from '@/assets/logo_20220719_uugai.com-1658201338741.png';
const { Header, Sider, Content } = Layout;
import { ConIconList } from '@@@/';
import Bheader from '../BHeader'
import sty from './style.less';

// 基础布局layout
const BaseLayout = (props) => {
  return (
    <Layout className={sty['home-container']}>
      <Sider className={sty['home-sider']}>
        <div className={sty['sider-box']}>
          <img
            className={sty['logo-img']}
            width="80px"
            src={logoImg}
            alt="logo"
          />
          <ConIconList margin="20px 0" space="120px" vertical size="36px" />
        </div>
      </Sider>
      <Layout className={sty['home-main']}>
        <Header>
          <Bheader />
        </Header>
        <Content>
          <Space className={sty['main-content']}>
            <Space className={sty['content-main']}>
              123
            </Space>
            <Space className={sty['content-sider']}>
              23123
            </Space>
          </Space>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
