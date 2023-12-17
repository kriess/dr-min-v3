<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`

useHead({
  title: 'Breast Lift',
  link: [{ rel: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content: 'A breast lift, or mastopexy, is performed to return youthful shape and lift to breasts that have sagged as a result of weight loss, pregnancy, loss of the skin\'s natural elasticity or simply the effects of aging and gravity.'
    }
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Breast Lift</div>
      <services-body-main-thumb
        src="/img/services/thumbs/anotherbreastsurgery.jpg">
      </services-body-main-thumb>
      <p>
        A breast lift, or mastopexy, is performed to return youthful shape and
        lift to breasts that have sagged as a result of weight loss, pregnancy,
        loss of the skin's natural elasticity or simply the effects of aging and
        gravity. The procedure can also reduce areolar size (the dark skin
        surrounding the nipple), and it can be combined with breast augmentation
        for added firmness or volume. It is usually done under general
        anesthesia. Dr. Min is skilled in performing a limited scar breast lift
        for appropriate candidates.
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
