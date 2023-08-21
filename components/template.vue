<script lang="ts" setup>
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
interface Props {
  title?: string
}

// props
const props = withDefaults(defineProps<Props>(), {
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
</script>

<template>
  <div class="template" @click="changeView('front')">
    {{ props.title }}
    <div>
      {{ dialog }}
    </div>
    <div>
      {{ galleries }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.template {
  font-size: 200%;
}
</style>
