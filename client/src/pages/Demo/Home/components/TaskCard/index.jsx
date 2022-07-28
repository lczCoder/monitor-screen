import React, { useState, useEffect, memo } from 'react';
import _ from 'lodash';
import cs from 'classnames';
import { Empty, Switch, Tooltip } from '@douyinfe/semi-ui';
import {
  IllustrationNoAccess,
  IllustrationNoAccessDark,
} from '@douyinfe/semi-illustrations';
import DataCard from '../DataCard' // 用户数据统计卡片
import ErrorData from '../ErrorData' // 错误统计卡片
import PerformanceData from '../PerformanceData' // 性能卡片
import sty from './index.less';

const TaskCard = (props) => {
  const { open = true } = props;
  const [activeIdx, setIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(open);

  const tabList = [
    { tab: '用户数据', key: '', component: <DataCard /> },
    { tab: '错误上报', key: '', component: <ErrorData /> },
    { tab: '性能分析', key: '', component: <PerformanceData /> },
  ];
  return (
    <div className={sty['task-card']}>
      {/* 卡片信息栏 */}
      <div className={sty['card-heard']}>
        <p>项目名称目名称(ID)</p>
        <div className={sty['state-area']}>
          <Tooltip content="查看更多大屏数据" position="topRight">
            <img
              width="20px"
              src="https://wandu-fe.oss-cn-beijing.aliyuncs.com/xxxx/detail3.png"
              alt=""
            />
          </Tooltip>
          <Switch
            checked={isOpen}
            checkedText="｜"
            uncheckedText="〇"
            onChange={(check) => setIsOpen(check)}
          />
        </div>
      </div>
      <div className={sty["card-box"]}>
        {/* 内容区域 */}
        {!isOpen ? (
          <Empty
            style={{ fontWeight: 'bold' }}
            image={<IllustrationNoAccess style={{ width: 150, height: 150 }} />}
            darkModeImage={
              <IllustrationNoAccessDark style={{ width: 150, height: 150 }} />
            }
            description={'项目监控被关闭啦'}
          />
        ) : (
          <div className={sty["card-main"]}>
            {tabList.map((item, idx) => (
              <div
                key={idx}
                className={cs([
                  sty['card-section'],
                  idx == activeIdx && sty['is-active']
                ])}
              >
                <div className={sty["card-content"]}>
                  <div className={sty["card-subtitle"]}>{item.component}</div>
                </div>
              </div>
            ))}
            <div className={sty["card-buttons"]}>
              {tabList.map((item, idx) => (
                <button
                  key={idx}
                  className={cs(idx == activeIdx && sty['is-active'])}
                  onClick={_.throttle(() => setIdx(idx), 3000)}
                >
                  {item.tab}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(TaskCard);
