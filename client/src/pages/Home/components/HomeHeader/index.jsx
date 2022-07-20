import sty from './index.less';
import wechat from '@/assets/wechat.png';
import QrCode from '@/assets/qrcode.png';
import { history } from 'umi';
import { Tooltip, Space } from '@douyinfe/semi-ui';
const tabList = [
  { tab: '首页', route: '/home' },
  { tab: '系统演示', route: '/demo/login' },
  { tab: '更新日志', route: '' },
  { tab: '部署文档', route: '' },
  { tab: '设计思路', route: '' },
];

const content = (
  <Space vertical>
    <img
      width={170}
      src={QrCode}
    />
    <p>欢迎添加微信进行交流</p>
  </Space>
);

const HomeHeader = () => {
  return (
    <div className={sty['tab-box']}>
      {tabList.map((item, idx) => (
        <div key={idx} className={sty['tab-item']}>
          <span onClick={() => history.push(item.route)}>{item.tab}</span>
        </div>
      ))}
      <Tooltip arrowPointAtCenter={true} content={content}>
        <img width="35" src={wechat} alt="wechat" />
      </Tooltip>
      <img
        width="100"
        src="https://img.shields.io/github/stars/lczCoder/monitor-screen?style=social"
        alt="star"
        onClick={() =>
          window.open('https://github.com/lczCoder/monitor-screen')
        }
      />
    </div>
  );
};

export default HomeHeader;
