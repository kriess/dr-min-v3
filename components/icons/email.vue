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
  <div class="icons-email">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :fill="props.color"
      class="w-6 h-6"
    >
      <path
        d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.icons-email {
  border-radius: 4px;
  transition: all 0.5s ease;
  background-color: transparent;
  padding: 10px;
  width: 44px;
  height: 44px;
  display: inline-block;
  cursor: pointer;
}

.icons-email:hover {
  background-color: #ffffff30;
}
</style>
