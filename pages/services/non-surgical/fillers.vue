<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}/`

useHead({
  title: 'Fillers',
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'Facial fillers are designed to smooth wrinkles, sculpt lips and shape facial contours. It is a clear, synthetic gel made with hyaluronic acid, a natural substance that is found throughout your body. ',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Fillers</div>
      <services-body-main-thumb
        src="/img/services/thumbs/filler.jpg"
      ></services-body-main-thumb>
      <p>
        Facial fillers are designed to smooth wrinkles, sculpt lips and shape
        facial contours. It is a clear, synthetic gel made with hyaluronic acid,
        a natural substance that is found throughout your body. It carries
        little risk of allergic reaction. The most common areas for treatment
        are the glabellar lines (between the eyebrows) and the nasolabial folds
        (from the root of the nose to the angle of your mouth and the lips). The
        results can last from six months to a year.
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
