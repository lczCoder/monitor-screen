import React from 'react'
import { Route, Routes, useLocation, Navigate } from 'react-router-dom'
import routes from './config'

const AppRouter = () => {
  const location = useLocation()
  const { pathname } = location
  const isLogin = true // 判断用户登录状态

  //请求页面路径需要验证 && 没有登录 -> 跳转登录页 ， 后续考虑登录后是否自动跳转被拦截路径
  const RouteNav = (param: any) => {
    return param.map((item: { path: string; auth: boolean; component: any; children?: any }) => {
      return (
        <Route
          path={item.path}
          element={
            item.path === pathname && item.auth && !isLogin ? (
              <Navigate to="/login" replace={true}></Navigate>
            ) : (
              <item.component />
            )
          }
          key={item.path}
        >
          {item?.children && RouteNav(item.children)}
        </Route>
      )
    })
  }

  return <Routes>{RouteNav(routes)}</Routes>
}

export default AppRouter
