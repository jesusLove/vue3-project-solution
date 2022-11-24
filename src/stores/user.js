import { defineStore } from 'pinia'
import { login } from '@/api/sys'
import storage from '../utils/storage'
import { TOKEN } from '@/constant/index'

export const useUserStore = defineStore('user', {
  state: () => ({ token: storage.getItem(TOKEN) }),
  getters: {},
  actions: {
    login(userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username, password })
          .then((data) => {
            this.token = data.token
            storage.setItem(TOKEN, this.token)
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
})
