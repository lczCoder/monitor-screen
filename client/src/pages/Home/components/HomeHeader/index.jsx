import sty from './index.less';
import wechat from '@/assets/wechat.png'
import { Popover } from 'antd';
const tabList = [
  { tab: '首页' },
  { tab: '系统示例' },
  { tab: '更新日志' },
  { tab: '部署文档' },
  { tab: '设计思路' },
];

const content = (
    <img width={150} src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F03%2F20200503120801_wNjsi.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660740537&t=2b150b4b0136f09c84e86637edfd741f" alt="" />
);


const HomeHeader = () => {
  return (
    <div className={sty['tab-box']}>
      {tabList.map((item, idx) => (
        <div key={idx} className={sty['tab-item']}>
          <span>{item.tab}</span>
        </div>
      ))}
      <Popover placement="bottom" title={'作者微信,欢迎交流~'} content={content}>
        <img
          width="35"
          src={wechat}
          alt="wechat"
        />
      </Popover>
      <img
        width="100"
        src="https://img.shields.io/github/stars/lczCoder/monitor-screen?style=social"
        alt="star"
        onClick={() => window.open('https://github.com/lczCoder/monitor-screen')}
      />
    </div>
  );
};

export default HomeHeader;
