// 用户相关接口请求
import $http from '@/utils/request';
import Api from './api';

export const Test = (payload) => $http.get('/view/home', payload);

// 用户登录请求
export const UserLogin = (payload) => $http.post(Api.UserLoginApi, payload);

// 用户注册请求
export const UserRegiste = (payload) => $http.post(Api.UserRegisteApi, payload);

// 邮件验证码发送
export const EmailSend = (payload) => $http.post(Api.EmailSendApi,payload)

// 激活码验证
export const EmailBind = (payload) => $http.post(Api.EmailBindApi,payload)