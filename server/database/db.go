package database

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)
var DB *gorm.DB

var ErrDB error

func init(){
	dsn:="root:lxl520..@tcp(127.0.0.1:3306)/monito?charset=utf8mb4&parseTime=True&loc=Local"
	DB, ErrDB = gorm.Open(mysql.Open(dsn),&gorm.Config{})
	if ErrDB != nil{
		fmt.Println(ErrDB)
	}else{
		fmt.Println("mysql数据库连接成功")
	}
}