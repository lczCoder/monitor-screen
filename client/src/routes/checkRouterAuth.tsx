import routes from './config';

//根据路径获取路由
const checkAuth = (routers: any[], path: String) => {
  for (const data of routers) {
    if (data.path == path) return data;
    if (data.children) {
      const res: any = checkAuth(data.children, path);
      if (res) return res;
    }
  }
  return null;
};

const checkRouterAuth = (path: String) => {
  let auth = null;
  auth = checkAuth(routes, path);
  return auth;
};

export default checkRouterAuth;
