package connect

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)
var DB *gorm.DB

var err error

func init(){
	dsn:="root:lxl520..@tcp(127.0.0.1:3306)/monito?charset=utf8mb4&parseTime=True&loc=Local"
	DB,err= gorm.Open(mysql.Open(dsn),&gorm.Config{})
	if err != nil{
		fmt.Println(err)
	}else{
		fmt.Println("mysql数据库连接成功")
	}
}