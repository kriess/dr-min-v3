<script setup>
const runtimeConfig = useRuntimeConfig()
const pageTitle = 'Services'
const services = useServices()
const route = useRoute()
const router = useRouter()

console.log('services', services)

let canonicalUrl = `${runtimeConfig.public.siteDomain}/services`
if (route.params.section) {
  canonicalUrl = canonicalUrl + `/${route.params.section}`
}
if (route.params.procedure) {
  canonicalUrl = canonicalUrl + `/${route.params.procedure}`
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

console.log('sectionId', sectionId.value)
</script>

<template>
  <section>
    <p>[...section].vue</p>
    <v-btn-toggle
      v-model="activeSection"
      color="primary"
      group
      variant="text"
      class="btn-grp"
    >
      <v-btn
        v-for="section in services.sections"
        :key="section.slug"
        :value="section.slug"
        :variant="sectionId === section.slug ? 'tonal' : 'text'"
        @click="goToNewSection(section.slug)"
      >
        {{ section.title }}
      </v-btn>
    </v-btn-toggle>

    <div>
      <services-grid
        :section="sectionId"
        :services="activeSection"
      ></services-grid>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
