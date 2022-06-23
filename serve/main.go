package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()
	r.LoadHTMLGlob("template/*")
	r.StaticFS("/static",http.Dir("./static"))
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK,"index.html",gin.H{
			"msg":"golang",
		})
	})
	r.Run(":80") // 监听并在 0.0.0.0:80 上启动服务
}