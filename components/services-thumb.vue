<script lang="ts" setup>
const props = defineProps<{
  procedure: object
  section: string
}>()

// reactive data
const dialog = ref(false)
</script>

<template>
  <div class="services-thumb">
    <v-card @click="dialog = true" class="services-thumb-card">
      <v-card-text>
        <v-img
          class="thumb"
          cover
          :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
        ></v-img>
        <div class="procedure-title">{{ procedure.title }}</div>
        <div class="summary">{{ procedure.summary }}</div>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" width="800" class="">
      <v-card>
        <v-card-text>
          <services-details
            :section="section"
            :procedure="procedure.slug"
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
  .procedure-title {
    font-size: 130%;
    color: $primary;
    font-weight: bold;
    margin-bottom: 5px;
  }
}
</style>
