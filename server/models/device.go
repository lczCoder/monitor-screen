package models

type DeviceInfo struct {
	Os string
	Browser string
	ScreenHeight float64
	ScreenWidth float64
	Uuid string
}

// 修改表名 userinfos -> userinfo
func (DeviceInfo) TableName() string{
	return "device_info"
}