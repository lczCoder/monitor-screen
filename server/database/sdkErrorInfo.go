package database

// error_info sql表结构
type ErrInfo struct {
	ID      int    `gorm:"primaryKey;column:id" json:"-"`
	Version string `gorm:"column:version" json:"version"`  // sdk版本,
	UUID    string `gorm:"column:uuid" json:"uuid"`        // 设备标识
	Belong  string `gorm:"column:belong" json:"belong"`    // 所属项目
	ErrType string `gorm:"column:err_type" json:"errType"` // 错误类型
	ErrTime string `gorm:"column:err_time" json:"errTime"` // 错误发生时间
	ErrMsg  string `gorm:"column:err_msg" json:"errMsg"`   // 错误信息
	ErrFile string `gorm:"column:err_file" json:"errFile"` // 错误文件
	ErrLine string    `gorm:"column:err_line" json:"errLine"` // 错误行数
	ErrCol  string    `gorm:"column:err_col" json:"errCol"`   // 错误列数,
	ErrObj  string `gorm:"column:err_obj" json:"errObj"`   // 错误对象
	ErrURL  string `gorm:"column:err_url" json:"errUrl"`   // 错误url地址
}

func (n ErrInfo) TableName ()string {
	return "err_info"
}