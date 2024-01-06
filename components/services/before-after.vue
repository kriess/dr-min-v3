<script lang="ts" setup>
const router = useRouter()

interface Props {
  title: string
  section: string
  procedure: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Title',
  section: 'face',
  procedure: 'facelift',
})

const path = `/photo-gallery?section=${props.section}&procedure=${props.procedure}`
const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
  },
)
</script>

<template>
  <nuxt-link :to="path">
    <div class="services-before-after" ref="target">
      <!--<h3 class="title">{{ props.title }} Before/After</h3>-->
      <div :class="targetIsVisible ? 'container visible' : 'container'">
        <img
          class="img"
          src="/img/photo-gallery/gallery-2.webp"
          :alt="`${title} image that links to the before/after ${title} photo gallery`"
        />
        <div class="link-container">
          <div class="gallery-link">
            {{ props.title }}
            <br />
            Before & After Gallery
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.services-before-after {
  cursor: pointer;
  overflow: hidden;
  max-width: 800px;
  width: 80%;
  margin: 0 auto;
  clear: both;
  position: relative;

  .container {
    overflow: hidden;
    border-radius: $border-radius-v3;
    border: 1px solid #eee;
    position: relative;
    top: 100px;
    opacity: 0;
    transition: all 2s ease;

    &.visible {
      top: 0px;
      opacity: 1;
    }
  }

  .img {
    width: 100%;
    aspect-ratio: 1000/400;
    display: block;
    transition: all 1s ease;
    opacity: 1;
  }

  .img:hover {
    border-radius: $border-radius-v3;
    opacity: 1;
  }

  .link-container {
    top: 20%;
    left: 20px;
    position: absolute;
  }

  .gallery-link {
    text-shadow: 1px 1px 1px #ddd;
    color: $primary;
    text-decoration: none;
    font-size: clamp(0.25rem, 4vw, 2.2rem);
    line-height: clamp(0.25rem, 4vw, 2.2rem);
    font-weight: 400;
  }
}
</style>
