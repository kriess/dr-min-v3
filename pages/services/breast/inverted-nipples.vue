<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`

useHead({
  title: 'Correction of Inverted Nipples',
  link: [{ rel: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content: 'Nipple and areola reconstruction can provide a boost in self-confidence to patients who have inverted or stretched nipples. The inverted nipples can be surgically altered to create a more prominent and projected appearance.'
    }
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Correction of Inverted Nipples</div>
      <services-body-main-thumb
        src="/img/services/thumbs/nipplecorrection.jpg">
      </services-body-main-thumb>
      <p>
        Nipple and areola reconstruction can provide a boost in self-confidence
        to patients who have inverted or stretched nipples. The inverted nipples
        can be surgically altered to create a more prominent and projected
        appearance.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services-details {
  width: auto;
  .services-title {
    display: none;
    color: $primary;
    font-size: 150%;
    font-weight: bold;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
  }
  .header-text {
    font-size: 150%;
    color: $primary;
    font-weight: bold;
    margin-bottom: 20px;
  }
  dt {
    font-weight: bold;
  }
  dd {
    margin-bottom: 20px;
  }
  .thumb {
    border-radius: $border-radius-v3;
    border: 1px solid #ccc;
    margin: 0 0 20px 20px;
    float: right;
    width: 50%;
  }
  .unordered-list {
    margin-bottom: 20px;
    li {
      margin-left: 20px;
    }
  }
}
</style>
