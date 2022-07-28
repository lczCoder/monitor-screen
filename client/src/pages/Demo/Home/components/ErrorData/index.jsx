import React, { memo } from 'react'
import { errorConfig } from './data'

import { Pie } from '@ant-design/plots';
import sty from './index.less'

const ErrorData = (props) => {
  return (
    <div className={sty['error-data-box']}>
      <Pie autoFit={true} {...errorConfig} />
    </div>
  )
}

export default memo(ErrorData)