<script lang="ts" setup>
import ContactUsForm from '~/components/contact-us-form.vue'
import ContactMap from '~/components/contact-map.vue'

const pageTitle = 'Contact Us'
useHead({
  title: pageTitle,
})
</script>

<template>
  <section class="news page">
    <PageTopVisuals
      :title="pageTitle"
      image-src="/img/headshots/min-white-coat.jpg"
    ></PageTopVisuals>
    <contact-us-form></contact-us-form>
  </section>
</template>

<style lang="scss" scoped>
.news {
  width: auto;
}
</style>
