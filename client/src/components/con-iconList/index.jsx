import { useState, useEffect } from 'react';
import { Space, Tooltip } from '@douyinfe/semi-ui';
import cs from 'classnames';
import {icons} from './data'
import {history} from 'umi'
import sty from './index.less';

// 图标列表
const ConIconList = (props) => {
  const { margin = '0 0', vertical, size = '24px' } = props;
  const [idx, setIdx] = useState(0); // 激活下标
  
  const tabSwitchHandle = (idx,route)=>{
    setIdx(idx)
    history.push(route)
  }
  return (
    <Space vertical={vertical} className={sty['icon-list-warp']}>
      {icons(idx).map((item, idx) => (
        <div
          style={{ margin: margin, fontSize: size }}
          key={idx}
          className={cs(sty['icon-box'])}
          onClick={()=>tabSwitchHandle(idx,item.route)}
        >
          <Tooltip content={item.title}>{item.icon}</Tooltip>
        </div>
      ))}
    </Space>
  );
};

export default ConIconList;
