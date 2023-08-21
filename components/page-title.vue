<script lang="ts" setup>
interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Page Title Not Specified',
})
</script>

<template>
  <h1 class="page-title">{{ props.title }}</h1>
</template>

<style lang="scss" scoped>
.page-title {
  color: inherit;
  font-size: 200%;
  text-align: center;
}
</style>
