<template>
  <div class="sidebar">
    <div class="logo-container">
      <el-avatar
        :size="44"
        shape="square"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
      />
      <h1 class="logo-title" v-if="appStore.sidebarOpened">繁华落尽</h1>
    </div>
    <sidebar-menu />
  </div>
</template>
<script setup>
import SidebarMenu from './SidebarMenu.vue'
import { useAppStore } from '@/stores/app.js'

const appStore = useAppStore()
</script>
<style lang="scss" scoped>
.sidebar {
  .logo-container {
    height: 44px;
    padding: 10px 0 22px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo-title {
      margin-left: 10px;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 16px;
      white-space: nowrap;
    }
  }
}
</style>
