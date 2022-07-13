package models

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

// 接口响应错误状态 -> 错误信息
var ErrorCodeMsg = map[int]string{
	101:"请求参数类型错误",
	102:"数据库错误",
	103:"用户名重复",
	104:"邮箱号重复",
	105:"无权限访问，请求未携带token",
	106:"token无效或已过期",
	107:"参数缺失",
	108:"邮箱号不存在",
	109:"邮箱验证码发送失败",
	110:"该邮箱绑定的账号已激活,请勿重复激活",
	111:"激活码已过期,请重新激活",
	112:"激活码错误,请重新输入",
	113:"账号激活失败,请联系管理员",
}


// 接口响应格式
type ResponseData struct {
	StatusCode int `json:"statusCode"`
	Msg string `json:"msg"`
	Data map[string]interface{} `json:"data"`
}

// 错误接口返回 JSON
func ErrorResponse (ctx *gin.Context,code int){
	ctx.JSON(http.StatusOK,&ResponseData{
		StatusCode: code,
		Msg: ErrorCodeMsg[code],
	})
}