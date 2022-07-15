package database

import (
	"context"
	_ "context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var RDB *redis.Client
var RdbCtx = context.Background()

func init() {
	RDB = redis.NewClient(&redis.Options{
		//Addr:	  "127.0.0.1:6001",
		Addr:	  "192.168.2.100:6001",
		Password: "", // no password set
		DB:		  0,  // use default DB
	})
	_, err := RDB.Ping(RdbCtx).Result()
	if err != nil {
		fmt.Printf("连接redis出错，错误信息：%v", err)
	}else{
		fmt.Println("redis数据库连接成功")
	}
}
