package models


type User struct {
	Username string
	Age int
}

// 修改表名 userinfos -> userinfo
func (User) TableName() string{
	return "user"
}