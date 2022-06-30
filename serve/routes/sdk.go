package routes

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

func SdkRouters (r *gin.Engine){
	sdk := r.Group("/sdk")
	{
		sdk.GET("/event", func(ctx *gin.Context) {fmt.Println("get请求")})
		sdk.POST("/event",func (ctx *gin.Context){fmt.Println("post请求")})
	}
}