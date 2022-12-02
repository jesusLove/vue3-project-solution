import { defineStore } from 'pinia'
import variables from '@/styles/variables.module.scss'
export const useAppStore = defineStore('app', {
  state: () => ({
    sidebarOpened: true,
    cssVar: variables
  }),
  actions: {
    triggerSidebarOpened() {
      this.sidebarOpened = !this.sidebarOpened
    }
  }
})
