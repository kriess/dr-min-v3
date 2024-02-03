<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const gallery = useGallery()
const route = useRoute()
const router = useRouter()
const pageTitle = 'Before & After Gallery'
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`

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
      content: "View before and after pictures of Dr. Caroline Min's patients.",
    },
  ],
})

// methods
const getSection = (id) => {
  return gallery.sections.find((i) => i.slug === id)
}
const getProcedure = (id) => {
  return activeSection.value.procedures.find((i) => i.slug === id)
}

// computed
const sectionId = computed(() => {
  return route.params.procedure[0] || 'face'
})
const procedureId = computed(() => {
  const section = sectionId.value
  if (!route.params.procedure[1] || route.params.procedure[1].length < 1) {
    if (section === 'face') return 'facelift'
    else if (section === 'breast') return 'breast-augmentation'
    else if (section === 'body') return 'abdominoplasty'
  }
  return route.params.procedure[1]
})
const activeSection = computed(() => {
  return getSection(sectionId.value)
})
const activeProcedure = computed(() => {
  return getProcedure(procedureId.value)
})
</script>

<template>
  <section class="photo-gallery page">
    <PageTopVisuals
      :title="pageTitle"
      image-src="/img/headshots/ourservices.jpg"
      image-width="60%"
      alt="Dr. Caroline Min - board certified plastic surgeon - before/after photos"
    ></PageTopVisuals>

    <v-btn-toggle
      v-model="activeSection"
      color="primary"
      group
      variant="text"
      class="btn-grp"
    >
      <v-btn
        v-for="section in gallery.sections"
        :key="section.slug"
        :value="section.slug"
        :variant="sectionId === section.slug ? 'tonal' : 'text'"
        :to="`/photo-gallery/${section.slug}/`"
      >
        {{ section.title }}
      </v-btn>
    </v-btn-toggle>

    <v-sheet class="mx-auto">
      <v-slide-group
        v-model="activeProcedure"
        selected-class="selected"
        show-arrows
        mandatory
      >
        <v-slide-group-item
          v-for="procedure in activeSection.procedures"
          :key="procedure.slug"
          :value="procedure.slug"
        >
          <nuxt-link
            :class="
              procedureId === procedure.slug
                ? 'btn-sub-section active'
                : 'btn-sub-section'
            "
            :to="`/photo-gallery/${activeSection.slug}/${procedure.slug}/`"
          >
            {{ procedure.title }}
          </nuxt-link>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>

    <div>
      <gallery-grid
        :section="sectionId"
        :sub-section="procedureId"
      ></gallery-grid>
    </div>

    <!--    <div>{{ route.params.procedure.length }}</div>-->
    <!--    <div>sectionId = {{ sectionId }}</div>-->
    <!--    <div>procedureId = {{ procedureId }}</div>-->
  </section>
</template>

<style lang="scss" scoped>
.photo-gallery {
  width: auto;

  :deep(.v-slide-group__content) {
    justify-content: center;
  }

  .btn-grp {
    margin-top: 10px;
    justify-content: center;
    display: flex;

    :deep(.v-btn) {
      text-transform: capitalize;
      border-radius: $main-border-radius;
    }
  }

  .btn-section-container {
    justify-content: center;
  }

  .btn-section {
    text-transform: capitalize;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    margin: 10px 20px;
    flex: 1 1 auto;

    &.selected {
      color: $primary;
    }
  }

  .btn-sub-section {
    color: #333;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    margin: 10px;

    &.active {
      color: $primary;
      font-weight: 700;
    }
  }
}
</style>
