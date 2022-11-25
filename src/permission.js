import router from './router'
import { useUserStore } from './stores/user'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

// 白名单
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  const store = useUserStore()
  NProgress.start()
  if (store.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 不存在用户信息，需要获取用户信息
      if (!store.hasUserInfo) {
        await store.getUserInfo()
      }
      next()
    }
  } else {
    // 没有 token 可以进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
