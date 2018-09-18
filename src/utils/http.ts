import Taro from '@tarojs/taro'

type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE'

// 后端是否支持json格式
const contentType = 'application/x-www-form-urlencoded'
// const contentType = 'application/json'

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
        Taro.hideNavigationBarLoading()
        reject(new Error('网络请求出错'))
      }
    })
  }
}
