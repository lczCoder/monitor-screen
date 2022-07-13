package routes

import (
	"github.com/gin-gonic/gin"
	"monitor/controllers/montioControllers"
)

const v = "v1"

// 用户信息类接口处理
func MonitoRouterInit (r *gin.Engine){
	monito := r.Group("/monito/user")
	{
		monito.POST("/login", montioControllers.LoginUser)
		monito.POST("/register", montioControllers.RegisterUser)
		monito.POST("/emailSend",montioControllers.EmailSendUser)
		monito.POST("/emailBind",montioControllers.EmailBindUser)
	}
}