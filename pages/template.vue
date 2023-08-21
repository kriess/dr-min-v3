<script lang="ts" setup>
const pageTitle = 'Template'
useHead({
  title: pageTitle,
})
</script>

<template>
  <section class="template page">
    <PageTitle :title="pageTitle"></PageTitle>
  </section>
</template>

<style lang="scss" scoped>
.template {
  width: auto;
}
</style>
