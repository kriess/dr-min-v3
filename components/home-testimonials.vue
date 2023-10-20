<script lang="ts" setup>
const appConfig = useAppConfig()
const testimonials = appConfig.testimonials.slice(0, 2)
</script>

<template>
  <div class="home-testimonials">
    <h1 class="text-center mb-10 section-title">Testimonials</h1>

    <div class="testimonials-grid">
      <TestimonialText
        v-for="(t, index) in testimonials"
        :key="index"
        :text="t.text"
        :initials="t.initials"
        :procedures="t.procedures"
      ></TestimonialText>
    </div>

    <p class="mt-1 pt-10 text-center">
      <v-btn
        color=""
        variant="elevated"
        rounded="sm"
        size="small"
        class="text-h6"
        to="/testimonials"
      >
        Read More Testimonials
      </v-btn>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.home-testimonials {
  color: $text-on-dark;
  padding: 3vw 5vw;
  background-color: $secondary;
  width: auto;
  .testimonials-grid {
    display: grid;
    gap: 10vw;
    grid-template-columns: 1fr 1fr;
  }
}
.section-title {
  font-size: min(10vw, 50px);
  color: $text-on-dark;
}
</style>
