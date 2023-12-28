<script lang="ts" setup>
const appConfig = useAppConfig()

// https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
interface Props {
  section?: string
}
// props
const props = withDefaults(defineProps<Props>(), {
  section: 'home.webp',
})

const imageSrc = computed(() => {
  return `/img/header/section/${props.section}`
})

const imageBg = computed(() => {
  return {
    backgroundPosition: 'bottom',
    backgroundImage: 'url(/img/header/section/home.webp)',
  }
})

const telephoneLink = computed(() => {
  return `tel:1-${appConfig.phone}`
})
</script>

<template>
  <div class="header-section-header">
    <div class="bounding-box">
      <div class="content-box" :style="imageBg">

        <div class="ctas">
          <v-btn variant="plain" class="ctas__btn" :href="telephoneLink" title="Call to schedule a consultation">{{ appConfig.phone }}</v-btn>
          <v-btn variant="plain" class="ctas__btn" href="/contact-info/" title="Email to schedule a consultation">Schedule a Consultation</v-btn>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-section-header {
  position: relative;
  height: 380px;
  background-color: $page-content-bg;
  box-shadow:
    0 2px 4px -1px rgba(0, 0, 0, 0.1),
    0 4px 5px 0 rgba(0, 0, 0, 0.1),
    0 1px 10px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 0px;
  width: 100%;
  overflow: hidden;
}
.content-box {
  width: 100%;
  height: 380px;
}
.img {
  display: block;
  width: 100%;
  object-fit: scale-down;
}
a.telephone-link:link {
  color: #fff;
  text-decoration: none;
}
.ctas {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.ctas__btn {
  opacity: 1;
  text-transform: none;
  color: $tertiary-action;
}
</style>
