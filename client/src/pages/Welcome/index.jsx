import { useEffect, useState } from 'react'
import { ConLoading } from '@@@/'
import HomeBottom from './components/HomeBottom'
import HomeHeader from './components/HomeHeader'
import {history} from 'umi'
import './index.less'

// 首页
const Home = () => {
  const [load, setLoad] = useState(true)
  useEffect(() => {
    let timer1 = setTimeout(() => {
      setLoad(false)
      clearTimeout(timer1)
    }, 1500)
  }, [])


  return (
    <>
      <HomeHeader />
      <div className="welcome-warp">
        <div style={{display:load?'none':'block'}} className="typing animate"></div>
        <button className="welcome-btn" onClick={()=>history.push('/demo/home')}>
          <span>开始体验</span>
        </button>
      </div>
      <HomeBottom />
      <ConLoading visable={load} />
    </>
  )
}

export default Home