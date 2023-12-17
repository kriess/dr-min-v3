<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`

useHead({
  title: 'Breast Revision',
  link: [{ rel: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content: 'Revision breast augmentation is performed for patients who are not satisfied with their results after previously undergoing breast augmentation. '
    }
  ],
})
</script>
<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Breast Revision</div>
      <v-img
        class="thumb"
        cover
        :src="`/img/services/thumbs/breastrevision.jpg`"
      ></v-img>
      <p>
        Revision breast augmentation is performed for patients who are not
        satisfied with their results after previously undergoing breast
        augmentation. These patients' unhappiness may arise from the implant
        shape, size, or placement or because of a post-surgical complication
        such as wrinkling, implant displacement, capsular contracture (hardening
        around the implant) or synmastia (implants drift together). We can
        correct these errors and help patients enjoy the fuller breasts they
        envisioned before their original surgery.
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
