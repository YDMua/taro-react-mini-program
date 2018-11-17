import Taro from '@tarojs/taro-h5';
import Nerv from "nervjs";
import { getCurrentPageUrlWithArgs, showToast } from '../global/index';
const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};
const $showToast = debounce(showToast, 200);
// 后端是否支持json格式
const contentType = 'application/x-www-form-urlencoded';
// const contentType = 'application/json'
// 清除缓存 重新加载页面
const reLogin = () => {
  Taro.clearStorageSync();
  // tslint:disable-next-line
  console.log('重新加载页面');
  Taro.reLaunch({
    url: getCurrentPageUrlWithArgs()
  });
  Taro.hideLoading();
};
export default class Http {
  constructor() {
    this.noNeedToken = ['mockFakeApi'];
  }
  get(url, data) {
    return this.commonHttp('GET', url, data);
  }
  post(url, data) {
    return this.commonHttp('POST', url, data);
  }
  async commonHttp(method, url, data) {
    return new Promise(async (resolve, reject) => {
      Taro.showNavigationBarLoading();
      try {
        const res = await Taro.request({
          url,
          method,
          data,
          header: {
            'content-type': contentType
          }
        });
        Taro.hideNavigationBarLoading();
        switch (res.statusCode) {
          case 200:
            return resolve(res.data.response);
          default:
            console.log(res.data.message);
            reject(new Error(res.data.msg));
        }
      } catch (error) {
        $showToast('网络开小差，请稍后再尝试!');
        Taro.hideNavigationBarLoading();
        reject(new Error('网络请求出错'));
      }
    });
  }
}