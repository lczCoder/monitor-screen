package utils

import (
	"github.com/jordan-wright/email"
	"log"
	"net/smtp"
)

func SendEmail()(result string) {
	log.SetFlags(log.Lshortfile | log.LstdFlags)
	em := email.NewEmail()
	em.From = "947705624@qq.com"         // 发送邮箱
	em.To = []string{"lczcoder@163.com"} // 接收邮箱
	em.Subject = "golang test email"
	//em.Text = []byte("hello world， 咱们用 golang 发个邮件！！")
	em.HTML = []byte(`
		<h3>尊敬的用户您好</h3>
		<p>您当前注册的账号，邮箱验证码为：000000</p>
		<p>有效期5分钟</p>
 		`)
	err := em.Send("smtp.qq.com:25", smtp.PlainAuth("", "947705624@qq.com", "pggtpswehzrtbfgc", "smtp.qq.com"))
	if err != nil {
		log.Fatal(err)
		result = "发送失败"
	}
	result = "发送成功"
	log.Println("邮件发送成功！！！")
	return
}

//pggt pswe hzrt bfgc
