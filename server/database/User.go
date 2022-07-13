package database

// User [...]
type	User	struct {
	Name	string	`gorm:"column:name" json:"name"`	// 账号
	UserID	string	`gorm:"column:user_id" json:"userId"`	// 用户id
	CTime	int	`gorm:"column:c_time" json:"cTime"`	// 创建时间
	Password	string	`gorm:"column:password" json:"password"`	// 密码
	NickName	string	`gorm:"column:nick_name" json:"nickName"`	// 用户昵称
	Email	string	`gorm:"column:email" json:"email"`	// 邮箱
	Status	int	`gorm:"column:status" json:"status"`	// 是否激活 1激活 0未激活
}

// TableName get sql table name.获取数据库表名
func (m *User) TableName() string {
	return "user"
}