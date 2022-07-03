package webtrace

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
)

func GetParseEvent (ctx *gin.Context){
	fmt.Println("sdk事件上报处理,get请求")
}

func PostParseEvent (ctx *gin.Context){
	fmt.Println("sdk事件上报处理,post请求")
	var res = ctx.PostForm("opt")
	var rtype []map[string]interface{}
	json.Unmarshal([]byte(res), &rtype)
	for _,v:= range rtype {
		var z = v["deviceInfo"]
		fmt.Println(z.(map[string]interface{})["browser"])
	}
}