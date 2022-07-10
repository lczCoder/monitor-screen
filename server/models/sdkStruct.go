package models

// sdk上报数据结构体定义
type SdkParams struct {
	Appid      string `json:"appid"`
	DeviceInfo struct {
		ScreenWidth  int    `json:"screenWidth"`
		ScreenHeight int    `json:"screenHeight"`
		Browser      string `json:"browser"`
		Os           string `json:"os"`
	} `json:"deviceInfo"`
	UUID      string `json:"uuid"`
	Version   string `json:"version"`
	EventInfo struct {
		EventType string `json:"eventType"`
		URL       string `json:"url"`
		Time      string  `json:"time"`
		Info      struct {
			Type     string `json:"type"`
			File     string `json:"file"`
			TimeCost string `json:"time_cost"`
			Frt string `json:"frt"`
			Rrt string `json:"rrt"`
			Dpt string `json:"dpt"`
			Rlt string `json:"rlt"`
			Fit string `json:"fit"`
		} `json:"info"`
	} `json:"eventInfo"`
}

// 字段接收结构体
type SourceField struct {
	Opt string `form:"opt" json:"opt"`
}


