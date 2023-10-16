<script lang="ts" setup>
import ContactUsForm from '~/components/contact-us-form.vue'

const pageTitle = 'Home'
useHead({
  title: pageTitle,
})
</script>

<template>
  <section class="home page">
    <AboutDrMin></AboutDrMin>
    <ServicesCarousel></ServicesCarousel>
    <HomeTestimonials></HomeTestimonials>
    <contact-us-form></contact-us-form>
  </section>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
}
</style>
