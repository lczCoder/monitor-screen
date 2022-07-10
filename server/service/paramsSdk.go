package service

import (
	"encoding/json"
	"fmt"
	"monitor/database"
	_ "monitor/database"
	"monitor/models"
)

// 资源类型
type ResourceType struct {
	Type     string `json:"type"`
	File     string `json:"file"`
	TimeCost string `json:"time_cost"`
}

// 首屏加载
type NavigationType struct {
}

// 解析sdk post参数
func ParsePostForm(params models.SourceField) {
	// 业务代码编写
	var data []models.SdkParams
	json.Unmarshal([]byte(params.Opt), &data)
	fmt.Println("数据解析", data)
	for _, v := range data {
		var _event = v.EventInfo.EventType
		fmt.Println("v", _event)
		if _event == "performance" {
			dealPerformance(v)
		}
	}
}

// 处理 performance类型

func dealPerformance(opt models.SdkParams) {
	fmt.Println("opt", opt.EventInfo.Info.Type)
	if "navigation" == opt.EventInfo.Info.Type {
		sql := &database.Performance{
			Type:    opt.EventInfo.Info.Type,
			Frt:     opt.EventInfo.Info.Frt,
			Rrt:     opt.EventInfo.Info.Rrt,
			Dpt:     opt.EventInfo.Info.Dpt,
			Fit:     opt.EventInfo.Info.Fit,
			Rlt:     opt.EventInfo.Info.Rlt,
			URL:     opt.EventInfo.URL,
			Belong:  opt.Appid,
			UUID:    opt.UUID,
			Version: opt.Version,
		}
		result := database.DB.Create(&sql)
		fmt.Println("GET_sql插入结果", result)
	} else {
		sql := &database.Performance{
			Type:    opt.EventInfo.Info.Type,
			File:    opt.EventInfo.Info.File,
			Time:    opt.EventInfo.Info.TimeCost,
			URL:     opt.EventInfo.URL,
			Belong:  opt.Appid,
			UUID:    opt.UUID,
			Version: opt.Version,
		}
		result := database.DB.Create(&sql)
		fmt.Println("GET_sql插入结果2", result)
	}
}
