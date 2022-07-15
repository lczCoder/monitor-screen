package utils

import "monitor/database"

// sql 方法封装

// sql结构体 -> 创建表
func CreateSql (){
	m:=database.DB.Migrator()
	m.CreateTable(&database.ErrInfo{})
}


