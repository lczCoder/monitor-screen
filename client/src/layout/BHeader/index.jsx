import React from 'react';
import { connect } from 'dva';
import { Space, Input, Avatar, Badge } from '@douyinfe/semi-ui';
import { IconBellStroked } from '@douyinfe/semi-icons';
import LogoImg  from '@/assets/logo_20220719_uugai.com_1658201368202.png'
import sty from './index.less';

const Bheader = () => {
  return (
    <div className={sty['bheader-container']}>
      <Space>
        {/* <h1>WebTrace</h1> */}
        <img width="300" src={LogoImg} alt="" />

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
