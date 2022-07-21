export default [
  {
    path: '/demo',
    component: '@/layout/base',
    routes:[
      {path: '/demo/home', component: './Demo/Home',title:'首页'}
    ]
  },
  {
    path: '/',
    routes: [
      { path: '/welcome', component: './Welcome', title: 'WebTrace官网' },
      { path: '/login', component: './Login', title: '登录' },
      { path: '/', redirect: '/welcome' }, // 重定向首页
    ],
  },
];
