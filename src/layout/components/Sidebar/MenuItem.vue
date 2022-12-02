<template>
  <el-icon>
    <component :is="icon"></component>
    <span>{{ title }}</span>
  </el-icon>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>
