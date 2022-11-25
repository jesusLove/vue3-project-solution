import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user.js'
import { isCheckTimeout } from './auth'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const store = useUserStore()
    if (store.token) {
      if (isCheckTimeout()) {
        store.logout()
        return Promise.reject(new Error('token 失效'))
      }
      config.headers.Authorization = `Bearer ${store.token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 根据 success 判断是否成功
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      // 业务错误
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (err) => {
    const store = useUserStore()
    // ! 状态码：401 token 在服务器超时。
    if (err.response && err.response.data && err.response.data.code === 401) {
      store.logout()
    }
    // TODO：Token 超时处理
    ElMessage.error(err.message)
    return Promise.reject(err)
  }
)

export default service
