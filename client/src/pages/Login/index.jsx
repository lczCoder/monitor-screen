import { useState, useEffect } from 'react';
import { connect } from 'dva';
import EmailVerify from './components/EmailVerify'
import cs from 'classnames';
import _ from 'lodash'
import { Toast } from '@douyinfe/semi-ui';
import './index.less';

// 登录页面
const Login = ({ dispatch }) => {
  const [login, setLogin] = useState(true); // 登录 or 注册
  const [move, setMove] = useState(false); // 动画效果
  const [user, setUser] = useState(''); // 用户名
  const [password, setPassword] = useState(''); // 密码
  const [nick, setNick] = useState(''); // 昵称
  const [email, setEmail] = useState(''); // 邮箱
  const [codeModal, setCodeModal] = useState(false); // 邮箱验证码

  const LoginFrom = [
    { type: 'text', placeholder: '账号：', value: user, fn: setUser },
    {
      type: 'password',
      placeholder: '密码：',
      value: password,
      fn: setPassword,
    },
  ];
  const RegisterFrom = [
    ...LoginFrom,
    { type: 'text', placeholder: '昵称：', value: nick, fn: setNick },
    { type: 'text', placeholder: '邮箱：', value: email, fn: setEmail },
  ];

  // 注册登陆状态切换
  const switchLogin = (check) => {
    setLogin(check);
    setMove(true);
    resetForm();
    let timer = setTimeout(() => {
      setMove(false);
      clearTimeout(timer);
    }, 1500);
  };
  // 重置登录注册信息
  const resetForm = () => {
    setUser('');
    setPassword('');
    setNick('');
    setEmail('');
  };
  // 检验信息规范
  const checkRule = (type) => {
    if (!user || !password || !(type || email) || !(type || nick)) {
      Toast.warning('请填写完整的信息')
      return
    }
    const userReg = /^[a-zA-Z0-9]{4,16}$/
    const passReg = /^.*(?=.{6,16})(((?=.*\d)(?=.*[a-z]))|(?=.*[!@#$%^&*? ])).*$/
    const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (!userReg.test(user)) {
      Toast.warning('用户名不符合规范')
      return
    }
    if (!passReg.test(password)) {
      Toast.warning('密码不符合规范')
      return
    }
    if (!type && !emailReg.test(email)) {
      Toast.warning('邮箱不符合规范')
      return
    }
    loginOrRegiste(type)
  }
  // 注册or登录
  const loginOrRegiste = (type) => {
    type ?
      dispatch({
        type: `User/_loginUser`,
        payload: {
          username: user,
          password: password,
        }
      }) : dispatch({
        type: `User/_registeUser`,
        payload: {
          username: user,
          password: password,
          nickname: nick || undefined,
          email: email || undefined
        }
      }).then(res=>{
        res ===0 && setCodeModal(true)
      })

  }
  return (
    <>

      <div className="login-warp">
        {
          codeModal && <EmailVerify info={{email,user,password}} email={email} onClose={() => setCodeModal(false)} />
        }
        <div className="main">
          <div
            className={cs('container a-container', { 'is-txl': login })}
            id="a-container"
          >
            <div className="form" id="a-form">
              <h2 className="form_title title">创建一个账号</h2>
              {/* 注册信息 */}
              {RegisterFrom.map((item, idx) => (
                <input
                  key={idx}
                  className="form__input"
                  type={item.type}
                  placeholder={item.placeholder}
                  value={item.value}
                  onChange={({ target }) => item.fn(target.value)}
                />
              ))}
              <button
                className="form__button button submit"
                onClick={_.throttle(() => checkRule(false), 3000)}
              >
                注册
              </button>
            </div>
          </div>
          <div
            className={cs(
              'container b-container',
              { 'is-txl': login },
              { 'is-z200': login },
            )}
            id="b-container"
          >
            <div className="form" id="b-form">
              <h2 className="form_title title">WebTrace系统登录</h2>
              {/* 登录信息 */}
              {LoginFrom.map((item, idx) => (
                <input
                  className="form__input"
                  key={idx}
                  type={item.type}
                  placeholder={item.placeholder}
                  value={item.value}
                  onChange={({ target }) => item.fn(target.value)}
                />
              ))}
              <a className="form__link">Forgot your password?</a>
              <button
                className="form__button button submit"
                onClick={_.throttle(() => checkRule(true), 3000)}
              >
                登录
              </button>
            </div>
          </div>
          <div
            className={cs('switch', { 'is-txr': login }, { 'is-gx': move })}
            id="switch-cnt"
          >
            <div className={cs('switch__circle', { 'is-txr': login })}></div>
            <div
              className={cs('switch__circle switch__circle--t', {
                'is-txr': login,
              })}
            ></div>
            <div
              className={cs('switch__container', { 'is-hidden': login })}
              id="switch-c1"
            >
              <h2 className="switch__title title">Hello Friend !</h2>
              <p className="switch__description description">
                Enter your personal details and start journey with us
              </p>
              <button
                className="switch__button button switch-btn"
                onClick={() => switchLogin(true)}
              >
                前往登录
              </button>
            </div>
            <div
              className={cs('switch__container ', { 'is-hidden': !login })}
              id="switch-c2"
            >
              <h2 className="switch__title title">Welcome Back !</h2>
              <p className="switch__description description">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="switch__button button switch-btn"
                onClick={() => switchLogin(false)}
              >
                前去注册
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(({ Login }) => ({}))(Login);
