<script setup>
const runtimeConfig = useRuntimeConfig()
const pageTitle = 'Services'
const services = useServices()
const route = useRoute()
const router = useRouter()
let canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
if (!canonicalUrl.endsWith('/')) {
  canonicalUrl = canonicalUrl + '/'
}

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

onMounted(() => {
  if (process.client && window) {
    window.history.scrollRestoration = 'auto'
  }
})

// methods
const goToNewSection = (id) => {
  const section = getSection(id)
  router.push({
    path: `/services/${id}`,
  })
}
const getSection = (id) => {
  return services.sections.find((i) => i.slug === id)
}

// computed
const sectionId = computed(() => {
  return route.params.section[0] || 'face'
})
const activeSection = computed(() => {
  return getSection(sectionId.value)
})

// console.log('sectionId', sectionId.value)
</script>

<template>
  <section>
    <div>
      <services-grid
        :section="sectionId"
        :services="activeSection"
      ></services-grid>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
