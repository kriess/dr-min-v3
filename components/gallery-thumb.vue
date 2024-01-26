<script lang="ts" setup>
const props = defineProps<{
  section: string
  procedure: string
  gallery: object
  caseNumber: number
}>()

// reactive data
const dialog = ref(false)
const view = ref('initial')

// computed
const currentView = computed(() => {
  // console.log('computed current view')
  let selectedView = {}
  if (view.value === 'initial') {
    selectedView = props.gallery.beforeAfter[0]
  } else {
    selectedView = props.gallery.beforeAfter.find((i) => i.slug === view.value)
  }
  // console.log('selected view', selectedView)
  // console.log('caption', props.gallery.caption)
  if (!selectedView.caption) {
    selectedView.caption = props.gallery.caption
  }
  return selectedView
})

const beforeAfter = computed(() => {
  return props.gallery.beforeAfter
})

// methods
const changeView = (type) => {
  console.log('change view - type', type)
  view.value = type
  console.log('change view - props.gallery', props.gallery)
}
</script>

<template>
  <div class="gallery-thumb">
    <nuxt-link
      :to="`/photo-gallery/${props.section}/${props.procedure}/${props.caseNumber}/`"
    >
      <v-card class="gallery-thumb-card" flat>
        <v-card-text>
          <img
            class="img"
            :alt="`Before/after photos of procedure performed by Dr. Caroline Min - ${beforeAfter[0].caption}`"
            :src="`/img/photo-gallery/optimized/${beforeAfter[0].url}`"
          />
          <div class="text-center ctas">
            <v-btn
              variant="flat"
              class="ctas__btn text-center"
              title="More Views/Info"
              size="small"
              :to="`/photo-gallery/${props.section}/${props.procedure}/${props.caseNumber}/`"
            >
              View Case
            </v-btn>
          </div>
          <!--        <div class="case-number text-center">Case {{ props.caseNumber }}</div>-->
          <!-- {{ props.gallery }} -->
        </v-card-text>
      </v-card>
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.gallery-thumb {
  width: 100%;

  :deep(.v-img__img--cover) {
    transition: 0.6s;
    filter: grayscale(0%);
    opacity: 1;
  }
}

.gallery-thumb:hover {
  :deep(.v-img__img--cover) {
    filter: grayscale(0%);
    opacity: 1;
  }
}

.gallery-thumb-card {
  border: 1px solid $tertiary;
}

.case-number {
  color: $tertiary-action;
  display: block;
  margin-top: 5px;
  font-size: 90%;
}

.ctas {
  text-align: center;
  // display: flex;
  // flex-direction: column;
}

.ctas__btn {
  margin-top: 1rem;
  text-transform: capitalize;
  color: #fff;
  background-color: $tertiary-action;
}

.img {
  width: 100%;
}
</style>
