<script setup>
const appConfig = useAppConfig()
const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
  },
)
const props = defineProps({
  link: { type: String, default: '/services/face/' },
  label: { type: String, default: 'Face' },
  img: { type: String, default: '/img/home/services/face.webp' },
  content: {
    type: String,
    default:
      'Tired of looking tired? Discover what facial rejuvenation can do to refresh your look.',
  },
})

const imgSrc = computed(() => {
  if (targetIsVisible.value) {
    return `url(${props.img})`
  }
  return 'none'
})
</script>

<template>
  <div
    :class="
      targetIsVisible ? 'home-services-item visible' : 'home-services-item'
    "
    :style="`background-image: ${imgSrc}`"
    ref="target"
  >
    <div class="item">
      <!--      <NuxtLink class="nuxt-link" :to="props.link">-->
      <div class="item__wrapper">
        <div class="item__label">
          <h4 class="item__title">{{ props.label }}</h4>
        </div>
        <div class="item__content">
          <h4 class="item__title">{{ props.label }}</h4>
          {{ props.content }}
        </div>
      </div>
      <!--      </NuxtLink>-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-services-item {
  width: 25%;
  position: relative;
  background-position: center center;
  min-height: 620px;
  background-color: #e1d9c5;
  display: flex;
  place-items: center;
  filter: grayscale(100%);
  transition: width 0.5s linear;
  opacity: 0;

  &.visible {
    opacity: 1;
  }
}

.item {
  height: 100%;
  width: 100%;
}

.item__wrapper {
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
}

.item__title {
  text-align: center;
  font-weight: 300;
  text-transform: capitalize;
  color: #fff;
  font-size: clamp(1rem, 6vw, 2rem);
}

.nuxt-link {
  text-decoration: none;
  height: 100%;
  width: 100%;
}

.item__content {
  text-wrap: balance;
  top: 700px;
  position: relative;
  text-align: center;
  padding: 0 2vw;
  visibility: visible;
  opacity: 1;
  transition:
    visibility 0s,
    top 0.5s ease,
    opacity 0.5s 0.6s;
}

.item__label {
  top: 38%;
  position: absolute;
  visibility: visible;
  opacity: 1;
  transition:
    visibility 0s,
    opacity 0.5s 0.6s,
    top 0.5s ease;
}

.home-services-item:hover {
  width: 35%;
  filter: grayscale(0%);

  .item__content {
    top: 38%;
    position: absolute;
    visibility: visible;
    opacity: 1;
  }

  .item__label {
    top: -700px;
    visibility: hidden;
    opacity: 0;
  }
}

@include upToSm {
  .home-services-item,
  .home-services-item:hover {
    position: relative;
    background-position: center center;
    min-height: 500px;
    background-color: #e1d9c5;
    display: flex;
    place-items: center;
    transition: width 0.5s linear;
    width: 100%;
    filter: grayscale(0%);

    .item__content {
      text-wrap: balance;
      position: relative;
      text-align: center;
      padding: 0 2vw;
      visibility: visible;
      transition:
        visibility 0s,
        top 0.5s ease,
        opacity 0.5s 0.6s;
      top: 0;
      opacity: 1;
    }

    .item__label {
      display: none;
    }
  }

  .item__title {
    font-size: clamp(2rem, 9vw, 3rem);
  }
}
</style>
