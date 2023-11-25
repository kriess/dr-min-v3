<script lang="ts" setup>
import ContactUsForm from '~/components/contact-us-form.vue'

const pageTitle = 'Home'
useHead({
  titleTemplate: 'Dr Caroline Min',
  meta: [
    {
      name: 'description',
      content:
        'A board certified plastic surgeon with over 20 years of experience serving Pasadena, Los Angeles, Beverly Hills, and the surrounding areas.',
    },
  ],
})
</script>

<template>
  <section class="home page">
    <AboutDrMin></AboutDrMin>
    <ServicesCarousel></ServicesCarousel>
    <HomeTestimonials></HomeTestimonials>
    <contact-us-form :show-header="true"></contact-us-form>
  </section>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
}
</style>
