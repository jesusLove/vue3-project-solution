<template>
  <div class="navbar">
    <hamburger class="hamburger-container" />
  </div>
</template>
<script setup>
import Hamburger from '@/components/hamburger.vue'
</script>
<style lang="scss" scoped>
.navbar {
  .hamburger-container {
    // height: 46px;
    cursor: pointer;
    transition: background 0.5s;
    &:hover {
      background: rgba($color: #000000, $alpha: 0.1);
    }
  }
}
</style>
