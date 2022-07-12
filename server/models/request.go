package models


// 登录请求接口
type UserLoginStruct struct {
	Username string `json:"username" form:"username"`
	Password string `json:"password" form:"password"`
}
// 注册请求接口
type UserRegisterStruct struct {
	UserName string `json:"username" form:"username"`
	PassWord string `json:"password" form:"password"`
	Email string `json:"email" form:"email"`
	NickName string `json:"nickname" form:"nickname"`
}