<script setup>
import Breadcrumb from '~/components/breadcrumb.vue'

const runtimeConfig = useRuntimeConfig()
const pageTitle = 'Services'
const services = useServices()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}/`
const router = useRouter()

useHead({
  title: pageTitle,
  link: [
    {
      rel: 'canonical',
      hid: 'canonical',
      href: canonicalUrl,
    },
  ],
  meta: [
    {
      name: 'description',
      content:
        'Dr. Caroline Min performs cosmetic procedures for the face, breast, body, and skin.',
    },
  ],
})

// methods
const goToNewSection = (id) => {
  const section = getSection(id)
  router.push({
    query: {
      section: id,
    },
  })
}
const getSection = (id) => {
  return services.sections.find((i) => i.slug === id)
}

// computed
const sectionId = computed(() => {
  return route.query.section || 'face'
})
const activeSection = computed(() => {
  return getSection(sectionId.value)
})

onMounted(() => {
  if (process.client && window) {
    window.history.scrollRestoration = 'auto'
  }
})

// lifecycle hooks
// onMounted(() => {
//   router.push({
//     query: {
//       section: sectionId.value,
//     },
//   })
// })
</script>

<template>
  <section class="services page">
    <header-services-header></header-services-header>
    <div class="page-content">
      <breadcrumb></breadcrumb>
      <nuxt-page />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services {
  width: auto;

  .page-content {
    padding: 0 20px;
  }

  .btn-grp {
    margin: 10px 0;
    justify-content: center;
    display: flex;

    :deep(.v-btn) {
      text-transform: capitalize;
      border-radius: $main-border-radius;
    }
  }
}
</style>
