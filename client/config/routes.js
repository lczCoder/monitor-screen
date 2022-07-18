export default [{
  path: '/',
  component: '@/layout/base',
  routes:[
    {path: '/home',component: './Home',title:'首页'},
    {path: '/demo/login',component: './Login',title:'登录'},

    { path: '/', redirect: '/home' }, // 重定向首页
  ]
}];
