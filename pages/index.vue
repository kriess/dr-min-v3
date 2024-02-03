<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}/`
const pageTitle = 'Home'

useHead({
  titleTemplate: 'Pasadena Plastic Surgeon, Dr. Caroline Min',
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'Dr. Caroline Min is a female board certified plastic surgeon with over 16 years of experience serving Pasadena, Los Angeles, Beverly Hills, and the surrounding areas.',
    },
  ],
})
</script>

<template>
  <section class="home page">
    <HomeSplash></HomeSplash>
    <HomeIntro></HomeIntro>
    <HomeServices></HomeServices>
    <HomeAbout2></HomeAbout2>
    <home-contact-us-form :show-header="true"></home-contact-us-form>
    <HomeTestimonials></HomeTestimonials>
  </section>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
}
</style>
