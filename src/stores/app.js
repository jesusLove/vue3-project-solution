import { defineStore } from 'pinia'
import { LANG } from '@/constant'
import storage from '../utils/storage'
import variables from '@/styles/variables.module.scss'
export const useAppStore = defineStore('app', {
  state: () => ({
    sidebarOpened: true,
    cssVar: variables,
    language: storage.getItem(LANG) || 'zh'
  }),
  actions: {
    triggerSidebarOpened() {
      this.sidebarOpened = !this.sidebarOpened
    },
    setLanguage(lang) {
      storage.setItem(LANG, lang)
      this.language = lang
    }
  }
})
