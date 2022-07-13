package utils

import (
	"errors"
	"fmt"
	"github.com/dgrijalva/jwt-go/v4"
	"time"
)

type MyClaims struct {
	Username string `json:"username"`
	jwt.StandardClaims
}

const TokenExpireDuration = time.Hour * 12 //设置token过期时间

var Secret = []byte("monitor") // 私钥

// token令牌生成
func CreatToken(username string) (string,error) {
	claims := MyClaims{
		username, // 自定义字段
		jwt.StandardClaims{
			ExpiresAt: jwt.At(time.Now().Add(time.Minute * 50)), // 过期时间  test 5分支
			Issuer:    "admin",                                 // 签发人
		},
	}
	s := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	// 使用指定的secret签名并获得完整的编码后的字符串token
	token,err := s.SignedString(Secret)
	return token,err
}

// Token令牌解析
func ParseToken (tokenStr string)(*MyClaims,error){
	token, err := jwt.ParseWithClaims(tokenStr, &MyClaims{}, func(token *jwt.Token) (interface{}, error) {
		return Secret, nil
	})
	if err != nil {
		fmt.Println(" token 解析错误:", err)
		return nil, err
	}
	if claims, ok := token.Claims.(*MyClaims); ok && token.Valid {
		return claims, nil
	}
	return nil, errors.New("token 令牌无效")
}
