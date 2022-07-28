import { memo } from 'react';
import { config } from './data';
import { Divider } from '@douyinfe/semi-ui';
import { Line } from '@ant-design/plots';
import sty from './index.less';

// 任务卡片数据
const CardData = () => {
  return (
    <div className={sty['data-card-box']}>
      {/* 大卡片数据 */}
      <div className={sty['data-square-box']}>
        <div className={sty['card-square-item']}>
          <div className={sty['info-area']}>
            <h5>今日活跃用户</h5>
            <p>
              <span>1012</span>&nbsp;位
            </p>
          </div>
          <img
            width="30px"
            src="https://wandu-fe.oss-cn-beijing.aliyuncs.com/xxxx/user_icon.png"
            alt=""
          />
        </div>
        <div className={sty['card-square-item']}>
          <div className={sty['info-area']}>
            <h5>较昨日涨幅</h5>
            <p>
              <span>15.5</span>&nbsp;%
            </p>
          </div>
          <img
            width="30px"
            src="https://wandu-fe.oss-cn-beijing.aliyuncs.com/xxxx/gain.png"
            alt=""
          />
        </div>
      </div>
      {/* 方形数据卡片 */}
      <div className={sty['card-rectangle']}>
        总用户数：<span>23213321</span>
      </div>
      {/* 曲线图 */}
      <div className={sty['card-graph']}>
        <Divider align="center" margin={5} style={{ fontSize: '12px', width: '85%' }}>
          数据统计
        </Divider>
        <Line style={{ height: '90%', width: '100%' }} {...config} />
      </div>
    </div>
  );
};

export default memo(CardData);
