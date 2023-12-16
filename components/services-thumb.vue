<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
const props = defineProps<{
  procedure: object
  section: string
}>()

// reactive data
const dialog = ref(false)

// methods
const goToProcedurePage = (id) => {
  router.push({
    path: `/services/${props.section}/${id}`,
  })
}
</script>

<template>
  <div class="services-thumb">
    <v-card
      @click="goToProcedurePage(procedure.slug)"
      class="services-thumb-card"
    >
      <v-card-text>
        <v-img
          class="thumb"
          cover
          :alt="`Services performed by Dr. Caroline Min - ${procedure.title}`"
          :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
        ></v-img>
        <div class="procedure-title">{{ procedure.title }}</div>
        <div class="summary">{{ procedure.summary }}</div>
      </v-card-text>
    </v-card>

    <v-dialog v-if="dialog" v-model="dialog" width="800" class="">
      <v-card>
        <v-card-text>
          <services-details
            :section="section"
            :procedure="procedure"
          ></services-details>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="scss" scoped>
.services-thumb {
  cursor: pointer;
  width: 100%;
  height: 100%;
  .services-thumb-card {
    height: 100%;
  }
  .thumb {
    outline: 1px solid #eee;
    margin-bottom: 15px;
    aspect-ratio: 16/12;
    border-radius: $main-border-radius;
  }
  :deep(.v-img__img--cover) {
    transition: 0.6s;
    filter: grayscale(0%);
    opacity: 1;
  }
  .procedure-title {
    font-size: 130%;
    color: $primary;
    font-weight: bold;
    margin-bottom: 5px;
  }
}
.services-thumb:hover {
  :deep(.v-img__img--cover) {
    filter: grayscale(0%);
    opacity: 1;
  }
}
</style>
