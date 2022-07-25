import { useState } from 'react'
import { Modal, Steps,Toast } from '@douyinfe/semi-ui';
import sty from './index.less'

const CreateProject = (props) => {
  const { onClose } = props
  const [idx, setIdx] = useState(0);
  const nextHandle = ()=>{
    if(idx==2){
      let timer = setTimeout(()=>{
        clearTimeout(timer)
        Toast.success('创建项目成功')
        onClose()
      },2000)
    }
    setIdx(idx+1)
  }
  return (
    <Modal
      title="新建项目"
      visible={true}
      centered
      maskClosable={false}
      closeOnEsc={false}
      style={{ width: '70%', height: '50%' }}
      hasCancel={false}
      okText={idx < 2 ? '下一步' : '去创建'}
      onOk={nextHandle}
      onCancel={onClose}
    >
      <Steps current={idx}>
        <Steps.Step title="项目手册阅读" description="请仔细阅读下面的项目接入流程" />
        <Steps.Step title="配置信息填写" description="请填写项目名称和项目描述" />
        <Steps.Step title="创建" description="信息无误，确认新建项目" />
      </Steps>
      {
        idx == 0 && (
          <>
            This is the content of a basic modal.
            <br />
            More content...
          </>
        )
      }
      {
        idx == 1 && (
          <>
            配置信息填写
          </>
        )
      }
      {
        idx == 2 && (
          <>
            去创建
          </>
        )
      }
      {
        idx > 2 && (
          <div className={sty['swipe-animation']}>
            <div className={sty["credit-card"]}>
              <div className={sty["scc-tripe"]}></div>
            </div>
            <div className={sty["swiper-top"]}></div>
            <div className={sty["swiper-bottom"]}>
              <div className={sty["light-indicator"]}></div>
            </div>
          </div>
        )
      }

    </Modal>
  )
}


export default CreateProject