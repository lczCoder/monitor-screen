package main

import (
	"github.com/gin-gonic/gin"
	"monitor/middleware"
	"monitor/routes"
)

func main() {
	r := gin.Default()
	r.Use(middleware.Cors())
	//r.SetTrustedProxies([]string{"192.168.1.2"}) // 设置代理
	// SDK上报事件处理接口
	routes.SdkRoutersInit(r)
	// 监控平台接口组入口
	routes.MonitoRouterInit(r)

	r.Run(":80") // 监听并在 0.0.0.0:80 上启动服务
}
