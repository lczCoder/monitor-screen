import React, { memo } from 'react'
import { Divider } from '@douyinfe/semi-ui';
import { tableData } from './data'
import sty from './index.less'

const colorMap = ['#ee2746', '#f07c82', '#5d3131'] // 排行榜颜色 强色->弱色

const PerformanceData = (props) => {
  return (
    <div className={sty['perf-warp']}>
      {/* 页面性能数据 */}
      <div className={sty['page-data-box']}>
        <h3>页面性能数据</h3>
        <div className={sty['data-info']}>
          <div>
            <h5>Dom平均解析耗时</h5>
            <p><span>300</span> &nbsp;ms</p>
          </div>
          <div className={sty['divider-line']}></div>
          <div>
            <h5>资源平均加载耗时</h5>
            <p><span>300</span> &nbsp;ms</p>
          </div>
        </div>
      </div>
      {/* 接口性能数据 */}
      <div className={sty['api-data-box']}>
        <h3>
          接口性能
        </h3>
        <div className={sty['data-info']}>
          <div className={sty['api-text']}>
            <p>请求接口总数<br /><span>99999</span></p>
            <div className={sty['divider-line']}></div>
            <p>接口平均耗时<br /><span>101</span> &nbsp;ms</p>
          </div>
          <div className={sty['api-top']}>
            <Divider align="center" margin={5} style={{ fontSize: '12px', width: '80%' }}>
              接口请求耗时Top3
            </Divider>
            {tableData.map((item, idx) => (
              <div className={sty['top-item']} key={item.key}>
                <p className={sty['api-name']} style={{ color: colorMap[idx] }}>
                  {idx + 1}、{item.api_name}
                </p>
                <p>
                  平均耗时：
                  <span>{item.api_time}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(PerformanceData)