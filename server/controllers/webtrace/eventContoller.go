package webtrace

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"monitor/models"
	"net/http"
)

func GetParseEvent (ctx *gin.Context){
	fmt.Println("sdk事件上报处理,get请求")
	var user []models.Userinfo
	opts := &models.Userinfo{Username:"go",Age:2116}
	//models.DB.Where("username = ?", "lxl").First(&user)
	//models.DB.Find(&user) // 查询数据库
	result:= models.DB.Create(&opts)
	fmt.Println("结果",result)
	ctx.JSON(http.StatusOK,user)
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