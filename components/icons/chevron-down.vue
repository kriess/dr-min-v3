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
  <div class="icons-down">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :fill="props.color"
      class="w-6 h-6"
    >
      <path
        fill-rule="evenodd"
        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.icons-down {
  border-radius: 4px;
  transition: all 0.5s ease;
  background-color: transparent;
  padding: 10px;
  width: 44px;
  height: 44px;
  display: inline-block;
  cursor: pointer;
}

.icons-down:hover {
  background-color: #ffffff30;
}
</style>
