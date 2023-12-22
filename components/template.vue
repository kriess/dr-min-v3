<script setup>
const props = defineProps({
  title: { type: String, default: "page title" },
})

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
