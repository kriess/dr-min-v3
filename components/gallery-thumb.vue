<script lang="ts" setup>
const props = defineProps<{
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
    <v-card @click="dialog = true">
      <v-card-text>
        <v-img
          cover
          :src="`/img/photo-gallery/optimized/${beforeAfter[0].url}`"
        ></v-img>
        <div class="case-number text-center">Case {{ props.caseNumber }}</div>
        <!-- {{ props.gallery }} -->
      </v-card-text>
    </v-card>

    <v-dialog
      v-if="dialog"
      v-model="dialog"
      width="800"
      class="photo-gallery-dialog"
    >
      <v-card>
        <v-card-text>
          <div v-if="beforeAfter.length > 1" class="change-view-btns">
            <v-btn
              v-for="pic in beforeAfter"
              :key="pic.slug"
              @click="changeView(pic.slug)"
            >
              {{ pic.label }}
            </v-btn>
          </div>
          <v-img
            cover
            :src="`/img/photo-gallery/optimized/${currentView.url}`"
          ></v-img>
          <div class="caption-text">
            {{ currentView.label }}: {{ currentView.caption }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="scss" scoped>
.gallery-thumb {
  width: 100%;
  :deep(.v-img__img--cover) {
    transition: 0.6s;
    filter: grayscale(100%);
  }
}
.gallery-thumb:hover {
  :deep(.v-img__img--cover) {
    filter: grayscale(0%);
  }
}
</style>
