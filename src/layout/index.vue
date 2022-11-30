<template>
  <div class="app-wrapper">
    <!-- 左侧 menu -->
    <sidebar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    />
    <div class="main-container">
      <div class="fixed-header">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import variables from '@/styles/variables.module.scss'
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@import '@/styles/variables.module.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: antiquewhite;
}
.main-container {
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    height: 50px;
    width: calc(100% - #{$sideBarWidth});
  }
}
</style>
