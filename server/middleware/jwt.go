package middleware

import (
	"github.com/gin-gonic/gin"
	"monitor/models"
	"monitor/utils"
	"net/http"
)

// jwtAuth 中间件 用户身份鉴权
func JwtAuth () gin.HandlerFunc{
	return func (ctx *gin.Context){
		token:= ctx.Request.Header.Get("Authorization")
		// 未携带token 请求不合法
		if token == "" {
			ctx.JSON(http.StatusOK,&models.ResponseData{
				StatusCode: 105,
				Msg: models.ErrorCodeMsg[105],
			})
			ctx.Abort()
			return
		}
		//解析token包含的信息
		user ,err := utils.ParseToken(token)
		if err != nil {
			ctx.JSON(http.StatusOK, models.ResponseData{
				StatusCode: 106,
				Msg: models.ErrorCodeMsg[106],
			})
			ctx.Abort()
			return
		}
		ctx.Set("Token",user)
		ctx.Next()
	}
}