<script lang="ts" setup>
const pageTitle = 'Testimonials'
useHead({
  title: pageTitle,
})
const appConfig = useAppConfig()
</script>

<template>
  <section class="testimonials page">
    <PageTopVisuals
      :title="pageTitle"
      image-src="/img/misc/patient-reviews.jpg"
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
