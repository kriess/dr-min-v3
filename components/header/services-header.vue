<script setup>
const route = useRoute()
const services = useServices()
const target = ref(null)
const targetIsVisible = ref(false)
const appConfig = useAppConfig()

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
  },
)

const getBg = () => {
  const isService = route.fullPath.includes('/services')
  const sections = route.fullPath.split('/')
  const siteSection = isService ? sections[2] : sections[1]

  if (siteSection === 'body') {
    return {
      backgroundPosition: 'bottom center',
      backgroundImage: `url(/img/header/section/body.webp?${appConfig.releaseId})`,
    }
  }
  if (siteSection === 'face') {
    return {
      backgroundPosition: 'bottom center',
      backgroundImage: `url(/img/header/section/face.webp?${appConfig.releaseId})`,
    }
  }
  if (siteSection === 'breast') {
    return {
      backgroundPosition: 'bottom center',
      backgroundImage: `url(/img/header/section/breast.webp?${appConfig.releaseId})`,
    }
  }
  if (siteSection === 'non-surgical') {
    return {
      backgroundPosition: 'bottom center',
      backgroundImage: `url(/img/header/section/skin.webp?${appConfig.releaseId})`,
    }
  }
  return {
    backgroundImage: 'none',
  }
}

const isService = computed(() => {
  return route.fullPath.includes('/services')
})
const siteSection = computed(() => {
  const isService = route.fullPath.includes('/services')
  const sections = route.fullPath.split('/')
  return isService ? sections[2] : sections[1]
})
const procedureTitle = computed(() => {
  const sections = route.fullPath.split('/')
  const section = services?.sections?.find((i) => i.slug === sections[2])
  const procedure = section?.procedures?.find((i) => i.slug === sections[3])
  return procedure?.title
})
const procedures = computed(() => {
  const sections = route.fullPath.split('/')
  const section = services?.sections?.find((i) => i.slug === sections[2])
  const procedures = section?.procedures

  procedures.forEach((i) => {
    i.href = `/services/${siteSection.value}/${i.slug}/`
  })
  return procedures
})

// console.log('services', services)
</script>

<template>
  <div class="header-services-header" v-if="isService" :style="getBg()">
    <div class="content" v-if="isService">
      <h1
        :class="targetIsVisible ? 'section-title visible' : 'section-title'"
        ref="target"
      >
        {{ procedureTitle ?? siteSection }}
      </h1>

      <v-sheet class="procedures" v-if="procedureTitle">
        <v-slide-group show-arrows>
          <v-slide-group-item
            v-for="(i, index) in procedures"
            :key="index"
            v-slot="{ isSelected, toggle }"
            class="procedure"
          >
            <v-btn class="section-nav-btn" variant="plain" :to="i.href">
              {{ i.title }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-services-header {
  border-bottom: 10px solid $secondary;
  height: 380px;
  background-color: $page-content-bg;
  //box-shadow:
  //  0 2px 4px -1px rgba(0, 0, 0, 0.1),
  //  0 4px 5px 0 rgba(0, 0, 0, 0.1),
  //  0 1px 10px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 0;
  width: auto;
}

.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0px auto;
  padding: 10px;
  max-width: $page-max-width;
  background-color: rgba(0, 0, 0, $header-services-opacity);
}

.section-title {
  text-shadow: 1px 1px 1px $font-primary-shadow;
  font-weight: 300;
  font-size: clamp(1rem, 9vw, 3rem);
  line-height: clamp(1rem, 9vw, 3rem);
  color: $font-primary;
  text-transform: capitalize;
  margin-bottom: 10px;
  opacity: 0;
  position: relative;
  left: -300px;
  transition: all 1s ease;

  &.visible {
    left: 0px;
    opacity: 1;
  }
}

.procedures {
  background-color: transparent;

  :deep(.v-icon) {
    color: #fff;
  }
}

.section-nav-btn {
  text-shadow: 1px 1px 1px $font-primary-shadow;
  background-color: rgba(167, 93, 93, 0);
  padding: 0 10px;
  font-size: 0.9rem;
  border-radius: 0;
  font-weight: 500;
  opacity: 1;
  color: $font-primary;
  margin: 0;
  text-transform: capitalize;

  &.v-btn--active {
    opacity: 1;
    color: #fff;
    background-color: rgba(167, 93, 93, 0.8);
  }
}

.section-nav-btn:hover {
  transition: all 1s ease;
  color: #fff;
  background-color: rgba(167, 93, 93, 0.8);
}

@include upToSm {
  .header-services-header {
    height: 300px;
  }
}
</style>
