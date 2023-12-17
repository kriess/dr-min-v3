<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`

useHead({
  title: 'Body Contouring',
  link: [{ rel: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'Candidates for body contouring typically suffer from loose (inelastic) skin on many or most areas of the body usually as a result of significant weight loss due to diet, exercise or bariatric surgery. ',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Body Contouring after Weight Loss</div>
      <services-body-main-thumb
        src="/img/services/thumbs/bodycontouringweightloss.jpg">
      </services-body-main-thumb>
      <p>
        Candidates for body contouring typically suffer from loose (inelastic)
        skin on many or most areas of the body usually as a result of
        significant weight loss due to diet, exercise or bariatric surgery.
        Because of this, the procedure is often combined with others such as
        breast lifts, arm lifts and liposuction to retain a proper body
        proportion. Body contouring tightens and tones areas of loose skin on
        the abdomen, breasts, back, buttocks, hips and thighs. After the loose,
        hanging skin is removed, the patient will have a complete body makeover
        and newfound self-confidence.
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
