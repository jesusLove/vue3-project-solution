<template>
  <div class="navbar">
    <hamburger class="hamburger-container" />
    <breadcrumb class="bradcrumb-container" />
  </div>
</template>
<script setup>
import Hamburger from '@/components/hamburger.vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .hamburger-container {
    // height: 46px;
    float: left;
    cursor: pointer;
    transition: background 0.5s;
    &:hover {
      background: rgba($color: #000000, $alpha: 0.1);
    }
  }
  .breadcrumb-container {
    float: left;
  }
}
</style>
