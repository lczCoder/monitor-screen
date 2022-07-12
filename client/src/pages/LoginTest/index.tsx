import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  IconGithubLogo,
  IconMail,
  IconPhone,
  IconLink,
  IconSemiLogo,
  IconUserCircle,
} from '@douyinfe/semi-icons';
import { Form } from '@douyinfe/semi-ui';
import cs from 'classnames';
import './index.less';

const Login = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className={cs('container', { 'sign-up-mode': login })}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">登录</h2>
            <div>
              <Form>
                <Form.Input
                  field="input"
                  trigger="blur"
                  label=" "
                  size="large"
                  placeholder="用户名"
                  style={{ width: 300}}
                  rules={[
                    // { required: true, message: 'required error' },
                    { type: 'string', message: 'type error' },
                    {
                      validator: (rule, value) => value === '',
                      message: '',
                    },
                  ]}
                />
                <Form.Input
                  field="input"
                  trigger="blur"
                  label=" "
                  size="large"
                  placeholder="密码"
                  mode="password"
                  style={{ width: 300}}
                  rules={[
                    { type: 'string', message: 'type error' },
                    {
                      validator: (rule, value) => value === '',
                      message: '',
                    },
                  ]}
                />
              </Form>
            </div>
            <input type="submit" value="立即登录" className="btn solid" />
            <p className="social-text">通过其他方式</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <IconMail />
              </a>
              <a href="#" className="social-icon">
                <IconPhone />
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">注册</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="用户名" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="邮箱" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="密码" />
            </div>
            <input type="submit" className="btn" value="立即注册" />
            <p className="social-text">
              <IconLink />
              友情链接
            </p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <IconGithubLogo />
              </a>
              <a href="#" className="social-icon">
                <IconSemiLogo />
              </a>
              <a href="#" className="social-icon">
                <IconUserCircle />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-alipay"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>加入我们</h3>
            <p>加入我们，成为本站的一份子。</p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={() => setLogin(true)}
            >
              去注册
            </button>
          </div>
          <img src="/src/assets/login.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>已有帐号？</h3>
            <p>立即登录已有帐号，享受独家权益。</p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={() => setLogin(false)}
            >
              去登录
            </button>
          </div>
          <img src="/src/assets/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
