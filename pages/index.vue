<script lang="ts" setup>
const pageTitle = 'Home'
useHead({
  title: pageTitle,
})
</script>

<template>
  <section class="home page">
    <AboutDrMin></AboutDrMin>
    <services-carousel></services-carousel>
  </section>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
}
</style>
