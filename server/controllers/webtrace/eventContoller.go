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
	//var source models.SourceField
	//if err:= ctx.ShouldBind(&source); err==nil{
	//	var data []models.SdkParams
	//	json.Unmarshal([]byte(source.Opt), &data)
	//	//fmt.Println("解析json",data)
	//	for i,v:= range data{
	//		fmt.Println("循环",i,v)
	//		sql:=&database.Performance{
	//			Type: "123",
	//		}
	//		result := database.DB.Create(&sql)
	//		fmt.Println("GET_sql插入结果", result)
	//	}
	//}
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
