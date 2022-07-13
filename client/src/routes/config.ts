import Redirect from './Redirect'
import { lazy } from 'react'

interface router {
  path: string
  component: any
  auth: boolean
  children?: Array<router>
}

const routes: Array<router> = [
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
      {
        path: '/index/*',
        auth: false,
        component: lazy(() => import('../pages/ErrorBoundary/NotFound')),
      },
    ],
  },
  {
    path: '/login',
    auth: false,
    component: lazy(() => import('../pages/Login')),
  },
  {
    path: '*',
    auth: false,
    component: lazy(() => import('../pages/ErrorBoundary/NotFound')),
  },
  {
    path: '/',
    auth: false,
    component: Redirect,
  },
]

export default routes
