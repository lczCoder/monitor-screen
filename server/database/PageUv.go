package database

// URLPv [...]
type URLPv	struct {
	ID	uint32	`gorm:"primaryKey;column:id" json:"-"`
	Type	string	`gorm:"column:type" json:"type"`	// 统计类型
	URL	string	`gorm:"column:url" json:"url"`	// 浏览页面
	Belong	string	`gorm:"column:belong" json:"belong"`	// 所属项目
	UUID	string	`gorm:"column:uuid" json:"uuid"`	// 设备标识
}

// TableName get sql table name.获取数据库表名
func (m *URLPv) TableName() string {
	return "url_pv"
}