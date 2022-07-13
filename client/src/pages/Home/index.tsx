import { observer } from 'mobx-react-lite'
import React from 'react'
import styles from './index.module.less'

const Index = () => {
  return (
    <div className={styles.home} style={{ width: '600px', height: '400px' }}>
      homehome
    </div>
  )
}

export default observer(Index)
