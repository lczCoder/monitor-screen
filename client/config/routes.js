export default [{
  path: '/',
  component: '@/layout/base',
  routes:[
    {path: '/home',component: './Home',title:'首页'},
    { path: '/', redirect: '/home' }, // 重定向首页
  ]
}];
