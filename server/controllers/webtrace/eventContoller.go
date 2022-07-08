package webtrace

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"monitor/models"
	"monitor/service"
	"net/http"
)

// 字段接收结构体
type SourceField struct {
	Opt string `form:"opt"`
}

func GetParseEvent(ctx *gin.Context) {
	fmt.Println("sdk事件上报处理,get请求")
}

func PostParseEvent(ctx *gin.Context) {
	fmt.Println("sdk事件上报处理,post请求")
	var source models.SourceField

	if err := ctx.ShouldBind(&source); err == nil {
		service.ParsePostForm(source)
	} else {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
}
