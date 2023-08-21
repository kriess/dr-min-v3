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
  titleTemplate: '%s - Dr Min',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap',
    },
  ],
})
</script>

<template>
  <v-app class="dr-min-app">
    <v-toolbar color="white" flat>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
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
            <li>Hospital Name</li>
            <li>50 Bellefontaine Street, Suite #104</li>
            <li>Pasadena, CA 91105</li>
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
            <li>Tel: 626-304-6300</li>
            <li>info@mysite.com</li>
          </ul>
        </v-sheet>
      </v-col>
    </v-row>

    <v-navigation-drawer v-model="drawer" temporary color="primary">
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
      <div class="px-4 py-2">
        <v-icon v-if="themeIndex === 0" @click="setTheme(1)">
          mdi-weather-sunny
        </v-icon>
        <v-icon v-if="themeIndex === 1" @click="setTheme(0)">
          mdi-weather-night
        </v-icon>
      </div>

      <ul class="mt-10 text-center">
        <li>Hospital Name</li>
        <li>50 Bellefontaine Street, Suite #104</li>
        <li>Pasadena, CA 91105</li>
      </ul>

      <ul class="mt-10 text-center">
        <li>Tel: 626-304-6300</li>
        <li>info@mysite.com</li>
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
}
</style>
