import { connect } from 'dva'
import 'wired-elements'
import { Tabs } from 'antd';
import { WiredButton, WiredLink } from 'wired-elements'
import styles from './index.less'
import 'antd/dist/antd.css';


// import '~@less'

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

// 首页
const Home = (props) => {
  const { msg } = props
  return (

    <div className={styles.home}>
      <div className={styles.home__header}>
        <div className={styles.left}>监控系统</div>
        <div className={styles.right}>
          <Tabs type='line' defaultActiveKey='1' onChange={onChange}>
            <TabPane tab="Details" key="1">Details</TabPane>
            <TabPane tab="Diff" key="2">Diff</TabPane>
            <TabPane tab="Commits" key="3">Commits</TabPane>
            <TabPane tab="Challenges" key="4">Challenges</TabPane>
          </Tabs>

          <Wired-Button>登录</Wired-Button>
        </div>
      </div><h1>{msg}</h1>
    </div>


  )
}

export default connect(({ Home }) => ({
  msg: Home.title
}))(Home)