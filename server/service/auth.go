package service

import (
	"fmt"
	"monitor/database"
	"monitor/models"
	"monitor/utils"
)

// 用户相关接口处理

// 登录
func UserLoginService(res models.UserLoginStruct) {
	fmt.Println("登录数据", res)
}

// 注册
func UserRegistService(res models.UserRegisterStruct) (_response models.ResponseData) {
	fmt.Println("注册数据", res, res.Email=="",res.PassWord=="")
	var user database.User // 用户数据表模型
	result := database.DB.Where(&database.User{Name: res.UserName}).Or(&database.User{Email: res.Email}).Find(&user).Limit(1)
	// 没有用户名和邮箱重复 满足注册条件
	if result.RowsAffected == 0 {
		var time = utils.GetNowUnixMilliTime()
		var uuid = utils.CreateUserId()
		// userid查重
		var status int64 = 1
		for {
			if status == 0 {
				break
			}
			r := database.DB.Where(&database.User{UserID: uuid}).Find(&user)
			status = r.RowsAffected
		}
		sql := &database.User{
			Name:     res.UserName,
			Password: res.PassWord,
			NickName: res.NickName,
			Email:    res.Email,
			Ctime:    time,
			UserID:   uuid,
		}
		result := database.DB.Create(&sql)
		if result.Error != nil {
			_response = models.ResponseData{
				StatusCode: 102,
				Msg:        models.ErrorCodeMsg[102],
			}
		} else {
			_response = models.ResponseData{
				StatusCode: 0,
				Msg:        "注册成功",
				Data: map[string]interface{}{
					"token":    "qewqeq",
					"username": res.UserName,
					"nickname": res.NickName,
				},
			}
		}
	} else {
		fmt.Println("用户名邮箱重复",user,res)
		if res.UserName == user.Name { // 用户名重复
			_response = models.ResponseData{
				StatusCode: 103,
				Msg: models.ErrorCodeMsg[103],
			}
		}else{ // 邮箱重复
			_response = models.ResponseData{
				StatusCode: 104,
				Msg: models.ErrorCodeMsg[104],
			}
		}
	}
	return
}
