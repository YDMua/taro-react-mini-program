import Taro from '@tarojs/taro'
import { login } from './api'

// 获取微信登录凭证
export const wxLogin = async () => {
  try {
    const res = await Taro.login()
    return res.code
  } catch (error) {
    console.log('微信获取临时凭着失败')
  }
}

export const userLogin = async () => {
  try {
    await Taro.checkSession()
    if (!Taro.getStorageSync('token')) {
      throw new Error('本地没有缓存token')
    }
  } catch (error) {
    const code = await wxLogin()
    const loginRes: any = await login({
      code
      // ...(其他参数)
    })
    console.log('用户数据', loginRes)
  }
}
