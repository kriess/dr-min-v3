<script lang="ts" setup>
const appConfig = useAppConfig()
// const useIntersectionObserver = use()

interface Props {
  src?: string
}
const props = withDefaults(defineProps<Props>(), {
  src: 'temp.jpg',
})

const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
  },
)
</script>

<template>
  <div class="services-body-main-thumb">
    <v-img
      ref="target"
      :class="targetIsVisible ? 'thumb visible' : 'thumb'"
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
    opacity: 0;
    left: 100px;
    transition: all 1s ease;
    &.visible {
      opacity: 1;
      left: 0;
    }
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
