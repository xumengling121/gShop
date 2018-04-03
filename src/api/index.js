/*包含n个接口请求函数的模块*/
import ajax from './ajax'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress=(geohash)=>ajax('/api/position/'+geohash)
//2、获取食品分类列表
export const reqFoodList=()=>ajax('/api/index_category')
// 3、根据经纬度获取商铺列表
export const reqShopList=(longitude, latitude)=>ajax('/api/shops',{latitude,longitude})
//4.获取一次性验证码
export const reqCaptcha=()=>ajax('/api/captcha')
//5.用户名密码登陆
export const loginPwd=({name,pwd,captcha})=>ajax('/api/login_pwd',{name,pwd,captcha},'POST')
//6、发送短信验证码
export const sendCode=(phone)=>ajax('/api/sendcode',{phone})
// 7、手机号验证码登陆
export const loginSms=({phone,code})=>ajax('/api/login_sms',{phone,code},'POST')
//8、根据会话获取用户信息
export const reqUserInfo = () => ajax('/api/userinfo')
