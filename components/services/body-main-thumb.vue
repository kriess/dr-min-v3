<script lang="ts" setup>
const appConfig = useAppConfig()
interface Props {
  src?: string
}
const props = withDefaults(defineProps<Props>(), {
  src: 'temp.jpg',
})
</script>

<template>
  <div class="services-body-main-thumb">
    <v-img
      class="thumb"
      cover
      :src="props.src"
    ></v-img>
    <div class="schedule-consult">
      <div class="consult-title">Schedule a Consultation</div>
      {{ appConfig.phone }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services-body-main-thumb {
  margin: 0 0 20px 20px;
  float: right;
  width: 50%;
  max-width: 600px;
  .thumb {
    border-radius: $border-radius-v3;
    border: 1px solid #eee;
  }

  .schedule-consult {
    border-radius: $border-radius-v3;
    background-color: rgba(0, 0, 0, 0.05);
    margin-top: 12px;
    text-align: center;
    padding: 5px;
  }
  .consult-title {
    white-space: nowrap;
  }
}
</style>
