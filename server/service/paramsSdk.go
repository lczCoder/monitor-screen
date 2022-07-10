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
		if _event == "page" {
			dealUvPv(v)
		}
	}
}

// 处理 performance类型
func dealPerformance(opt models.SdkParams) {
	fmt.Println("资源统计",opt )
	var _info = opt.EventInfo.Info
	var sql = &database.Performance{}
	sql.Type = _info.Type
	sql.URL = opt.EventInfo.URL
	sql.Belong = opt.Appid
	sql.UUID = opt.UUID
	sql.Version = opt.Version
	if "navigation" == _info.Type {
		sql.Frt = _info.Frt
		sql.Rrt = _info.Rrt
		sql.Dpt = _info.Dpt
		sql.Fit = _info.Fit
		sql.Rlt = _info.Rlt
		result := database.DB.Create(&sql)
		fmt.Println("首破加载插入结果", result)
	} else {
		sql.File = _info.File
		sql.Time = _info.TimeCost
		result := database.DB.Create(&sql)
		fmt.Println("资源加载插入结果", result)
	}
}

// 处理网页pv | uv 数据统计
func dealUvPv (opt models.SdkParams){
	fmt.Println("uv统计",opt)
	var _info = opt.EventInfo.Info
	sql:= &database.URLPv{
		Type: _info.Type,
		URL: _info.Url,
		Belong: opt.Appid,
		UUID: opt.UUID,
	}
	result := database.DB.Create(&sql)
	fmt.Println("upv插入结果", result)
}