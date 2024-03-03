<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
let canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
if (!canonicalUrl.endsWith('/')) {
  canonicalUrl = canonicalUrl + '/'
}

useHead({
  title: 'Botox',
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        "BOTOX® Cosmetic is commonly used to reduce or eliminate the appearance of facial wrinkles. It is injected under the skin into areas surrounding the eyes, forehead and mouth to smooth crow's feet, frown and worry lines, and lines on the neck.",
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">BOTOX® Cosmetic</div>
      <services-body-main-thumb
        src="/img/services/thumbs/botox-fillers.jpg"
      ></services-body-main-thumb>
      <p>
        BOTOX® Cosmetic is commonly used to reduce or eliminate the appearance
        of facial wrinkles. It is injected under the skin into areas surrounding
        the eyes, forehead and mouth to smooth crow's feet, frown and worry
        lines, and lines on the neck. If BOTOX® is injected regularly, the
        deepening of wrinkles from repetitive facial movements such as frowning,
        can be prevented. Made from a purified protein, BOTOX® relaxes wrinkles
        and gives the face a rejuvenated look. BOTOX® may also be useful for
        migraine headaches, excessive sweating, and eye and neck muscle spasms.
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
