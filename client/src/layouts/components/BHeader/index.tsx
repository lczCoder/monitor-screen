import React from 'react';
import { Layout, Nav, Avatar, Dropdown } from '@douyinfe/semi-ui';
import { IconStar, IconUser, IconUserGroup, IconSetting, IconEdit } from '@douyinfe/semi-icons';
import './index.css';

const BHeader = () => {
  const items = [
    { itemKey: 'home', text: '首页', icon: <IconUser /> },
    { itemKey: 'union', text: '概览', icon: <IconStar /> },
    {
      itemKey: 'approve-management',
      text: '审批管理',
      icon: <IconEdit />,
      items: [
        '入驻审核',
        {
          itemKey: 'operation-management',
          text: '运营管理',
          items: ['人员管理', '人员变更'],
        },
      ],
    },
    {
      text: '任务平台',
      icon: <IconSetting />,
      itemKey: 'job',
      items: ['任务管理', '用户任务查询'],
    },
  ];
  return (
    <Layout.Header className="base-header">
      <div style={{ width: '100%' }}>
        <Nav
          mode={'horizontal'}
          items={items}
          onSelect={(key) => console.log(key)}
          header={{
            logo: (
              <img src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg" />
            ),
            text: '前端监控系统',
          }}
          footer={
            <Dropdown
              position="bottomRight"
              render={
                <Dropdown.Menu>
                  <Dropdown.Item>个人资料</Dropdown.Item>
                  <Dropdown.Item>设置管理员</Dropdown.Item>
                  <Dropdown.Item>退出</Dropdown.Item>
                </Dropdown.Menu>
              }
            >
              <Avatar size="small" color="light-blue" style={{ margin: 4 }}>
                user
              </Avatar>
              <span>user</span>
            </Dropdown>
          }
        />
      </div>
    </Layout.Header>
  );
};

export default React.memo(BHeader);
