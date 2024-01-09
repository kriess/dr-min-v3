<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}/`

const pageTitle = 'Contact Us'
useHead({
  title: pageTitle,
  link: [
    {
      rel: 'canonical',
      hid: 'canonical',
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
  <section class="contact-info">
    <contact-us-form :show-header="true"></contact-us-form>
  </section>
</template>

<style lang="scss" scoped>
.contact-info {
  padding-top: 100px;
  width: auto;
}
</style>
