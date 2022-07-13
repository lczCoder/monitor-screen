import React from 'react'
import { Layout } from '@douyinfe/semi-ui'
import BHeader from './components/BHeader'
import BFooter from './components/BFooter'
import { Outlet } from 'react-router-dom';
import './index.module.less'

const BaseLayout = (props: any) => {
  return (
    <Layout className="baseLayout">
      <BHeader />
      divdiv
      <Outlet/>
      <BFooter />
    </Layout>
  )
}

export default React.memo(BaseLayout)
