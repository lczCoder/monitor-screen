package models

var ErrorCodeMsg = map[int]string{
	101:"请求参数类型错误",
	102:"数据库错误",
	103:"用户名重复",
	104:"邮箱号重复",
	105:"无权限访问，请求未携带token",
	106:"token无效或已过期",
	107:"参数缺失",
}


// 接口响应格式
type ResponseData struct {
	StatusCode int `json:"statusCode"`
	Msg string `json:"msg"`
	Data map[string]interface{} `json:"data"`
}