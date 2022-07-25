import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { ConSearch, ConTaskCard } from '@@@/';
import { Tooltip } from '@douyinfe/semi-ui';
import CreateProject from './components/CreateProject';
import sty from './index.less';

const Home = (props) => {
  const [create, setCreate] = useState(false); // 新建项目弹窗
  return (
    <>
      <div className={sty['home-warp']}>
        {/* 搜索组件 */}
        <div className={sty['home-search']}>
          <ConSearch
            size={['600px', '40px']}
            placeholder="输入项目ID进行搜索"
          />
        </div>
        <div className={sty['task-card-box']}>
          {/* 项目卡片 */}
          <div className={sty['task-card-list']}>
            <ConTaskCard></ConTaskCard>
            <ConTaskCard></ConTaskCard>
            <ConTaskCard></ConTaskCard>
            <ConTaskCard open={false}></ConTaskCard>
          </div>
          {/* 创建项目 */}
          <div className={sty['task-card-add']}>
            <Tooltip content="新建项目">
              <img
                width="70px"
                src="https://wandu-fe.oss-cn-beijing.aliyuncs.com/xxxx/add4.png"
                alt="create"
                onClick={() => setCreate(true)}
              />
            </Tooltip>
          </div>
        </div>
      </div>
      {/* 新建项目弹窗组件 */}
      {create && <CreateProject onClose={() => setCreate(false)} />}
    </>
  );
};

export default connect(({}) => ({}))(Home);
