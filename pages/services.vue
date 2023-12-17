<script setup>
import Breadcrumb from '~/components/breadcrumb.vue'

const runtimeConfig = useRuntimeConfig()
const pageTitle = 'Services'
const services = useServices()
const route = useRoute()
const router = useRouter()

let canonicalUrl = `${runtimeConfig.public.siteDomain}/services`
if (route.query.section) {
  canonicalUrl = canonicalUrl + `?section=${route.query.section}`
}

useHead({
  title: pageTitle,
  link: [
    {
      rel: 'canonical',
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
    <breadcrumb></breadcrumb>
    <!--    <services-header></services-header>-->
    <nuxt-page />
  </section>
</template>

<style lang="scss" scoped>
.services {
  width: auto;

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
