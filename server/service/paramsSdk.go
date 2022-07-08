package service

import (
	"encoding/json"
	"fmt"
	"monitor/database"
	_ "monitor/database"
	"monitor/models"
)

func ParsePostForm (params models.SourceField){
	// 业务代码编写
	var data []models.SdkParams
	json.Unmarshal([]byte(params.Opt), &data)
	fmt.Println("数据解析",data)
	fmt.Printf("%T",data)
	for i,v := range data {
		sql := &database.ErrInfo{
			ID:i+1,
			Version:v.Version,
			UUID:v.UUID,
			Belong:"test",
			ErrType:v.EventInfo.EventType,
			ErrTime:v.EventInfo.Time,
			ErrMsg:v.EventInfo.Info.File,
			ErrFile:v.EventInfo.Info.File,
			ErrLine:v.EventInfo.Info.TimeCost,
			ErrCol:v.EventInfo.Info.TimeCost,
			ErrObj:v.EventInfo.Info.Type,
			ErrURL:v.Appid,
		}
		result:= database.DB.Create(&sql)
		fmt.Println("sql插入结果",result)
	}
	//models.DB.Where("username = ?", "lxl").First(&user)
	//models.DB.Find(&user) // 查询数据库
	//result:= models.DB.Create(&opts)
}