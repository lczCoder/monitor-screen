package database

import (
	"fmt"
	"github.com/go-redis/redis"
)

var RDB *redis.Client

func init() {
	RDB = redis.NewClient(&redis.Options{
		Addr:     "127.0.0.1:6379",
		Password: "", // no password set
		DB:       0,  // use default DB
	})
	_,err :=RDB.Ping().Result()
	if err != nil {
		fmt.Println("redis链接错误",err.Error())
	}else{
		fmt.Println("redis数据库连接成功")
	}
}
