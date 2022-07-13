package utils

import "golang.org/x/crypto/bcrypt"

//	MinCost     int = 4  // the minimum allowable cost as passed in to GenerateFromPassword
//	MaxCost     int = 31 // the maximum allowable cost as passed in to GenerateFromPassword
//	DefaultCost int = 10 // the cost that will actually be set if a cost below MinCost is passed into GenerateFromPassword

// 字符加密
func HashSaltStr(str string) (prviteKey string, err error) {
	byteStr := []byte(str)
	hash, err := bcrypt.GenerateFromPassword(byteStr, bcrypt.DefaultCost)
	if err != nil {
		return
	}
	prviteKey = string(hash)
	return
}

// 字符解密是否匹配
func DecryptStr(hashStr, sourceStr string) bool {
	byteHash := []byte(hashStr)
	bytePwd := []byte(sourceStr)
	err := bcrypt.CompareHashAndPassword(byteHash, bytePwd)
	if err != nil {
		return false
	}
	return true
}
