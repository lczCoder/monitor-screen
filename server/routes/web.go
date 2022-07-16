package routes

import (
	"github.com/gin-gonic/gin"
	"monitor/controllers/montioControllers"
	"monitor/middleware"
	"monitor/models"
	"net/http"
)

const version = "monito/v1"

// 用户信息类接口处理
func MonitoRouterInit(r *gin.Engine){
	// 用户相关 路由
	user := r.Group("/monito/user")
	{
		user.POST("/login", montioControllers.LoginUser)
		user.POST("/register", montioControllers.RegisterUser)
		user.POST("/emailSend",montioControllers.EmailSendUser)
		user.POST("/emailBind",montioControllers.EmailBindUser)
	}

	// 首页相关路由
	home := r.Group("/monito/view").Use(middleware.JwtAuth())
	{
		home.GET("/home", func(ctx *gin.Context) {
			ctx.JSON(http.StatusOK,models.ResponseData{
				StatusCode: 0,
				Msg: "首页数据",
			})
		})
	}
}
