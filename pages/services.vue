<script lang="ts" setup>
const pageTitle = 'Services'
useHead({
  title: pageTitle,
})
</script>

<template>
  <section class="services page">
    <PageTopVisuals
      :title="pageTitle"
      image-src="/img/headshots/dr-min-suit.jpg"
    ></PageTopVisuals>
  </section>
</template>

<style lang="scss" scoped>
.services {
  width: auto;
}
</style>
