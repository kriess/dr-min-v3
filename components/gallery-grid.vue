<script lang="ts" setup>
import GalleryThumbSeparateImages from '~/components/gallery-thumb-separate-images.vue'

const props = defineProps<{
  section: string
  subSection: string
}>()
const gallery = useGallery()

// console.log('gallery grid - gallery', gallery)
// console.log('gallery grid - props', props)

const galleries = computed(() => {
  const sections = gallery.sections.find((i) => i.slug === props.section)
  const procedure = sections.procedures.find((i) => i.slug === props.subSection)
  // console.log('gallery grid - sections', sections)
  // console.log('gallery grid - procedure', procedure)
  return procedure?.galleries
})
</script>

<template>
  <div class="gallery-grid">
    <!--    <p>section = {{ props.section }}</p>-->
    <!--    <p>subSection = {{ props.subSection }}</p>-->
    <!--    <p>galleries = {{ galleries }}</p>-->

    <template v-if="galleries">
      <div class="gallery-thumb-container">
        <template v-for="(g, index) in galleries">
          <template v-if="g.type === 'separate-images'">
            <!--            <gallery-thumb-separate-images-->
            <!--              :key="`${g.slug}-${index}`"-->
            <!--              :gallery="g"-->
            <!--              :case-number="index + 1"-->
            <!--            ></gallery-thumb-separate-images>-->
          </template>
          <template v-else>
            <gallery-thumb
              :key="`${g.slug}-${index}`"
              :gallery="g"
              :case-number="index + 1"
            ></gallery-thumb>
          </template>
        </template>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.gallery-grid {
  width: 100%;
  min-height: 300px;
}
.gallery-thumb-container {
  width: auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  padding-bottom: 5vw;
}

@media screen and (max-width: 1100px) {
  .gallery-thumb-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (max-width: 700px) {
  .gallery-thumb-container {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
