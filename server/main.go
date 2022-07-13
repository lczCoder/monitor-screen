package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"monitor/middleware"
	"monitor/routes"
	"monitor/utils"
)



func main() {
	r := gin.Default()
	r.Use(middleware.Cors())
	// SDK上报事件处理接口
	routes.SdkRoutersInit(r)
	// 监控平台接口组入口
	routes.MonitoRouterInit(r)
	r.Use(middleware.JwtAuth())
	//r.SetTrustedProxies([]string{"192.168.1.2"}) // 设置代理
	x,_:=utils.HashSaltStr("lcz")
	fmt.Println("dsadasdsa",x)
	reuslt:=utils.DecryptStr(x,"lcz")
	fmt.Println("是否匹配解密",reuslt)
	r.Run(":80") // 监听并在 0.0.0.0:80 上启动服务
}


