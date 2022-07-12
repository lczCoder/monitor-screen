package utils

import (
	"github.com/go-basic/uuid"
	"strconv"
	"time"
)

// 时间格式处理

// 获取当前时间戳 13位 毫秒
func GetNowUnixMilliTime() int {
	t := time.Now().Unix()
	strInt64 := strconv.FormatInt(t, 10)
	time, _ := strconv.Atoi(strInt64)
	return time
}

// 用户id 生成
func CreateUserId() (id string) {
	id = uuid.New()
	return
}
