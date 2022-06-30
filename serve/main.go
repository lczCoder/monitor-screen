package main

import (
	"github.com/gin-gonic/gin"
	"monitor/routes"
)

func main() {
	r := gin.Default()
	// SDK上报事件处理接口
	routes.SdkRouters(r)
	// 监控平台接口组入口
	routes.MonitoRouter(r)
	r.Run(":80") // 监听并在 0.0.0.0:80 上启动服务
}