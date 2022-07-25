import sty from './index.less'

export const icons = (idx) => [
  {
    title: '首页',
    route:'/demo/home',
    icon: (
      <img className={[sty['icon-item'], idx == 0 && sty['icon-active']].join(' ')} width="45px" src='https://wandu-fe.oss-cn-beijing.aliyuncs.com/xxxx/home10.png'/>
    ),
  },
  {
    title: '新建项目',
    route:'/demo/create-project',
    icon: (
      <img className={[sty['icon-item'], idx == 1 && sty['icon-active']].join(' ')} width="45px" src='https://wandu-fe.oss-cn-beijing.aliyuncs.com/xxxx/add4.png' />
    ),
  },
  {
    title: '自定义监控',
    route:'/demo/customize',
    icon: (
      <img className={[sty['icon-item'], idx == 2 && sty['icon-active']].join(' ')} width="45px" src='https://wandu-fe.oss-cn-beijing.aliyuncs.com/xxxx/jiankong.png' /> 
    ),
  },
  {
    title: '用户行为查询',
    route:'/demo/find-user',
    icon: (
      <img className={[sty['icon-item'], idx == 3 && sty['icon-active']].join(' ')} width="45px" src='https://wandu-fe.oss-cn-beijing.aliyuncs.com/xxxx/find4.png' /> 
    ),
  },
  {
    title: '设置',
    route:'/demo/setting',
    icon: (
      <img className={[sty['icon-item'], idx == 4 && sty['icon-active']].join(' ')} width="45px" src='https://wandu-fe.oss-cn-beijing.aliyuncs.com/xxxx/seting2.png' /> 
    ),
  },
];
