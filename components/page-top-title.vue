<script lang="ts" setup>
const props = defineProps<{
  title: string
}>()

// console.log(props)
</script>

<template>
  <div class="page-top-title">
    <div class="title-text">{{ title }}</div>
    <div class="title-container"></div>
  </div>
</template>

<style lang="scss" scoped>
.page-top-title {
  position: relative;
  display: flex;
  flex-direction: column;
}
.title-container {
  border-radius: $main-border-radius;
  background-color: $page-content-bg;
  height: min(5vw, 60px);
  text-align: center;
  margin-top: -30px;
}
.title-text {
  z-index: 2;
  margin: 20px auto 0 auto;
  display: inline-block;
  padding: 0 20px;
  color: #fff;
  font-size: min(5vw, 50px);
  background-color: $primary;
  border-radius: $main-border-radius;
}
</style>
