/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */

import axios from 'axios';
// import router from '../router';
// import { Toast } from 'vant';
import Toast from 'vant/lib/toast';
import 'vant/lib/toast/style';


/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {
  Toast({
    message: msg,
    duration: 1000,
    forbidClick: true
  });
}

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  // router.replace({
  //     path: '/site/login',
  //     query: {
  //         redirect: router.currentRoute.fullPath
  //     }
  // });
  location.href = "/site/login?next=" + encodeURIComponent(location.href);
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin();
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      tip('登录过期，请重新登录');
      // localStorage.removeItem('token');
      // store.commit('loginSuccess', null);
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
    // 404请求不存在
    case 404:
      // tip('请求的资源不存在');
      break;
    default:
  }
}

// 创建axios实例
var instance = axios.create({
  timeout: 1000 * 10
});
instance.defaults.headers.common = {
  "X-Requested-With": "XMLHttpRequest",
};
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => {

    if(res.status === 200) {
      if(res.data.code != undefined) {
        // if(_hmt) {
        //   _hmt.push(['_trackEvent', 'RequestError', 'business', '【url】'+JSON.stringify(res.config.url)+'【params】'+JSON.stringify(res.config.method==='get'?res.config.params:res.config.data)]);
        // }
        return Promise.reject(res);
      } else {
        return Promise.resolve(res);
      }
    } else {
      // if(_hmt) {
      //   _hmt.push(['_trackEvent', 'RequestError', 'http', res]);
      // }
      return Promise.reject(res);
    }

    // res.status === 200 ? Promise.resolve(res) : Promise.reject(res);
  },
  // 请求失败
  error => {
    const {
      response
    } = error;
    if (response) {
      // if(_hmt) {
      //   _hmt.push(['_trackEvent', 'RequestError', 'http-reject', '【url】'+JSON.stringify(response.config.url)+'【params】'+JSON.stringify(response.config.method==='get'?response.config.params:response.config.data)]);
      // }
      // 请求已发出，但是不在2xx的范围
      //errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      // store.commit('changeNetwork', false);
    }
  });

export default instance;