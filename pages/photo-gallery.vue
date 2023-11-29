<script lang="ts" setup>
const pageTitle = 'Photo Gallery'
useHead({
  title: pageTitle,
  meta: [
    {
      name: 'description',
      content: "View before and after pictures of Dr Caroline Min's patients.",
    },
  ],
})
const gallery = useGallery()
const route = useRoute()
const router = useRouter()

// methods
const goToNewSection = (id) => {
  const section = getSection(id)
  const procedure = section.procedures[0]
  router.push({
    query: {
      section: id,
      procedure: procedure.slug,
    },
  })
}
const goToNewProcedure = (id) => {
  const procedure = getProcedure(id)
  router.push({
    query: {
      section: activeSection.value.slug,
      procedure: procedure.slug,
    },
  })
}
const getSection = (id) => {
  return gallery.sections.find((i) => i.slug === id)
}
const getProcedure = (id) => {
  return activeSection.value.procedures.find((i) => i.slug === id)
}

// computed
const sectionId = computed(() => {
  return route.query.section || 'face'
})
const procedureId = computed(() => {
  return route.query.procedure || 'facelift'
})
const activeSection = computed(() => {
  return getSection(sectionId.value)
})
const activeProcedure = computed(() => {
  return getProcedure(procedureId.value)
})

// console.log('activeSection', activeSection.value)
// console.log('activeProcedure', activeProcedure.value)

// lifecycle hooks
onMounted(() => {
  router.push({
    query: {
      section: sectionId.value,
      procedure: procedureId.value,
    },
  })
})
</script>

<template>
  <section class="photo-gallery page">
    <PageTopVisuals
      :title="pageTitle"
      image-src="/img/headshots/photogallery.jpg"
      image-width="60%"
      alt="Dr. Caroline Min, M.D. - board certified plastic surgeon - before/after photos"
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
        @click="goToNewSection(section.slug)"
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
          <div
            :class="
              procedureId === procedure.slug
                ? 'btn-sub-section active'
                : 'btn-sub-section'
            "
            @click="goToNewProcedure(procedure.slug)"
          >
            {{ procedure.title }}
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>

    <div>
      <gallery-grid
        :section="sectionId"
        :sub-section="procedureId"
      ></gallery-grid>
    </div>
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
