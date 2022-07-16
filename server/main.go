package main

import (
	"github.com/gin-gonic/gin"
	"monitor/middleware"
	"monitor/routes"
)



func main() {
	r := gin.Default()

	r.Use(middleware.Cors()) // 跨域处理

	routes.SdkRoutersInit(r)// SDK上报事件处理接口

	routes.MonitoRouterInit(r) // 监控平台接口组入口

	r.SetTrustedProxies([]string{"127.0.0.1"}) // 设置代理
	r.Run(":80") // 监听并在 0.0.0.0:80 上启动服务
}




