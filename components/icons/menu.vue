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
  <div class="icons-menu">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      :stroke="props.color"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.icons-menu {
  border-radius: 4px;
  transition: all 0.5s ease;
  background-color: transparent;
  padding: 10px;
  width: 44px;
  height: 44px;
  display: inline-block;
  cursor: pointer;
}

.icons-menu:hover {
  background-color: #ffffff30;
}
</style>
