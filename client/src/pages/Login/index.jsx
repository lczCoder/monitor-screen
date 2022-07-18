import { useState, useEffect } from 'react';
import cs from 'classnames'
import './index.less';

// 登录页面
const Login = () => {
  const [login, setLogin] = useState(true) // 登录 or 注册
  const [move, setMove] = useState(false) // 动画效果
  // 注册登陆状态切换
  const switchLogin = (check) => {
    setLogin(check)
    setMove(true)
    let timer = setTimeout(() => {
      setMove(false)
      clearTimeout(timer)
    }, 1500)
  }
  return (
    <>
      <div className="main">
        <div className={cs("container a-container", { 'is-txl': login })} id="a-container">
          <form className="form" id="a-form" method="" action="">
            <h2 className="form_title title">创建一个账号</h2>
            <input className="form__input" type="text" placeholder="账号：" />
            <input className="form__input" type="text" placeholder="昵称：" />
            <input
              className="form__input"
              type="password"
              placeholder="密码："
            />
            <input className="form__input" type="text" placeholder="邮箱：" />
            <button className="form__button button submit">注册</button>
          </form>
        </div>
        <div className={cs("container b-container", { 'is-txl': login }, { 'is-z200': login })} id="b-container">
          <form className="form" id="b-form" method="" action="">
            <h2 className="form_title title">WebTrace系统登录</h2>
            <input className="form__input" type="text" placeholder="账号：" />
            <input
              className="form__input"
              type="password"
              placeholder="密码："
            />
            <a className="form__link">Forgot your password?</a>
            <button className="form__button button submit">登录</button>
          </form>
        </div>
        <div className={cs('switch', { 'is-txr': login }, { 'is-gx': move })} id="switch-cnt" >
          <div className={cs('switch__circle', { 'is-txr': login })}></div>
          <div className={cs("switch__circle switch__circle--t", { 'is-txr': login })}></div>
          <div className={cs("switch__container", { 'is-hidden': login })} id="switch-c1">
            <h2 className="switch__title title">Hello Friend !</h2>
            <p className="switch__description description">
              Enter your personal details and start journey with us
            </p>
            <button className="switch__button button switch-btn" onClick={() => switchLogin(true)}>
              前往登录
            </button>
          </div>
          <div className={cs("switch__container ", { 'is-hidden': !login })} id="switch-c2">
            <h2 className="switch__title title">Welcome Back !</h2>
            <p className="switch__description description">
              To keep connected with us please login with your personal info
            </p>
            <button className="switch__button button switch-btn" onClick={() => switchLogin(false)}>
              前去注册
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
