<script lang="ts" setup>
import ServicesThumb from '~/components/services-thumb.vue'

const props = defineProps<{
  section: string
  services: object
}>()
</script>

<template>
  <div class="services-grid">
    <div class="services-thumb-container">
      <template v-for="procedure in services.procedures">
        <services-thumb :procedure="procedure"></services-thumb>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services-grid {
  width: 100%;
  min-height: 300px;
}
.services-thumb-container {
  width: auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  padding-bottom: 5vw;
}

@media screen and (max-width: 700px) {
  .services-thumb-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
