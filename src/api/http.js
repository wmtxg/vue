import axios from 'axios'

// 创建axios的一个实例
var instance = axios.create({
  // baseURL: process.env.API,
  timeout: 10 * 1000
  // headers: {
  //   'content-Type': 'text/plain'
  // }
})

// ------------------- 一、请求拦截器 忽略
instance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  // 对请求错误做些什么

  return Promise.reject(error)
})

// ----------------- 二、响应拦截器 忽略
instance.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default function (method, url, data = null) {
  method = method.toLowerCase()
  if (method === 'post') {
    return instance.post(url, data)
  } else if (method === 'get') {
    return instance.get(url, { params: data })
  } else if (method === 'delete') {
    return instance.delete(url, { params: data })
  } else if (method === 'put') {
    return instance.put(url, data)
  } else {
    console.error('未知的method' + method)
    return false
  }
}
