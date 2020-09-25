import axios from "taro-axios";
import { REQUEST_BASE_URL } from "../../config";
// import util from '@/util/js/utils'
// import router from '@/router'

// 创建一个错误
function errorCreat(msg) {
  const err = new Error(msg);
  errorLog(err);
  throw err;
}

// 记录和显示错误
function errorLog(err) {
  // 打印到控制台
  if (process.env.NODE_ENV === "development") {
    console.log(err);
  }
  // 显示提示
  // Message.error(err.message)
}

// 创建一个 axios 实例
const service = axios.create({
  baseURL: REQUEST_BASE_URL,
  timeout: 5000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些处理
    // if (!(/^https:\/\/|http:\/\//.test(config.url))) {
    //   const token = util.cookies.get('token')
    //   const uuid = util.cookies.get('uuid')
    //   if (token && token !== 'undefined') {
    //     config.headers['Authorization'] = token
    //     config.headers['Name'] = uuid
    //   }
    //   // 来源
    //   const store = util.cookies.get('store')
    //   const channel = util.cookies.get('channel')
    //   if (store && store !== 'null') {
    //     config.headers['Store'] = store
    //   }
    //   if (channel && channel !== 'null') {
    //     config.headers['Channel'] = encodeURIComponent(channel)
    //   }
    // }
    return config;
  },
  (error) => {
    // 发送失败
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const dataAxios = response.data;
    const { code } = dataAxios;
    // 根据 code 进行判断
    if (code === undefined) {
      return dataAxios;
    } else {
      switch (code) {
        case 0:
        case 1:
          return JSON.parse(dataAxios.data);
        case 2:
          // util.cookies.remove('uuid')
          // util.cookies.remove('token')
          // router.push({
          //   path: 'login',
          //   query: {'msg': '1'}
          // })
          return JSON.parse(dataAxios.data);
        default:
          errorCreat(`${dataAxios.msg}: ${response.config.url}`);
          break;
      }
    }
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "请求错误";
          break;
        case 401:
          error.message = "未授权，请登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`;
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 413:
          error.message = "上传图片过大";
          break;
        case 500:
          error.message = "服务器内部错误";
          break;
        case 501:
          error.message = "服务未实现";
          break;
        case 502:
          error.message = "网关错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网关超时";
          break;
        case 505:
          error.message = "HTTP版本不受支持";
          break;
        default:
          break;
      }
    }
    errorLog(error);
    const resp = {};
    if (error.response.status !== undefined) {
      resp.code = error.response.status;
      resp.message = error.message;
    } else {
      resp.message = "系统繁忙，请稍后再试";
    }
    // Promise.reject(error)
    return resp;
  }
);

export default service;
