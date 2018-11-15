import Taro from '@tarojs/taro'
import qs from 'qs'
import SHA256 from 'crypto-js/hmac-sha256'

import {
  getCurrentPageUrlWithArgs,
  ascFn,
  showToast,
  showLoading
} from '../global/index'

const debounce = (func: any, delay: number) => {
  let inDebounce: number
  return function() {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

type HttpMethods =
  | 'OPTIONS'
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'TRACE'
  | 'CONNECT'

const $showToast = debounce(showToast, 200) as ((msg: string) => void)

// 后端是否支持json格式
const contentType = 'application/x-www-form-urlencoded'
// const contentType = 'application/json'

// 清除缓存 重新加载页面
const reLogin = () => {
  Taro.clearStorageSync()
  // tslint:disable-next-line
  console.log('重新加载页面')
  Taro.reLaunch({
    url: getCurrentPageUrlWithArgs()
  })
  Taro.hideLoading()
}

export default class Http {
  noNeedToken = ['mockFakeApi']

  get(url: string, data: object) {
    return this.commonHttp('GET', url, data)
  }

  post(url: string, data: object) {
    return this.commonHttp('POST', url, data)
  }

  async commonHttp(method: HttpMethods, url: string, data: object) {
    return new Promise<any>(async (resolve, reject) => {
      Taro.showNavigationBarLoading()
      try {
        const res = await Taro.request({
          url,
          method,
          data, // 可以自己定义一些公共的参数，比如token,session
          header: {
            'content-type': contentType
          }
        })
        Taro.hideNavigationBarLoading()
        switch (res.statusCode) {
          case 200:
            return resolve(res.data.response)
          default:
            console.log(res.data.message)
            reject(new Error(res.data.msg))
        }
      } catch (error) {
        $showToast('网络开小差，请稍后再尝试!')
        Taro.hideNavigationBarLoading()
        reject(new Error('网络请求出错'))
      }
    })
  }
}
