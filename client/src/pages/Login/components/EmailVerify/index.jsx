import { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Modal, Input, Button } from '@douyinfe/semi-ui';
import { IconMail } from '@douyinfe/semi-icons';
import _ from 'lodash';
import sty from './index.less';

const EmailVerify = (props) => {
  const { dispatch, info, onClose } = props;
  const { email, user, password } = info;
  const [once, setOnce] = useState(true);
  const limitTime = 45;
  const [code, setCode] = useState(''); // 验证码
  const [send, setSend] = useState(true); // 是否可以发送
  const [time, setTime] = useState(0); // 倒计时

  useEffect(() => {
    !once && countDown();
  }, [time]);

  // 45秒倒计时
  const countDown = () => {
    setSend(false);
    let timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        setSend(true);
        clearTimeout(timer);
      }
    }, 1000);
  };
  // 验证码发送
  const sendMail = () => {
    send &&
      dispatch({
        type: 'User/_emailSend',
        payload: { email },
      });
  };
  // 再次发送
  const againSend = () => {
    setOnce(false);
    setTime(limitTime);
    sendMail();
  };
  // 邮箱绑定 && 登录
  const bindEmail = async() => {
   const res = await dispatch({
      type: 'User/_emailBind',
      payload: {
        email,
        code,
      },
    });
    res === 0 && loginUser()
  };
  // 登录
  const loginUser = () => {
    dispatch({
      type: 'User/_loginUser',
      payload: {
        username: user,
        password,
      },
    });
  };
  return (
    <Modal
      title="账号邮箱绑定"
      centered
      visible={true}
      maskClosable={false}
      footer={
        <>
          <Button type="primary" onClick={loginUser}>
            暂不绑定,先体验
          </Button>
          {!once && (
            <Button
              type="primary"
              onClick={_.throttle(() => bindEmail(), 3000)}
            >
              绑定账号进入
            </Button>
          )}
        </>
      }
      onCancel={onClose}
    >
      <div className={sty['email-warp']}>
        <h3>点击验证会向您的邮箱&lt;{email}&gt;发送一封附带激活码的邮件</h3>
        <div>
          <span>验证码：</span>
          <Input
            prefix={<IconMail />}
            style={{ width: '250px' }}
            type="text"
            value={code}
            onChange={(v) => setCode(v)}
          />
          <Button
            theme="solid"
            type="secondary"
            onClick={againSend}
            disabled={!send}
          >
            {send ? once?'验证':'再次发送' : time}
          </Button>
        </div>
        <p>
          有效期<span>5</span>分钟~
        </p>
      </div>
    </Modal>
  );
};

export default connect(({ User }) => ({}))(EmailVerify);
