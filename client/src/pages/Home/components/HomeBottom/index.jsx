import { useEffect, useRef } from 'react'
import { animation } from './utils'

import './index.less'
const HomeBottom = () => {

  const canvasDom = useRef() // 获取canvas dom

  useEffect(() => {
    animation(canvasDom.current) // 执行动画
  }, [])

  return (
    <div className="canvas-warp">
      <canvas ref={canvasDom} id="canvas"></canvas>
    </div>
  )
}

export default HomeBottom