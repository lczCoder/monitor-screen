// api接口地址

const UserApi = '/user';

const Api = {
  // ---------------------------用户类接口------------------------------------//
  UserLoginApi: UserApi + '/login', // 用户登录接口
  UserRegisteApi: UserApi + '/register', // 注册接口
  EmailSendApi: UserApi + '/emailSend', // 邮箱验证码发送
  EmailBindApi: UserApi + '/emailBind', // 邮箱验证码绑定
// -----------------------------------------------------------------------//
};

export default Api;