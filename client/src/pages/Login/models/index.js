import _ from 'lodash';
import { UserLogin,UserRegiste,EmailSend,EmailBind } from '@serve/user';
import {history} from 'umi'
import { Base64 } from 'js-base64';


export default {
  namespace: 'User',
  state: {
    userStatus:false
  },
  reducers: {},
  effects: {
    // 登录
    *_loginUser({payload},{call}){
      payload.password = Base64.encode(payload.password)
      const res = yield call(UserLogin,payload);
      if (res.statusCode ===0){
        window.localStorage.setItem('TOKEN',_.get(res,'data.token'))
        history.replace('/home')
      } 
    },
    // 注册
    *_registeUser({payload},{call}){
      payload.password = Base64.encode(payload.password)
      const res = yield call(UserRegiste,payload);
      return res.statusCode
    },
    // 验证
    *_emailSend({payload},{call}){
      yield call(EmailSend,payload);
    },
    // 绑定
    *_emailBind({payload},{call}){
      const res = yield call(EmailBind,payload);
      return res.statusCode
    }
  },
};
