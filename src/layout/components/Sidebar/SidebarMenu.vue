<template>
  <el-menu
    :collapse="!appStore.sidebarOpened"
    :default-active="activeMenu"
    :background-color="appStore.cssVar.menuBg"
    :text-color="appStore.cssVar.menuText"
    :active-text-color="appStore.cssVar.menuActiveText"
    :unique-opened="true"
    router
  >
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-menu>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import { useAppStore } from '@/stores/app.js'

const appStore = useAppStore()
const router = useRouter()
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
const routes = computed(() => {
  const routes = router.getRoutes()
  const filterRoutes = filterRouters(routes)

  return generateMenus(filterRoutes)
})
</script>

<style lang="scss" scoped></style>
