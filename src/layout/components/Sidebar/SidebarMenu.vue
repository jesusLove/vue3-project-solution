<template>
  <el-menu
    :uniqueOpened="true"
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-sub-menu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4">
      <el-icon>
        <Setting />
      </el-icon>
      <template #title>导航四</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup></script>

<style lang="scss" scoped></style>
