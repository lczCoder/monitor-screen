package service

import (
	_ "context"
	"log"
	"monitor/database"
	"monitor/models"
	"monitor/utils"
	"time"
)

// 用户相关接口处理

// 登录
func UserLoginService(res models.UserLoginStruct)  models.ResponseData {
	log.Println("登录数据", res)
	var user = database.User{}
	result := database.DB.Where(&database.User{Name: res.UserName}).Find(&user)
	if result.RowsAffected == 0 {
		return models.ResponseData{
			StatusCode: 114,
			Msg:        models.ErrorCodeMsg[114],
		}
	}
	log.Println("账号匹配正确",user.Password)
	if check:=utils.DecryptStr(user.Password,res.Password);check{
		token,_:=utils.CreatToken(user.Name)
		return models.ResponseData{
			StatusCode: 0,
			Msg: "登录成功",
			Data: map[string]interface{}{
				"token":token,
			},
		}
	}
	return models.ResponseData{
		StatusCode: 115,
		Msg: models.ErrorCodeMsg[115],
	}
}

// 注册
func UserRegistService(res models.UserRegisterStruct) (_response models.ResponseData) {
	log.Println("注册数据")
	var user database.User // 用户数据表模型
	result := database.DB.Where(&database.User{Name: res.UserName}).Or(&database.User{Email: res.Email}).Find(&user).Limit(1)
	// 没有用户名和邮箱重复 满足注册条件
	if result.RowsAffected == 0 {
		var time = utils.GetNowUnixMilliTime() // 注册时间
		var uuid = utils.CreateUserId()        // 用户id生成
		// userid查重 保障userid的唯一性
		var status int64 = 1
		for {
			if status == 0 {
				break
			}
			r := database.DB.Where(&database.User{UserID: uuid}).Find(&user)
			status = r.RowsAffected
		}
		prvitePwd, _ := utils.HashSaltStr(res.PassWord)
		sql := &database.User{
			Name:     res.UserName,
			Password: prvitePwd,
			NickName: res.NickName,
			Email:    res.Email,
			CTime:    time,
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
		log.Println("用户名邮箱重复", user, res)
		if res.UserName == user.Name { // 用户名重复
			_response = models.ResponseData{
				StatusCode: 103,
				Msg:        models.ErrorCodeMsg[103],
			}
		} else { // 邮箱重复
			_response = models.ResponseData{
				StatusCode: 104,
				Msg:        models.ErrorCodeMsg[104],
			}
		}
	}
	return
}

// 发送邮箱激活码
func EmailSendService(res models.UserEmailStruct) (_response models.ResponseData) {
	var user = database.User{}
	log.Println("邮箱发送接收数据", res.Email)
	r := database.DB.Where(&database.User{Email: res.Email}).Find(&user)
	len := r.RowsAffected
	error := r.Error
	// sql 查询错误
	if error != nil {
		_response = models.ResponseData{
			StatusCode: 102,
			Msg:        models.ErrorCodeMsg[102],
		}
		return
	}
	// 判断邮箱号是否存在
	if len == 0 {
		_response = models.ResponseData{
			StatusCode: 108,
			Msg:        models.ErrorCodeMsg[108],
		}
		return
	}
	// 判断邮箱是否已经被激活
	if user.Status != 0 {
		_response = models.ResponseData{
			StatusCode: 110,
			Msg:        models.ErrorCodeMsg[110],
		}
		return
	}
	emails := []string{res.Email}
	// 邮箱验证码发送成功 存入redis
	if r, code := utils.SendEmail(emails); r {
		log.Println("发送成功", res.Email, code)
		// redis 存入邮箱和验证码 5分钟有效期
		v, err := database.RDB.Set(database.RdbCtx, res.Email, code, time.Minute*5).Result()
		if err != nil {
			panic(err)
		}
		// 邮箱激活码存入redis 成功
		if v == "OK" || v == "ok" {
			_response = models.ResponseData{
				StatusCode: 0,
				Msg:        "验证码发送成功",
			}
		} else { // 失败
			_response = models.ResponseData{
				StatusCode: 102,
				Msg:        models.ErrorCodeMsg[102],
			}
		}
	} else { // 发送失败
		log.Println("发送失败")
		_response = models.ResponseData{
			StatusCode: 109,
			Msg:        models.ErrorCodeMsg[109],
		}
	}
	return
}

// 激活码校验
func EmailBindService(res models.UserBindEmailStruct) (_response models.ResponseData) {
	log.Println("激活码接收", res.Email, res.Code)
	n, err := database.RDB.Exists(database.RdbCtx, res.Email).Result()
	if err != nil {
		panic(err)
	}
	// 缓存到期已被清除了
	if n == 0 {
		_response = models.ResponseData{
			StatusCode: 111,
			Msg:        models.ErrorCodeMsg[111],
		}
		return
	}
	// 获取激活码校验是否匹配
	v, error := database.RDB.Get(database.RdbCtx, res.Email).Result()
	if error != nil {
		panic(err)
	}
	// 匹配成功
	if v == res.Code {
		//	 修改账号状态，删除redis key -> 激活成功
		_, err := database.RDB.Del(database.RdbCtx, res.Email).Result()
		if err != nil {
			panic(err)
		}
		updataErr := database.DB.Model(&database.User{}).Where("email = ?", "lczcoder@163.com").UpdateColumn("status", 1).Error
		if updataErr != nil {
			//	激活失败
			_response = models.ResponseData{
				StatusCode: 113,
				Msg:        models.ErrorCodeMsg[113],
			}
		} else {
			// 激活成功
			_response = models.ResponseData{
				StatusCode: 0,
				Msg:        "账号激活成功!",
			}
		}
		return
	} else {
		_response = models.ResponseData{
			StatusCode: 112,
			Msg:        models.ErrorCodeMsg[112],
		}
	}
	return
}
