<template>
  <el-menu
    :uniqueOpened="true"
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
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
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
const router = useRouter()
const routes = computed(() => {
  const routes = router.getRoutes()
  console.log('routes', routes)
  const filterRoutes = filterRouters(routes)
  console.log('filter', filterRoutes)
  return generateMenus(filterRoutes)
})
console.log('路由', routes.value)
</script>

<style lang="scss" scoped></style>
