package database

// Performance [...]
type	Performance	struct {
	//ID	int	`gorm:"primaryKey;column:id" json:"-"`
	Type	string	`gorm:"column:type" json:"type"`	// 资源类型
	File	string	`gorm:"column:file" json:"file"`	// 加载文件
	Time	string	`gorm:"column:time" json:"time"`	// 加载耗时
	URL	string	`gorm:"column:url" json:"url"`	// 加载页面
	Belong	string	`gorm:"column:belong" json:"belong"`	// 所属项目
	UUID	string	`gorm:"column:uuid" json:"uuid"`	// 设备标识
	Version	string	`gorm:"column:version" json:"version"`	// sdk版本
	Dpt	string	`gorm:"column:dpt" json:"dpt"`	// dom解析耗时
	Fit	string	`gorm:"column:fit" json:"fit"`	// 首次交互耗时
	Frt	string	`gorm:"column:frt" json:"frt"`	// 首次渲染耗时
	Rlt	string	`gorm:"column:flt" json:"rlt"`	// 资源加载耗时
	Rrt	string	`gorm:"column:rrt" json:"rrt"`	// 请求响应耗时
}

// TableName get sql table name.获取数据库表名
func (m *Performance) TableName() string {
	return "performance"
}