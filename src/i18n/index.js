import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    msg: {
      test: 'hello'
    }
  },
  zh: {
    msg: {
      test: '你好'
    }
  }
}
const locale = 'en'

const i18n = createI18n({
  // 使用 Composition API 模式，需要设置为 false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale,
  messages
})
export default i18n
