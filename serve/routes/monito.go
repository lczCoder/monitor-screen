package routes

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func MonitoRouter (r *gin.Engine){
	monito := r.Group("/monito")
	{
		monito.POST("/", func(ctx *gin.Context) {
			ctx.JSON(http.StatusOK,gin.H{
				"msg":"ok",
			})
		})
	}
}