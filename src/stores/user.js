import { defineStore } from 'pinia'
import { login, getUserInfo } from '@/api/sys'
import storage, { removeAllItem } from '../utils/storage'
import { TOKEN } from '@/constant/index'
import { setTimeStamp } from '../utils/auth'
import router from '@/router'
export const useUserStore = defineStore('user', {
  state: () => ({ token: storage.getItem(TOKEN), userInfo: {} }),
  getters: {
    hasUserInfo() {
      return JSON.stringify(this.userInfo) !== '{}'
    }
  },
  actions: {
    // 登录
    login(userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username, password })
          .then((data) => {
            this.token = data.token
            storage.setItem(TOKEN, this.token)
            setTimeStamp() // 记录登录时间
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // 获取用户信息
    async getUserInfo() {
      const res = await getUserInfo()
      this.userInfo = res
      return res
    },
    // 退出登录：清除 token , userInfo 等信息
    logout() {
      this.token = ''
      this.userInfo = {}
      removeAllItem()
      router.push('/login')
    }
  }
})
