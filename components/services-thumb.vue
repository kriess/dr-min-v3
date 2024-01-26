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
    path: `/services/${props.section}/${id}/`,
  })
}
</script>

<template>
  <div class="services-thumb">
    <v-card
      flat=""
      @click="goToProcedurePage(procedure.slug)"
      class="services-thumb-card"
    >
      <v-card-text>
        <div class="img-container">
          <img
            class="img"
            :alt="`Services performed by Dr. Caroline Min - ${procedure.title}`"
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          />
        </div>
        <div class="procedure-title">{{ procedure.title }}</div>
        <div class="summary">{{ procedure.summary }}</div>
        <div class="text-center ctas">
          <v-btn
            variant="flat"
            class="ctas__btn text-center"
            title="Read More"
            size="small"
            @click="goToProcedurePage(procedure.slug)"
          >
            Read More
          </v-btn>
        </div>
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
.img-container {
  overflow: hidden;
  align-items: center;
  display: flex;
  justify-content: center;
  outline: 1px solid #eee;
  margin-bottom: 15px;
  aspect-ratio: 16/12;
  border-radius: $main-border-radius;
}

.img {
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  transition: 0.6s;
  filter: grayscale(0%);
  opacity: 0.9;
}

.services-thumb {
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.services-thumb-card {
  height: 100%;
  border: 1px solid $tertiary;
}

.procedure-title {
  font-size: 130%;
  color: $primary;
  font-weight: 500;
  margin-bottom: 5px;
}

.services-thumb:hover {
  .img {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.05);
  }
}

.ctas {
  text-align: center;
}

.ctas__btn {
  margin-top: 1rem;
  text-transform: capitalize;
  color: #fff;
  background-color: $tertiary-action;
}
</style>
