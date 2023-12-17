<script setup>
const route = useRoute()
const routeSegments = computed(() => {
  const path = route.fullPath
  const segments = path.split('/')
  const items = [
    {
      title: 'Home',
      disabled: false,
      href: '/',
    },
  ]
  segments.forEach((i, index) => {
    if (i !== '' && i !== 'services') {
      // console.log('i', i)
      // console.log(index)
      // console.log(segments.length)
      let title = 'tbd'
      let href = 'tbd'
      const hrefSegments = segments.slice(0, index + 1)
      items.push({
        title: i,
        disabled: index > segments.length - 2,
        href: hrefSegments.join('/'),
      })
    }
  })
  return items
})

console.log('routeSegments', routeSegments.value)
</script>

<template>
  <div class="breadcrumb">
    <v-breadcrumbs :items="routeSegments">
      <template v-slot:divider>
        <v-icon icon="mdi-menu-right" color="#777"></v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumb {
  width: auto;

  :deep(.v-icon) {
    zoom: 0.75;
  }

  :deep(.v-breadcrumbs) {
    padding-left: 0;
    margin: 10px 0;
  }

  :deep(.v-breadcrumbs-item) {
    text-transform: capitalize;
  }

  .breadcrumb__anchor,
  .breadcrumb__home {
    text-transform: capitalize;
    color: #555;
    text-decoration: none;
  }

  .breadcrumb__anchor:before {
    content: ' > ';
  }
}
</style>
