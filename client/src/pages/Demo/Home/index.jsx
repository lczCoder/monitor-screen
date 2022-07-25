import React, { useState, useEffect } from 'react';
import { connect } from 'dva'
import { ConSearch, ConTaskCard } from '@@@/';
import sty from './index.less'
import './index.less'

const Home = (props) => {
  return (
    <>
      <div className={sty['home-warp']}>
        {/* 搜索组件 */}
        <div className={sty['home-search']}>
          <ConSearch size={['600px', '40px']} placeholder="输入项目ID进行搜索" />
        </div>
        <div className={sty['task-card-box']}>
          <ConTaskCard></ConTaskCard>
          <ConTaskCard></ConTaskCard>
          <ConTaskCard></ConTaskCard>
          <ConTaskCard open={false}></ConTaskCard>
        </div>
      </div>
    </>
  )
}

export default connect(({ }) => ({}))(Home)


