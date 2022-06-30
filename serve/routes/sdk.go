package routes

import (
	"github.com/gin-gonic/gin"
	"monitor/controllers/webtrace"
)

func SdkRoutersInit (r *gin.Engine){
	sdk := r.Group("/sdk")
	{
		sdk.GET("/event", webtrace.GetParseEvent)
		sdk.POST("/event",webtrace.PostParseEvent)
	}
}