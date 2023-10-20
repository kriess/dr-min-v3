<script lang="ts" setup>
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
const router = useRouter()

// reactive data
const colors = ref([
  'indigo',
  'warning',
  'pink darken-2',
  'red lighten-1',
  'deep-purple accent-4',
])
const slides = ref([
  {
    text: 'Facial Plastic & Lifting',
    imageSrc: '/img/services/carousel/face.webp',
    href: '/services?section=face',
  },
  {
    text: 'Breast Lifting & Augmentation',
    imageSrc: '/img/services/carousel/breast.webp',
    href: '/services?section=breast',
  },
  {
    text: 'Body Contouring & Makeovers',
    imageSrc: '/img/services/carousel/body.jpg',
    href: '/services?section=body',
  },
  // {
  //   text: 'Restorative & Cosmetic',
  //   imageSrc: '/img/services/carousel/skin.webp',
  //   href: '/services?section=skin',
  // },
])
const cycleInterval = ref(6000)

// computed
// const galleries = computed(() => {
//   return props.title + ' with some more text'
// })

// methods
const goTo = (view: string) => {
  router.push(view)
}
</script>

<template>
  <div class="services-carousel">
    <!--    <h1 class="text-h2 text-center mb-10 section-title">Services</h1>-->
    <VCarousel
      class="carousel"
      cycle
      :interval="cycleInterval"
      height="auto"
      hide-delimiter-background
      show-arrows
    >
      <VCarouselItem v-for="(slide, i) in slides" :key="i">
        <div class="carousel-item" @click="goTo(slide.href)">
          <img
            class="slide-img"
            :src="slide.imageSrc"
            style=""
            :alt="slide.text"
          />
          <div class="slide-text">{{ slide.text }}</div>
        </div>
      </VCarouselItem>
    </VCarousel>

    <p class="py-3 text-center">
      <v-btn color="" class="text-h6" to="/services">View All Services</v-btn>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.services-carousel {
  border-radius: $main-border-radius $main-border-radius 0 0;
  padding: 3px;
  background-color: $primary;
  width: auto;
  .slide-img {
    width: 100%;
    border-radius: $main-border-radius;
  }
  .carousel {
    :deep(.v-btn) {
      opacity: 0.4;
    }
  }
  .carousel-item {
    position: relative;
  }
  .slide-text {
    position: absolute;
    top: 12%;
    left: 2%;
    max-width: 40%;
    color: #fff;
    font-size: clamp(20px, 3vw, 50px);
    line-height: clamp(20px, 3vw, 50px);
  }
}
.section-title {
  color: $text-on-dark;
}
</style>
