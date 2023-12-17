<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`

useHead({
  title: 'Breast Reduction',
  link: [{ rel: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content: 'Large breasts can cause pain, improper posture, rashes, breathing problems, skeletal deformities, and low self-esteem. '
    }
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Breast Reduction</div>
      <v-img
        class="thumb"
        cover
        :src="`/img/services/thumbs/breastreduction.jpg`"
      ></v-img>
      <p>
        Large breasts can cause pain, improper posture, rashes, breathing
        problems, skeletal deformities, and low self-esteem. Breast reduction
        surgery is usually done to provide relief from these symptoms. Performed
        under general anesthesia, the procedure removes fat and glandular tissue
        and tightens skin to produce smaller, lighter and perkier breasts that
        are in a healthier proportion to the rest of the body. A limited scar
        breast reduction can be performed in those patients who are good
        candidates.
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
