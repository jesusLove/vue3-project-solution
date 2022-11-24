<template>
  <div>Login</div>
  <div @click="handleLogin">登录</div>
</template>

<script setup>
import { useUserStore } from '../../stores/user'
import { useRouter } from 'vue-router'
const store = useUserStore()
const router = useRouter()

const handleLogin = () => {
  store.login({ username: 'admin', password: 1234 }).then(() => {
    console.log('登录成功')
    router.push('/')
  })
}
</script>
