import React from 'react';
import { connect } from 'dva';
import { Space, Input, Avatar, Badge } from '@douyinfe/semi-ui';
import { IconBellStroked } from '@douyinfe/semi-icons';
import { ConSearch } from '@@@/';
import sty from './index.less';

const Bheader = () => {
  return (
    <div className={sty['bheader-container']}>
      <Space>
        <h1>WebTrace</h1>
        {/* 搜索组件 */}
        <ConSearch size={['500px', '35px']} placeholder="输入项目ID进行搜索" />
      </Space>
      <Space>
        <Badge count={5} type="warning">
          <IconBellStroked className={sty['notice']} />
        </Badge>
        <Avatar
          className={sty['user-avatar']}
          src="https://img2.baidu.com/it/u=1994380678,3283034272&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1658595600&t=1122f478cfb913671a2539991935246d"
        />
      </Space>
    </div>
  );
};

export default connect(({}) => ({}))(Bheader);
