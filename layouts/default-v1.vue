<script lang="ts" setup>
import { useTheme } from 'vuetify'
import { THEME_NAMES as themes } from '~/helpers/themes'
const navItems = ref(useUtilsPrimaryItems)
const drawer = ref(false)
const theme = useTheme()
const themeIndex = ref(0)
console.log(themes)

const setTheme = (index: number) => {
  console.log(themes)
  const selectedTheme = themes[index]
  console.log(selectedTheme)
  theme.global.name.value = selectedTheme.value
  themeIndex.value = index
}
console.log('setTheme', setTheme)

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
  <VApp class="dr-min-app">
    <VCard flat rounded="0">
      <VToolbar color="white" flat>
        <VAppBarNavIcon
          class="hidden-md-and-up"
          @click="drawer = !drawer"
        ></VAppBarNavIcon>
        <!-- <VToolbarTitle>
        <NuxtLink to="/" class="toolbar-title">Dr. Caroline Min, M.D.</NuxtLink>
        </VToolbarTitle> -->

        <VToolbarItems
          class="hidden-sm-and-down justify-space-between"
          style="width: 100%"
        >
          <VBtn
            v-for="item in navItems"
            :key="item.href"
            variant="plain"
            class="nav-btn"
            :to="item.href"
          >
            {{ item.title }}
          </VBtn>
        </VToolbarItems>
      </VToolbar>

      <VRow no-gutters class="header-bio align-center">
        <v-col class="hidden-sm-and-down" cols="12" sm="4">
          <v-sheet class="py-10">
            <ul>
              <!--              <li>Hospital Name</li>-->
              <li>547 E Union St.</li>
              <li>Pasadena, California 91101</li>
            </ul>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-sheet class="py-10">
            <div class="dr-title">Caroline Min M.D.</div>
            <div class="dr-sub-title">Board Certified Plastic Surgeon</div>
          </v-sheet>
        </v-col>
        <v-col class="hidden-sm-and-down" cols="12" sm="4">
          <v-sheet class="py-10">
            <ul>
              <li>Tel: 6-304-6300</li>
              <li>info@drcarolinemin.com</li>
            </ul>
          </v-sheet>
        </v-col>
      </VRow>
    </VCard>

    <VNavigationDrawer v-model="drawer" temporary color="primary">
      <VBtn
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
      </VBtn>
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
        <li>info@drcarolinemin.com</li>
      </ul>
    </VNavigationDrawer>

    <VMain>
      <slot />
    </VMain>

    <!-- <SiteFooter></SiteFooter> -->
    <!-- <DevInfo></DevInfo> -->
  </VApp>
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
    flex: 1;
    color: $primary;
  }
  :deep(.content-area) {
    background-color: $page-content-bg;
    padding: 0 15% 50px 15%;
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
    font-size: 300%;
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
    border-bottom: 1px solid #777;
    align-items: center;
    text-align: center;
    li {
      list-style-type: none;
    }
  }
}
</style>
