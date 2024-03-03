<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
let canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
if (!canonicalUrl.endsWith('/')) {
  canonicalUrl = canonicalUrl + '/'
}
const title = 'Facial Liposuction'

useHead({
  title: title,
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'Facial liposuction sculpts the face by removing areas of fat from the lower cheek, jawline, chin or neck. For older patients looking to tone the cheeks or jowls liposuction can be an effective and less invasive alternative to a face or neck lift.',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Facial Liposuction</div>
      <services-body-main-thumb
        src="/img/services/thumbs/neckliposuction.jpg"
      ></services-body-main-thumb>
      <p>
        Facial liposuction sculpts the face by removing areas of fat from the
        lower cheek, jawline, chin or neck. For older patients looking to tone
        the cheeks or jowls liposuction can be an effective and less invasive
        alternative to a face or neck lift. Younger patients who have excess fat
        in the lower face and neck will benefit from liposuction and obtain a
        thinner, more sculpted face and jawline.
      </p>

      <services-before-after
        :title="title"
        section="face"
        procedure="facial-liposuction"
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
