<script lang="ts" setup>
const props = defineProps<{
  section: string
  procedure: string
  caseNumber: string
}>()
const gallery = useGallery()
const view = ref('initial')

const currentCase = computed(() => {
  const sections = gallery.sections.find((i) => i.slug === props.section)
  const procedure = sections.procedures.find((i) => i.slug === props.procedure)
  return procedure?.galleries[props.caseNumber - 1]
})
</script>

<template>
  <div class="gallery-main">
    <!--    <div>{{ props.section }}</div>-->
    <!--    <div>{{ props.procedure }}</div>-->
    <!--    <div>{{ props.caseNumber }}</div>-->
    <!--    <div>{{ currentCase }}</div>-->

    <div class="caption-text">{{ currentCase.caption }}</div>
    <div v-for="view in currentCase.beforeAfter" class="mb-10">
      <!--      <h3 class="text-center">{{ view.label }}</h3>-->
      <img
        :src="`/img/photo-gallery/optimized/${view.url}`"
        class="case-pic"
        :alt="`${props.section} ${props.procedure} case before after picture`"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.case-number {
  color: $tertiary-action;
  display: block;
  margin-top: 5px;
  font-size: 90%;
}

.caption-text {
  margin: 50px auto 10px auto;
  max-width: 680px;
}

.case-pic {
  display: block;
  margin: 10px auto;
  width: 100%;
  max-width: 680px;
}
</style>
