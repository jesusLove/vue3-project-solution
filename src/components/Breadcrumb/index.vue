<template>
  <el-breadcrumb class="breadcrumb" spearator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :key="item.path"
      >
        <!-- 不可点击 -->
        <span v-if="index === breadcrumbData.length - 1" class="no-redirect">
          {{ item.meta.title }}
        </span>
        <!-- 可点击 -->
        <a v-else class="redirect" @click.prevent="onLinkClick(item)">{{
          item.meta.title
        }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app.js'
const route = useRoute()
// 生成数组数据
const breadcrumbData = ref([])
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  )
}
// 监听路由变化时触发
watch(
  route,
  () => {
    getBreadcrumbData()
  },
  { immediate: true }
)
// 主题修改，动态样式
const appStore = useAppStore()
const linkHoverColor = ref(appStore.cssVar.menuBg)
// 处理点击事件
const router = useRouter()
const onLinkClick = (item) => {
  router.push(item.path)
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .redirect {
    color: #666;
    font-weight: 600;
  }
  .redirect:hover {
    color: v-bind(linkHoverColor);
  }

  :deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
