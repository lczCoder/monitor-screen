package models


type Userinfo struct {
	Username string
	Age int
}

// 修改表名 userinfos -> userinfo
func (Userinfo) TableName() string{
	return "userinfo"
}