<script setup>
const props = defineProps({
  color: { type: String, default: '#ffffff' },
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
  <div class="icons-left">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :fill="props.color"
      class="w-6 h-6"
    >
      <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.icons-left {
  border-radius: 4px;
  transition: all 0.5s ease;
  background-color: transparent;
  padding: 10px;
  width: 44px;
  height: 44px;
  display: inline-block;
  cursor: pointer;
}

.icons-left:hover {
  background-color: #ffffff30;
}
</style>
