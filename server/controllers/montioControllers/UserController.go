package montioControllers

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"monitor/models"
	"monitor/service"
	"monitor/utils"
	"net/http"
)

// 用户登录
func LoginUser(ctx *gin.Context) {
	fmt.Println("用户登录")
	var userinfo models.UserLoginStruct //注意该结构接受的内容
	if err := ctx.ShouldBind(&userinfo); err != nil {
		ctx.JSON(http.StatusOK, &models.ResponseData{
			StatusCode: 101,
			Msg: models.ErrorCodeMsg[101],
		})
	} else {
		service.UserLoginService(userinfo)
	}
}

// 用户注册
func RegisterUser(ctx *gin.Context) {
	fmt.Println("用户注册")
	var userinfo models.UserRegisterStruct
	if err := ctx.ShouldBind(&userinfo); err != nil {
		ctx.JSON(http.StatusOK, &models.ResponseData{
			StatusCode: 101,
			Msg: models.ErrorCodeMsg[101],
		})
	}else{
		if status :=utils.CheckNilStuct(userinfo);status {
			response := service.UserRegistService(userinfo)
			ctx.JSON(http.StatusOK,&response)
			return
		}
		ctx.JSON(http.StatusOK,&models.ResponseData{
			StatusCode: 107,
			Msg: models.ErrorCodeMsg[107],
		})
	}
}
