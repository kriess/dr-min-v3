<script lang="ts" setup>
const drawer = ref(false)
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()
const siteDomain = runtimeConfig.public.siteDomain
const mainTitle =
  'Plastic & Cosmetic Surgery in Pasadena, CA | Dr Caroline Min MD'

useSchemaOrg([
  defineWebSite({
    name: mainTitle,
    alternateName: 'Dr. Caroline Min',
  }),
  defineLocalBusiness({
    '@type': [
      'Organization',
      'LocalBusiness',
      'MedicalBusiness',
      'PlasticSurgery',
    ],
    name: mainTitle,
    image: {
      '@type': 'ImageObject',
      url: siteDomain + '/img/headshots/min-white-coat.jpg',
      height: 439,
      width: 292,
    },
    priceRange: 'Please call for pricing',
    telephone: '+1-' + appConfig.phone,
    additionalType: 'https://en.wikipedia.org/wiki/Plastic_surgery',
    description:
      'Dr. Caroline Min is a female board certified plastic surgeon based in Pasadena specializing in cosmetic surgery; including Facelift, Breast Augmentation, Tummy Tuck, Mommy Makeover, and Breast Lift. Contact Dr. Caroline Min to schedule a consultation.',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      ...appConfig.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.147560470457535,
      longitude: -118.13910802883551,
    },
    // need to update
    // image: "TBD",
    // logo: "TBD",
  }),
])

useHead({
  bodyAttrs: {
    itemtype: 'https://schema.org/WebPage',
    itemscope: 'itemscope',
  },
  htmlAttrs: {
    lang: 'en',
  },
  // <link rel="manifest" href="manifest.json" />
  titleTemplate: '%s in Pasadena, CA | Dr Caroline Min MD',
  link: [
    { rel: 'icon', href: '/img/icon.png' },
    { rel: 'manifest', href: '/manifest.webmanifest' },
  ],
  meta: [
    { name: 'theme-color', content: '#D3756B' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    {
      name: 'apple-mobile-web-app-title',
      content: mainTitle,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: mainTitle,
    },
    {
      property: 'og:description',
      content:
        'Dr. Caroline Min is a female board certified plastic surgeon specializing in plastic and cosmetic surgery throughout the Pasadena, CA area. Click or call now!',
    },
    {
      property: 'og:image',
      content: siteDomain + '/img/headshots/dr-min.jpg',
    },
    {
      property: 'og:url',
      content: siteDomain,
    },
    {
      property: 'og:site_name',
      content: mainTitle,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    { property: 'og:image:width', content: '150' },
    { property: 'og:image:height', content: '200' },
    { property: 'og:image:type', content: 'image/jpg' },
    { property: 'og:locale', content: 'en_US' },
    {
      name: 'description',
      content:
        'Dr. Caroline Min is a female board certified plastic surgeon specializing in plastic and cosmetic surgery throughout the Pasadena, CA area. Click or call now!',
    },
    {
      name: 'keywords',
      content:
        'Plastic Surgery, Cosmetic Surgery, Plastic Surgeon, Facelift, Tummy Tuck, Abdominoplasty, Eyelid Surgery, Eyelid Lift, Brow Lift, Blepharoplasty, Breast Augmentation, Liposuction, Facial Liposuction, Chin Surgery, Buccal Fat Removal, Inverted Nipple Correction, Labiaplasty, Mommy Makeover, Arm Lift, Thigh Lift, Otoplasty, Rhinoplasty, Nose Surgery,  Breast Lift, Breast Reduction, Male Breast Reduction, BOTOX, Microdermabrasion, Neck Lift, Buttock Augmentation, Body Contouring, Laser Hair Removal, Female Plastic Surgeon',
    },
  ],
})
</script>

<template>
  <v-app class="dr-min-app">
    <header-main-nav></header-main-nav>
    <v-main class="nuxt-slot">
      <slot />
    </v-main>
    <site-footer></site-footer>
  </v-app>
</template>

<style lang="scss" scoped>
html {
  scroll-behavior: smooth;
}

.dr-min-app {
  margin: 0 auto;

  :deep(.content-area) {
    padding: 0 5vw 0 5vw;
  }

  .nuxt-slot {
    width: 100%;
    max-width: $page-max-width;
    overflow: hidden;
    margin: 0 auto;
  }

  a[href],
  a:link,
  a:active,
  a:visited {
    text-decoration: none;
  }

  .mobile-meni-icon {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 10px;
  }
}
</style>
