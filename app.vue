<script setup lang="ts">
// https://nuxt.com/docs/getting-started/seo-meta
useHead({
  titleTemplate: '%s - Site Title',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <div>
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>
