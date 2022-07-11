import { useRoutes } from 'react-router-dom';
import React, { Suspense } from 'react';
import routes from './config';

// 路由处理方式
const generateRouter = (routers: any[]) => {
  return routers.map((item: any) => {
    if (item.children) {
      item.children = generateRouter(item.children);
    }
    item.element = (
      <Suspense fallback={<div>加载中...</div>}>
        {/* 把懒加载的异步路由变成组件装载进去 */}
        <item.component />
      </Suspense>
    );
    return item;
  });
};

const RouterView = () => {
  const Router = useRoutes(generateRouter(routes));
  return Router;
};

export default RouterView;
