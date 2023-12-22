<script lang="ts" setup>
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
interface Props {
  section?: string
}
// props
const props = withDefaults(defineProps<Props>(), {
  section: 'home.webp',
})

const imageSrc = computed(() => {
  return `/img/header/section/${props.section}`
})

const imageBg = computed(() => {
  return {
    backgroundPosition: 'bottom',
    backgroundImage: 'url(/img/header/section/home.webp)',
  }
})
</script>

<template>
  <div class="header-section-header">
    <div class="bounding-box">
      <div class="content-box" :style="imageBg">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-section-header {
  height: 380px;
  background-color: $page-content-bg;
  box-shadow:
    0 2px 4px -1px rgba(0, 0, 0, 0.1),
    0 4px 5px 0 rgba(0, 0, 0, 0.1),
    0 1px 10px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 0px;
  width: 100%;
  overflow: hidden;
}
.content-box {
  width: 100%;
  height: 380px;
}
.img {
  display: block;
  width: 100%;
  object-fit: scale-down;
}
</style>
