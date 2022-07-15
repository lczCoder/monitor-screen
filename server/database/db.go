package database

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"log"
	"os"
	"time"
)

var DB *gorm.DB

var ErrDB error

func init() {
	newLogger := logger.New(
		log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer（日志输出的目标，前缀和日志包含的内容——译者注）
		logger.Config{
			SlowThreshold:             time.Second, // 慢 SQL 阈值
			LogLevel:                  logger.Info, // 日志级别
			IgnoreRecordNotFoundError: true,        // 忽略ErrRecordNotFound（记录未找到）错误
			Colorful:                  true,        // 使用用彩色打印
		},
	)
	dsn := "root:123456@tcp(192.168.2.100:3001)/monito?charset=utf8mb4&parseTime=True&loc=Local"
	DB, ErrDB = gorm.Open(mysql.Open(dsn), &gorm.Config{Logger: newLogger})
	if ErrDB != nil {
		fmt.Println("mysql数据库连接失败",ErrDB)
	} else {
		fmt.Println("mysql数据库连接成功")
	}

}
