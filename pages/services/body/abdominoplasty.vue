<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`

useHead({
  title: 'Abdominoplasty',
  link: [{ rel: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'Tummy tuck surgery, also known as abdominoplasty, removes unwanted excess fat and skin.',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Abdominoplasty (Tummy Tuck)</div>
      <v-img
        class="thumb"
        cover
        :src="`/img/services/thumbs/abdominoplasty.jpg`"
      ></v-img>
      <p>
        Sometimes, diet and exercise just aren't enough to give you the flat
        tummy that you desire. Especially if you've been pregnant or experienced
        significant weight loss, you may have loose skin and stretch marks that
        don't go away no matter what you do. Tummy tuck surgery, also known as
        abdominoplasty, removes unwanted excess fat and skin. If you have
        weakness in your abdominal muscles or separation of the muscles in the
        midline (known as rectus diastasis), this will be repaired during
        surgery. The result is a smooth flat abdomen. The scar will be placed as
        low as possible so that it remains hidden by your underwear or bathing
        suit.
      </p>
      <p>
        Liposuction is often combined with abdominoplasty to contour the
        waistline and other areas.
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
