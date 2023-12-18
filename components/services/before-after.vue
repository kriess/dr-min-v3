<script lang="ts" setup>
const router = useRouter()

interface Props {
  title: string,
  section: string,
  procedure: string
}
const props = withDefaults(defineProps<Props>(), {
  title: 'Title',
  section: 'face',
  procedure: 'facelift'
})

const goTo = () => {
  router.push({
    path: `/photo-gallery?section=${props.section}&procedure=${props.procedure}`,
  })
}
</script>

<template>
  <div class="services-before-after" @click="goTo">
<!--    <h3 class="title">{{ props.title }} Before/After</h3>-->
    <div class="container">
      <img class="img" :src="`/img/services/before-after/facelift.jpg`" :alt="`${title} image that links to the before/after ${title} photo gallery`" />
      <div class="link-container">
        <div class="gallery-link">
        View the {{ props.title }} <br />Before/After Gallery
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services-before-after {
  cursor: pointer;
  overflow: hidden;
  border-radius: $border-radius-v3;
  border: 1px solid #eee;
  max-width: 1000px;
  width: 80%;
  margin: 0 auto;
  clear: both;
  position: relative;

  .img {
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
    color: $primary;
    text-decoration: none;
    font-size: 200%;
    font-weight: 700;
  }
}
</style>
