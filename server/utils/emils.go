package utils

import (
	"fmt"
	"github.com/jordan-wright/email"
	"log"
	"math/rand"
	"net/smtp"
	"strconv"
	"time"
)

// 生成N 位随机数
func RandMathNum(max int) (str string) {
	for i := 0; i < max; i++ {
		rand.Seed(time.Now().UnixNano())
		str += strconv.Itoa(rand.Intn(9))
	}
	return
}

func SendEmail(emails []string) (result bool, code string) {
	log.SetFlags(log.Lshortfile | log.LstdFlags)
	code = RandMathNum(4)
	context := fmt.Sprintf(`
		<h2>尊敬的用户您好</h2>
		<p>您当前注册的账号，邮箱激活码为：<span style="font-size:24px;font-weight: bold; color:orangered">%s</span></p>
		<h4>有效期5分钟</h4>
 		`, code)
	em := email.NewEmail()
	em.From = "947705624@qq.com" // 发送邮箱
	em.To = emails               // 接收邮箱
	em.Subject = "Monitor监控平台账号激活"
	em.HTML = []byte(context)
	err := em.Send("smtp.qq.com:25", smtp.PlainAuth("", "947705624@qq.com", "pggtpswehzrtbfgc", "smtp.qq.com"))
	if err != nil {
		//log.Fatal(err)
		result = false
		return
	}
	result = true
	return
}
