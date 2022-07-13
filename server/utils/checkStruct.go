package utils

import (
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
	for _, v := range res {
		if v == "" {
			status = false
		}
	}
	return status
}
