<script setup>
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-props

// props
const props = withDefaults(defineProps(), {
  title: 'Page Title',
})

/*
Another props
const props = defineProps<{
  gallery: object
  caseNumber: number
}>()
*/

// reactive data
const dialog = ref(false)

// computed
const galleries = computed(() => {
  return props.title + ' with some more text'
})

// methods
const changeView = (view) => {
  console.log(view)
}

// lifecycle hooks
onMounted(() => {})
</script>

<template>
  <div class="services-header">
    <h1>Services Header</h1>
  </div>
</template>

<style lang="scss" scoped>
.services-header {
  width: auto;
}
</style>
