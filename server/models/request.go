package models


// 登录请求接口
type UserLoginStruct struct {
	Username string `json:"username" form:"username" must:"true"`
	Password string `json:"password" form:"password" must:"true"`
}
// 注册请求接口
type UserRegisterStruct struct {
	UserName string `json:"username" form:"username" must:"true"`
	PassWord string `json:"password" form:"password" must:"true"`
	Email string `json:"email" form:"email" must:"true"`
	NickName string `json:"nickname" form:"nickname" must:"true"`
}