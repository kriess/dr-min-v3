<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
let canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
if (!canonicalUrl.endsWith('/')) {
  canonicalUrl = canonicalUrl + '/'
}

useHead({
  title: 'Thigh Lift',
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'A thigh lift is performed to remove excess skin and fat from the upper legs. Candidates typically suffer from loose, inelastic skin after extreme weight loss due to diet, exercise or bariatric surgery. ',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Thigh Lift</div>
      <services-body-main-thumb
        src="/img/services/thumbs/thighlift.jpg"
      ></services-body-main-thumb>
      <p>
        A thigh lift is performed to remove excess skin and fat from the upper
        legs. Candidates typically suffer from loose, inelastic skin after
        extreme weight loss due to diet, exercise or bariatric surgery.
      </p>
      <p>
        There are two primary types of thigh lift procedures. In a medial thigh
        lift, the surgical incision is made on the inner thigh along the line
        where the leg meets the groin or it can extend vertically down the inner
        thigh. This approach focuses on addressing sagging skin and excess fat
        on the inner thighs. On the other hand, a lateral thigh lift involves an
        incision made from the groin area around the back of the body. This
        technique not only targets the outer thighs but also provides a lifting
        effect on the buttocks. Liposuction may also be used to enhance results.
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
