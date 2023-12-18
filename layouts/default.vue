<script lang="ts" setup>
const drawer = ref(false)
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()
const siteDomain = runtimeConfig.public.siteDomain

useSchemaOrg([
  defineWebSite({
    name: 'Dr. Caroline Min, M.D. - Board Certified Plastic Surgeon',
    alternateName: "Dr. Caroline Min",
  }),
  defineLocalBusiness({
    "@type": [
      "Organization",
      "LocalBusiness",
      "MedicalBusiness",
      "PlasticSurgery"
    ],
    name: 'Dr. Caroline Min, M.D. - Board Certified Plastic Surgeon',
    priceRange: "Please call for pricing",
    telephone: "+1-" + appConfig.phone,
    additionalType: "https://en.wikipedia.org/wiki/Plastic_surgery",
    description: "Dr. Caroline Min is a board certified plastic surgeon specializing in cosmetic surgery; including Facelift, Breast Augmentation, Tummy Tuck, Mommy Makeover, and Breast Lift. Contact Dr. Caroline Min to schedule a consultation.",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        "opens": "09:00",
        "closes": "17:00"
      },
    ],
    address: {
      "@type": "PostalAddress",
      "streetAddress": "547 E Union St.",
      "addressLocality": "Pasadena",
      "addressRegion": "CA",
      "postalCode": "91101",
      "addressCountry": "United States",
    },
    geo: {
      "@type": "GeoCoordinates",
      "latitude": 37.293058,
      "longitude": -121.988331
    },
    // need to update
    // image: "TBD",
    // logo: "TBD",
  }),
])

useHead({
  titleTemplate: '%s - Dr. Caroline Min',
  link: [
    { rel: 'icon', href: '/icon.png' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap',
    },
  ],
  meta: [
    { name: 'mobile-web-app-capable', content: 'yes' },
    {
      name: 'apple-mobile-web-app-title',
      content: 'Dr. Caroline Min, MD | Pasadena Plastic Surgeon',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:title',
      content:
        'Dr. Caroline Min, MD is a highly qualified plastic surgeon with over 16 years of experience.',
    },
    {
      property: 'og:description',
      content:
        'Dr. Caroline Min is a board certified plastic surgeon specializing in cosmetic surgery; including Facelift, Breast Augmentation, Tummy Tuck, Mommy Makeover, and Breast Lift. Contact Dr. Caroline Min to schedule a consultation.',
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
        'Plastic Surgery Pasadena - Dr. Caroline Min, M.D., specializes in plastic surgery procedures serving Pasadena, Los Angeles, Beverly Hills, and the surrounding areas.',
    },
    {
      name: 'keywords',
      content:
        'Pasadena, Plastic Surgery, Plastic Surgeon, Dr. Caroline Min, Facelift, Tummy Tuck, Abdominoplasty, Eyelid Surgery, Eyelid Lift, Brow Lift, Blepharoplasty, Breast Augmentation, Liposuction, Facial Liposuction, Chin Surgery, Buccal Fat Removal, Inverted Nipple Correction, Labiaplasty, Mommy Makeover, Arm Lift, Thigh Lift, Otoplasty, Rhinoplasty, Nose Surgery,  Breast Lift, Breast Reduction, Male Breast Reduction, BOTOX, Microdermabrasion, Neck Lift, Buttock Augmentation, Body Contouring, Laser Hair Removal, Female Plastic Surgeon',
    },
  ],
})
</script>

<template>
  <v-app class="dr-min-app">
    <header-main-nav></header-main-nav>
    <div style="height: 64px"></div>
    <header-section-header></header-section-header>
    <!--
    <header-banner-contact></header-banner-contact>
    -->

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
    background-color: $page-content-bg;
    padding: 0 5vw 0 5vw;
    border-radius: $main-border-radius;
  }

  .nuxt-slot {
    width: 100%;
    max-width: $page-max-width;
    overflow: hidden;
    margin: 0 auto;
    padding: 0 10px;
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
