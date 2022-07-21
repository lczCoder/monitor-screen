import { useState,useEffect } from 'react';
import { Space } from '@douyinfe/semi-ui';
import cs from 'classnames'
import {
  IconXiguaLogo,
  IconToutiaoLogo,
  IconGithubLogo,
  IconWeibo,
  IconFeishuLogo,
} from '@douyinfe/semi-icons';
import sty from './index.less';



// 图标列表
const ConIconList = (props) => {


  const { margin = '0 0', vertical, size = '24px' } = props;
  const [idx, setIdx] = useState(0) // 激活下标
  const icons = [
    <IconXiguaLogo className={cs(sty['icon-item'])} size='inherit' />,
    <IconToutiaoLogo className={sty['icon-item']} size='inherit' />,
    <IconGithubLogo className={sty['icon-item']} size='inherit' />,
    <IconWeibo className={sty['icon-item']} size='inherit' />,
    <IconFeishuLogo className={sty['icon-item']} size='inherit' />,
  ];

  return (
    <Space
      vertical={vertical}
      className={sty['icon-list-warp']}
    >
      {icons.map((item, idx) => (
        <div
          style={{ margin: margin, fontSize: size }}
          key={idx}
          className={cs(sty['icon-box'])}
        >
          {item}
        </div>
      ))}
    </Space>
  );
};

export default ConIconList;
