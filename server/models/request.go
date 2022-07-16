package models


// 登录请求接口
type UserLoginStruct struct {
	UserName string `json:"username" form:"username" must:"true"`
	Password string `json:"password" form:"password" must:"true"`
}

// 注册请求接口
type UserRegisterStruct struct {
	UserName string `json:"username" form:"username" must:"true"`
	PassWord string `json:"password" form:"password" must:"true"`
	NickName string `json:"nickname" form:"nickname" must:"true"`
	Email string `json:"email" form:"email" must:"true"`
}

// 邮箱发送
type UserEmailStruct struct {
	Email string `json:"email" form:"email" must:"true"`
}

// 邮箱激活
type UserBindEmailStruct struct {
	UserEmailStruct
	Code string `json:"code" form:"code" must:"true"`
}