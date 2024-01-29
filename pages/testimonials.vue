<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
const pageTitle = 'Testimonials'
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`

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
      content: "Read some of the testimonials from Dr. Caroline Min's patients",
    },
  ],
})
</script>

<template>
  <section class="testimonials page">
    <PageTopVisuals
      :title="pageTitle"
      image-src="/img/headshots/min-casual.jpg"
      alt="Dr. Caroline Min, MD - board certified plastic surgeon - patient testimonials"
    ></PageTopVisuals>

    <div class="testimonials-container content-area">
      <TestimonialText
        v-for="(t, index) in appConfig.testimonials"
        :key="index"
        :text="t.text"
        :initials="t.initials"
        :procedures="t.procedures"
      ></TestimonialText>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.testimonials {
  width: auto;
  padding-top: 10px;

  .testimonials-container {
    width: auto;
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    padding-bottom: 5vw;
  }

  @media screen and (max-width: 700px) {
    .testimonials-container {
      grid-template-columns: 1fr;
    }
  }
}
</style>
