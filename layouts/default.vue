<script lang="ts" setup>
import { useTheme } from 'vuetify'
import { THEME_NAMES as themes } from '~/helpers/themes'
const drawer = ref(false)
const theme = useTheme()
const themeIndex = ref(0)
// console.log(themes)

const setTheme = (index: number) => {
  console.log(themes)
  const selectedTheme = themes[index]
  console.log(selectedTheme)
  theme.global.name.value = selectedTheme.value
  themeIndex.value = index
}
// console.log('setTheme', setTheme)

useHead({
  titleTemplate: 'Dr. Caroline Min - %s',
  link: [
    { rel: 'icon', href: '/icon.png' },
    { rel: 'canonical', href: 'https://drcarolinemin.com/' },
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
        'Dr. Caroline Min, MD is a board certified plastic surgeon specializing in cosmetic surgery. She has completed additional fellowship training in aesthetic surgery and has the skills and expertise to help you achieve your goals for plastic surgery.',
    },
    {
      property: 'og:image',
      content: 'https://drcarolinemin.com/img/headshots/dr-min.jpg',
    },
    {
      property: 'og:url',
      content: 'https://drcarolinemin.com/',
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
        'Pasadena, Plastic Surgery, Plastic Surgeon, Dr. Caroline Min MD, Facelift, Tummy Tuck, Abdominoplasty, Eyelid Surgery, Eyelid Lift, Brow Lift, Blepharoplasty, Breast Augmentation, Liposuction, Facial Liposuction, Chin Surgery, Buccal Fat Removal, Inverted Nipple Correction, Labiaplasty, Mommy Makeover, Arm Lift, Thigh Lift, Otoplasty, Rhinoplasty, Nose Surgery,  Breast Lift, Breast Reduction, Male Breast Reduction, BOTOX, Microdermabrasion, Neck Lift, Buttock Augmentation, Body Contouring, Laser Hair Removal, Female Plastic Surgeon',
    },
  ],
})
</script>

<template>
  <v-app class="dr-min-app">
    <header-main-nav></header-main-nav>
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
