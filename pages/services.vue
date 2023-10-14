<script lang="ts" setup>
const pageTitle = 'Services'
useHead({
  title: pageTitle,
})
const services = useServices()
const route = useRoute()
const router = useRouter()

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

// lifecycle hooks
onMounted(() => {
  router.push({
    query: {
      section: sectionId.value,
    },
  })
})
</script>

<template>
  <section class="services page">
    <PageTopVisuals
      :title="pageTitle"
      image-src="/img/headshots/dr-min-suit.jpg"
    ></PageTopVisuals>
    <!--    <services-index></services-index>-->

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
