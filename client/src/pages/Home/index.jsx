import { useEffect, useState } from 'react'
import { ConLoading } from '@@@/'
import HomeBottom from './components/HomeBottom'
import HomeHeader from './components/HomeHeader'
import './index.less'

// 首页
const Home = () => {
  const [load, setLoad] = useState(true)
  useEffect(() => {
    let timer1 = setTimeout(() => {
      setLoad(false)
      clearTimeout(timer1)
    }, 3000)
  }, [])


  return (
    <>
      <HomeHeader />
      <div className="home-warp">
        <div style={{display:load?'none':'block'}} className="typing animate"></div>
        <button className="home-btn">
          <span>开始体验</span>
        </button>
      </div>
      <HomeBottom />
      <ConLoading visable={load} />
    </>
  )
}

export default Home