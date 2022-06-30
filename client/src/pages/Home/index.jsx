import { connect } from 'dva'

// 首页
const Home = (props) => {
  const { msg } = props
  return (
    <>
      <h1>{msg}</h1>
    </>
  )
}

export default connect(({ Home }) => ({
  msg: Home.title
}))(Home)