package webtrace

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"monitor/connect"
	"monitor/models"
	"strconv"
)

func GetParseEvent (ctx *gin.Context){
	fmt.Println("sdk事件上报处理,get请求")
}

type Device struct {
	Os string `json:"os"`
	Browser string `json:"browser"`
	ScreenHeight float64 `json:"screenHeight"`
	ScreenWidth float64 `json:"screenWidth"`
}

func PostParseEvent (ctx *gin.Context){
	fmt.Println("sdk事件上报处理,post请求")
	var res = ctx.PostForm("opt")
	var rtype []map[string]interface{}
	json.Unmarshal([]byte(res), &rtype)
	for idx,v:= range rtype {
		var device = models.DeviceInfo{
			Os:"mac",
			Browser:"chrome",
			ScreenHeight:1080,
			ScreenWidth:760,
			Uuid: strconv.Itoa(idx),
		}
		var z = v["deviceInfo"]
		result := connect.DB.Create(&device) // 通过数据的指针来创建
		fmt.Println("mysql结果",result)
		fmt.Println("循环",z,device)
	}
}