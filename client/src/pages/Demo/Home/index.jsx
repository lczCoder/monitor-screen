import React, { useState, useEffect } from 'react';
import { connect } from 'dva'
import { ConSearch } from '@@@/';
import { ConTaskCard } from '@@@/'

import './index.less'

const Home = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <>
      <div className='home-warp'>
        {/* 搜索组件 */}
        <ConSearch size={['400px', '35px']} placeholder="输入项目ID进行搜索" />
        <div className='task-card-box'>
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


