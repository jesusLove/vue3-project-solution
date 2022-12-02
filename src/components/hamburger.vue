<template>
  <div class="hamburger-container" @click="toggleClick">
    <el-icon size="20">
      <component :is="icon"></component>
    </el-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '@/stores/app.js'
const appStore = useAppStore()
const icon = computed(() => {
  return appStore.sidebarOpened ? 'Expand' : 'Fold'
})
const toggleClick = () => {
  appStore.triggerSidebarOpened()
}
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding: 16px;
  width: 20px;
  height: 20px;
}
</style>
