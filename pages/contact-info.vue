<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
import ContactUsForm from '~/components/contact-us-form.vue'
const canonicalUrl = `${runtimeConfig.public.siteDomain}/contact-info`

const pageTitle = 'Contact Us'
useHead({
  title: pageTitle,
  link: [
    {
      rel: 'canonical', hid: 'canonical',
      href: canonicalUrl,
    },
  ],
  meta: [
    {
      name: 'description',
      content:
        'Email info@drcarolinemin.com, telephone 626-737-9001, address 547 E Union St. Pasadena, California 91101.',
    },
  ],
})
</script>

<template>
  <section class="news page">
    <PageTopVisuals
      :title="pageTitle"
      alt="Dr. Caroline Min, M.D. - board certified plastic surgeon - contact us"
      image-src="/img/headshots/min-white-coat.jpg"
    ></PageTopVisuals>
    <contact-us-form :show-header="false"></contact-us-form>
  </section>
</template>

<style lang="scss" scoped>
.news {
  width: auto;
}
</style>
