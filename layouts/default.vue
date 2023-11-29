<script lang="ts" setup>
import { useTheme } from 'vuetify'
import { THEME_NAMES as themes } from '~/helpers/themes'
const navItems = ref(useUtilsPrimaryItems)
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
    <v-toolbar color="white" flat>
      <div class="hidden-md-and-up mobile-meni-icon">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </div>

      <v-toolbar-items
        class="hidden-sm-and-down justify-space-between"
        style="width: 100%"
      >
        <v-btn
          v-for="item in navItems"
          :key="item.href"
          variant="plain"
          class="nav-btn"
          :to="item.href"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-row no-gutters class="header-bio align-center">
      <v-col class="hidden-sm-and-down" cols="12" sm="4">
        <v-sheet class="banner-item">
          <ul>
            <li>547 E Union St.</li>
            <li>Pasadena, California 91101</li>
          </ul>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <v-sheet class="banner-item">
          <div class="dr-title">Caroline Min M.D.</div>
          <div class="dr-sub-title">Board Certified Plastic Surgeon</div>
        </v-sheet>
      </v-col>
      <v-col class="hidden-sm-and-down" cols="12" sm="4">
        <v-sheet class="banner-item">
          <ul>
            <li>Tel: 626-737-9001</li>
            <li>Fax: 626-737-9020</li>
            <li>info@drcarolinemin.com</li>
          </ul>
        </v-sheet>
      </v-col>
    </v-row>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      color="primary"
    >
      <v-btn
        v-for="item in navItems"
        :key="item.href"
        variant="flat"
        color="primary"
        class="nav-btn drawer"
        :to="item.href"
        block
        rounded="0"
      >
        {{ item.title }}
      </v-btn>
      <!--      <div class="px-4 py-2">-->
      <!--        <v-icon v-if="themeIndex === 0" @click="setTheme(1)">-->
      <!--          mdi-weather-sunny-->
      <!--        </v-icon>-->
      <!--        <v-icon v-if="themeIndex === 1" @click="setTheme(0)">-->
      <!--          mdi-weather-night-->
      <!--        </v-icon>-->
      <!--      </div>-->

      <ul class="mt-10 text-center">
        <li>547 E Union St.</li>
        <li>Pasadena, California 91101</li>
      </ul>

      <ul class="mt-10 text-center">
        <li>Tel: 626-737-9001</li>
        <li>Fax: 626-737-9020</li>
        <li>info@drcarolinemin.com</li>
      </ul>
    </v-navigation-drawer>

    <v-main class="nuxt-slot">
      <slot />
    </v-main>

    <site-footer></site-footer>
  </v-app>
</template>

<style lang="scss" scoped>
.dr-min-app {
  max-width: $page-max-width;
  margin: 0 auto;
  :deep(.v-toolbar__content) {
    max-width: $page-max-width;
    margin: 0 auto;
    border-bottom: 1px solid #777;
  }
  :deep(.v-btn) {
    color: $primary;
  }
  :deep(.content-area) {
    background-color: $page-content-bg;
    padding: 0 5vw 0 5vw;
    border-radius: $main-border-radius;
  }

  .nuxt-slot {
    overflow: hidden;
  }

  a[href],
  a:link,
  a:active,
  a:visited {
    text-decoration: none;
  }

  .nav-btn {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 114%;
    letter-spacing: normal;
    &.drawer {
      text-align: left;
      :deep(.v-btn__content) {
        width: 100%;
        justify-content: left;
      }
    }
  }

  .dr-title {
    font-size: 2.75rem;
    font-weight: 700;
    color: $primary;
    line-height: 120%;
  }

  .dr-sub-title {
    font-size: 120%;
    font-weight: 600;
    color: $primary;
  }

  .header-bio {
    flex-grow: 0;
    border-bottom: 1px solid #777;
    align-items: center;
    text-align: center;
    li {
      list-style-type: none;
    }
  }

  .banner-item {
    padding-top: min(3vw, 30px);
    padding-bottom: min(3vw, 30px);
  }

  .mobile-meni-icon {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 10px;
  }
}
</style>
