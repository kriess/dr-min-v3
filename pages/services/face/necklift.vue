<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
let canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
if (!canonicalUrl.endsWith('/')) {
  canonicalUrl = canonicalUrl + '/'
}
const title = 'Neck Lift'

useHead({
  title: title,
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      property: 'og:url',
      content: canonicalUrl,
    },
    {
      name: 'description',
      content:
        'A neck lift is performed to remove excess fat beneath the chin and tighten loose skin in the neck. The procedure can produce dramatic results in the patient whose chin and/or neck has sagged with age or after weight loss.',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Necklift</div>
      <services-body-main-thumb
        src="/img/services/thumbs/necklift.jpg"
      ></services-body-main-thumb>

      <p>
        A neck lift is performed to remove excess fat beneath the chin and
        tighten loose skin in the neck. The procedure can produce dramatic
        results in the patient whose chin and/or neck has sagged with age or
        after weight loss.
      </p>

      <services-before-after
        :title="title"
        section="face"
        procedure="necklift"
      ></services-before-after>
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
