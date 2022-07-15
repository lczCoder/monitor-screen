package utils

import (
	"fmt"
	"log"
	"reflect"
)

// 结构体转 map 对象
func StructToMap(obj interface{}) map[string]interface{} {
	t := reflect.TypeOf(obj)
	v := reflect.ValueOf(obj)
	var data = make(map[string]interface{})
	for i := 0; i < t.NumField(); i++ {
		data[t.Field(i).Name] = v.Field(i).Interface()
	}
	return data
}

// 校验struct 是否存在空字段
func CheckNilStuct(obj interface{}) bool {
	var status = true
	res := StructToMap(obj)
	log.Println("ressss",res)
	for _, v := range res {
		fmt.Printf("循环注册,%T,%#v",v,v)
		if v == ""  {
			status = false
		}
	}
	return status
}
