<script setup>
const appConfig = useAppConfig()
const props = defineProps({
  title: { type: String, default: 'page title' },
})
const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
  },
)

const services = [
  {
    link: '/services/face/',
    label: 'Face',
    imageSrc: `/img/home/services/face.webp?${appConfig.releaseId}`,
    content: `Tired of looking tired? Discover what facial rejuvenation can do to refresh your look. `,
  },
  {
    link: '/services/breast/',
    label: 'Breast',
    imageSrc: `/img/home/services/breast.webp?${appConfig.releaseId}`,
    content: `Whether you are looking for an augmentation, reduction, lift or a combination, learn about breast enhancement options.`,
  },
  {
    link: '/services/body/',
    label: 'Body',
    imageSrc: `/img/home/services/body.webp?${appConfig.releaseId}`,
    content: `Discover what can be done to remove unwanted fat and excess skin or boost your curves.`,
  },
  {
    link: '/services/non-surgical/',
    label: 'Non-Surgical',
    imageSrc: `/img/home/services/skin.webp?${appConfig.releaseId}`,
    content: `Not yet ready for surgery but need a refresh?  Learn about non surgical options.`,
  },
]
</script>

<template>
  <div class="home-services">
    <home-services-item
      :link="services[0].link"
      :label="services[0].label"
      :img="services[0].imageSrc"
      :content="services[0].content"
    ></home-services-item>
    <home-services-item
      :link="services[1].link"
      :label="services[1].label"
      :img="services[1].imageSrc"
      :content="services[1].content"
    ></home-services-item>
    <home-services-item
      :link="services[2].link"
      :label="services[2].label"
      :img="services[2].imageSrc"
      :content="services[2].content"
    ></home-services-item>
    <home-services-item
      :link="services[3].link"
      :label="services[3].label"
      :img="services[3].imageSrc"
      :content="services[3].content"
    ></home-services-item>
  </div>
</template>

<style lang="scss" scoped>
.home-services {
  border-top: 10px solid $secondary;
  border-bottom: 10px solid $secondary;
  overflow: hidden;
  display: flex;
  width: 100%;
}

@include upToSm {
  .home-services {
    flex-wrap: wrap;
  }
}
</style>
