<script lang="ts" setup>
const appConfig = useAppConfig()

interface Props {
  alt?: string
  src?: string
  caption?: string
}

const props = withDefaults(defineProps<Props>(), {
  src: 'temp.jpg',
  caption: '',
})

const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
  },
)

const telephoneLink = computed(() => {
  return `tel:1-${appConfig.phone}`
})
</script>

<template>
  <div class="services-body-main-thumb">
    <div
      :class="targetIsVisible ? 'thumb-container visible' : 'thumb-container'"
      ref="target"
    >
      <img :alt="props.alt" class="thumb" :src="props.src" />
    </div>
    <p class="caption">
      {{ props.caption }}
    </p>
    <div class="schedule-consult">
      <div class="consult-title">
        <NuxtLink class="consult-link" to="/contact-info/">
          <span class="hidden-sm-and-down">
            Schedule a Consultation with Dr. Min
          </span>
          <span class="hidden-md-and-up">Consult with Dr. Min</span>
        </NuxtLink>
      </div>
      <a :href="telephoneLink" class="telephone-link">{{ appConfig.phone }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services-body-main-thumb {
  margin: 0 0 20px 8vw;
  float: right;
  width: 40%;
  max-width: 600px;

  .thumb-container {
    position: relative;
    overflow: hidden;
    aspect-ratio: 3/2;
    border-radius: $border-radius-v3;
    border: 1px solid #eee;
    opacity: 0;
    left: 150px;
    transition: all 1s ease;

    &.visible {
      opacity: 1;
      left: 0;
    }
  }

  .thumb {
    width: 100%;
  }

  .schedule-consult {
    color: white;
    font-weight: 500;
    background-color: $primary;
    border-radius: $border-radius-v3;
    // background-color: rgba(0, 0, 0, 0.05);
    margin-top: 12px;
    text-align: center;
    padding: 5px;
  }

  .consult-title {
    font-weight: 400;
    white-space: nowrap;
  }

  .caption {
    margin-top: 5px;
    font-size: 80%;
    line-height: 18px;
  }
}

a.consult-link:link,
a.consult-link:visited,
a.consult-link:active {
  color: #fff;
  text-decoration: none;
}

a.telephone-link:link,
a.telephone-link:visited,
a.telephone-link:active {
  font-weight: 700;
  color: #fff;
  text-decoration: none;
}

a.telephone-link:hover,
a.consult-link:hover {
  text-decoration: underline;
}

@include upToSm {
  .services-body-main-thumb {
    margin: 0 0 10px 5px;
    width: 50%;
  }
}
</style>
