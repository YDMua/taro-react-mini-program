import Taro from '@tarojs/taro-h5';
import Nerv from "nervjs";
export const showToast = msg => {
  Taro.showToast({
    title: msg,
    icon: 'none'
  });
};
export const showLoading = msg => {
  Taro.showLoading({
    title: msg,
    mask: true
  });
};
// 字典排序
export const ascFn = obj => {
  const tmp = {};
  for (const key of Object.keys(obj).sort()) {
    tmp[key] = obj[key];
  }
  return tmp;
};
/* 获取当前页带参数的url */
export const getCurrentPageUrlWithArgs = () => {
  const pages = Taro.getCurrentPages(); // 获取加载的页面
  const currentPage = pages[pages.length - 1]; // 获取当前页面的对象
  const url = currentPage.route.split('/')[1]; // 当前页面url
  const options = currentPage.options; // 如果要获取url中所带的参数可以查看options
  // 拼接url的参数
  let urlWithArgs = url + '?';
  Object.keys(options).forEach(v => {
    urlWithArgs += `${v}=${options[v]}&`;
  });
  urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1);
  return urlWithArgs;
};