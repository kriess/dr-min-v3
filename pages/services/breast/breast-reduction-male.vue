<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`

useHead({
  title: 'Male Breast Reduction',
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content: 'Enlarged male breasts (gynecomastia) affect nearly 40-60% of men, often with no known cause. This condition can be highly embarrassing as well as physically uncomfortable.'
    }
  ],
})
</script>
<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Breast Reduction Male</div>
      <services-body-main-thumb
        src="/img/services/thumbs/malebreast-surgery.jpg">
      </services-body-main-thumb>
      <p>
        Enlarged male breasts (gynecomastia) affect nearly 40-60% of men, often
        with no known cause. This condition can be highly embarrassing as well
        as physically uncomfortable. Men who feel self-conscious about enlarged
        breasts may seek breast reduction surgery. The procedure removes fat
        and/or glandular tissue from the breasts, and in some cases excess skin
        as well. The result is a flatter, firmer chest.
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