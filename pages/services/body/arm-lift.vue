<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`

useHead({
  title: 'Arm Lift',
  link: [{ rel: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'After substantial weight loss, weight gain or simply from the effects of ' +
        'aging, skin on the upper arms can become inelastic, loose and flabby.Arm lifts, also known as brachioplasty, remove that excess skin and fat.',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Arm Lift (Brachioplasty)</div>
      <services-body-main-thumb
        src="/img/services/thumbs/armlift.jpg">
      </services-body-main-thumb>
      <p>
        After substantial weight loss, weight gain or simply from the effects of
        aging, skin on the upper arms can become inelastic, loose and flabby.
        Arm lifts, also known as brachioplasty, remove that excess skin and fat.
        Patients who have significant amounts of fat may want to consider
        combining the procedure with liposuction.
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
