import React, { lazy, useEffect } from 'react';
import { To, useNavigate } from 'react-router-dom';
import Redirect from './Redirect';

const config = [
  {
    path: '/login',
    auth: false,
    component: lazy(() => import('../pages/Login')),
  },
  {
    path: '/index',
    auth: true,
    component: lazy(() => import('../layouts')),
    children: [
      {
        path: '/index/home',
        auth: true,
        component: lazy(() => import('../pages/Home')),
      },
      //   { path: '/Portal/Test/:id',
      //     auth:true,
      //     component:lazy(() => import('../page/test/Test'))
      //   },
      //   {
      //     path: '/Portal/*',
      //     auth:false,
      //     component:lazy(() => import('../page/error/NotFound'))
      //   }
    ],
  },
  {
    path: '*',
    auth: false,
    // component:lazy(() => import('../page/error/NotFound'))
  },
  {
    path: '/',
    auth: false,
    component: lazy(() => import('./Redirect')), // 重定向到登录页面
  },
];

export default config;
