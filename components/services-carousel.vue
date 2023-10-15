<script lang="ts" setup>
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-props

// reactive data
const colors = ref([
  'indigo',
  'warning',
  'pink darken-2',
  'red lighten-1',
  'deep-purple accent-4',
])
const slides = ref(['First', 'Second', 'Third', 'Fourth', 'Fifth'])
const cycleInterval = ref(6000)

// computed
// const galleries = computed(() => {
//   return props.title + ' with some more text'
// })

// methods
// const changeView = (view) => {
//   console.log(view)
// }
</script>

<template>
  <div class="sevices-carousel">
    <h1 class="text-h2 text-center mb-10 section-title">Services</h1>
    <VCarousel
      cycle
      :interval="cycleInterval"
      height="400"
      hide-delimiter-background
      show-arrows
    >
      <VCarouselItem v-for="(slide, i) in slides" :key="i">
        <VSheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">{{ slide }} Slides</div>
          </div>
        </VSheet>
      </VCarouselItem>
    </VCarousel>

    <p class="mt-1 pt-10 text-center">
      <v-btn color="" class="text-h6" to="/services">View All Services</v-btn>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.sevices-carousel {
  padding: 50px 100px;
  background-color: $primary;
  width: auto;
}
.section-title {
  color: $text-on-dark;
}
</style>
