import _ from 'lodash';
import { UserLogin, UserRegiste, EmailSend, EmailBind } from '@serve/user';
import { history } from 'umi';
import { Base64 } from 'js-base64';

export default {
  namespace: 'User',
  state: {
    userBind: false, // 邮箱绑定状态
  },
  reducers: {
    // 账号是否绑定过邮箱
    bindStatus(state, { payload }) {
      state.userBind = payload == 0 ? false : true;
      return { ...state };
    },
  },
  effects: {
    // 登录
    *_loginUser({ payload }, { call, put }) {
      payload.password = Base64.encode(payload.password);
      const res = yield call(UserLogin, payload);
      if (res.statusCode === 0) {
        window.localStorage.setItem('TOKEN', _.get(res, 'data.token'));
        yield put({ type: 'bindStatus', payload: _.get(res, 'data.bind') });
        history.replace('/home');
      }
    },
    // 注册
    *_registeUser({ payload }, { call }) {
      payload.password = Base64.encode(payload.password);
      const res = yield call(UserRegiste, payload);
      return res.statusCode;
    },
    // 验证
    *_emailSend({ payload }, { call }) {
      yield call(EmailSend, payload);
    },
    // 绑定
    *_emailBind({ payload }, { call }) {
      const res = yield call(EmailBind, payload);
      return res.statusCode;
    },
  },
};
