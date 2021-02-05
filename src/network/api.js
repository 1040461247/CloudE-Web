import axios from 'axios'
import { Message } from 'element-ui'
import router from '../router'

// 响应拦截器
axios.interceptors.response.use(res => {
  if(res.status && res.status == 200) {
    if(res.data.code == 500 || res.data.code == 401 || res.data.code == 403) {
      Message.error({message: res.data.message})
      return;
    }
    if(res.data.message) {
      Message.success({message: res.data.message})
    }
  }
  return res.data
}, err => {
  if(err.response.code == 504 || err.response.code == 404) {
    Message.error({ message:'服务器被吃了/(ㄒoㄒ)/~~' })
  } else if(err.response.code == 403) {
    Message.error({ message: '权限不足，请联系管理员！' })
  } else if(err.response.code == 401) {
    Message.error({ message: '尚未登陆，请登录' })
    router.replace('/')
  } else {
    if(err.response.data.message) {
      Message.error({ message: err.response.data.message })
    } else {
      Message.error({ message: '未知错误！' })
    }
  }
  return;
})

const BASE_URL = ''

// 传送JSON格式的post请求
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${BASE_URL}${url}`,
    data: params
  })
}
