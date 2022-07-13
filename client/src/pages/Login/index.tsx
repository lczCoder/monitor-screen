import React from 'react'
import { observer } from 'mobx-react-lite'
import useStore from '../../stores'
import { Button } from '@douyinfe/semi-ui'
import { Line } from 'react-chartjs-2'
import { options, data } from './data'
import styles from './index.module.less'

const Index = () => {
  const { homeStore } = useStore()
  const { active } = homeStore
  return (
    <div id={styles.main} style={{ width: '800px', height: '400px' }}>
      login
      <Button>按钮</Button>
      <Line options={options} data={data} />
    </div>
  )
}

export default observer(Index)
