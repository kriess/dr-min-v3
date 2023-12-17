<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`

useHead({
  title: 'Mommy Makeover',
  link: [{ rel: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'One of our practice\'s increasingly popular programs addresses the changes to the female breasts and midsection after childbirth.',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Mommy Makeover</div>
      <services-body-main-thumb
        src="/img/services/thumbs/mommymakeover.jpg">
      </services-body-main-thumb>
      <p>
        One of our practice's increasingly popular programs addresses the
        changes to the female breasts and midsection after childbirth.
      </p>
      <p>
        After breastfeeding, the breasts can be droopy, smaller and have a
        deflated appearance. This can be corrected with breast augmentation
        and/or breast lift.
      </p>
      <p>
        For the abdomen/midsection area, the most common concerns include the
        following:
      </p>
      <ul class="unordered-list">
        <li>Stretch marks</li>
        <li>Loose abdominal skin</li>
        <li>Abdominal pouching or protrusion</li>
        <li>
          Abdominal fat hanging over that does not fit well into clothing.
        </li>
        <li>
          This can be corrected with abdominoplasty surgery, often combined with
          limited liposuction
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services-details {
  width: 100%;
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
