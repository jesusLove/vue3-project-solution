<template>
  <el-button @click="handleLogout">退出登录</el-button>
</template>
<script setup>
import { useUserStore } from '../stores/user'

const store = useUserStore()
const handleLogout = () => {
  store.logout()
}
</script>
