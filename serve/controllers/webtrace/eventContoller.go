package webtrace

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

func GetParseEvent (ctx *gin.Context){
	fmt.Println("sdk事件上报处理,get请求")
}

func PostParseEvent (ctx *gin.Context){
	fmt.Println("sdk事件上报处理,post请求")
}