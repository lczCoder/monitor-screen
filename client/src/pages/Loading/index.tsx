import { observer } from 'mobx-react-lite'
import React from 'react'
import { Spin } from '@douyinfe/semi-ui'
import './index.module.css'

interface Props {
}

const Loading = (props: Props) => {
  return (
    <div className='spin-gloabl'>
      <Spin tip="I am loading..." {...props}></Spin>
    </div>
  )
}

export default observer(Loading)
