<script setup>
const appConfig = useAppConfig()
const navItems = useNavItems()
const drawer = ref(false)
const route = useRoute()
const router = useRouter()
const { x, y } = useWindowScroll({ behavior: 'smooth' })
const goHome = () => {
  router.push({
    path: '/',
  })
}

// ----- computed ---------------------------
const path = computed(() => {
  return route.fullPath
})
const isHome = computed(() => {
  return route.fullPath === '/'
})

const isService = computed(() => {
  return route.fullPath.includes('/services')
})

const headerSelectors = computed(() => {
  const selectors = []
  if (y.value > 50) {
    selectors.push('scrolling')
  }
  if (!isHome.value && !isService.value) {
    selectors.push('not-home-or-service')
  }
  return selectors
})
</script>

<template>
  <div class="header-main-nav">
    <div class="header-main-nav-content">
      <v-toolbar height="80" :class="headerSelectors">
        <div class="" style="width: 100%; height: 100%">
          <div class="nav-container">
            <div @click="goHome" style="cursor: pointer">
              <div class="logo-name">Caroline Min, M.D</div>
              <div class="logo-description">
                Board Certified Plastic Surgeon
              </div>
            </div>
            <v-toolbar-items class="hidden-sm-and-down">
              <template v-for="item in navItems">
                <template v-if="item.subNavItems">
                  <v-menu open-on-hover close-on-content-click>
                    <template v-slot:activator="{ props }">
                      <v-btn
                        :active="path.includes(item.href)"
                        variant="plain"
                        class="nav-btn"
                        v-bind="props"
                        :to="item.href"
                        append-icon="mdi-menu-down"
                      >
                        {{ item.title }}
                      </v-btn>
                    </template>
                    <v-list class="sub-nav-list">
                      <v-list-item
                        class="sub-nav-list-item"
                        v-for="(subNavItem, index) in item.subNavItems"
                        :key="index"
                        :value="index"
                      >
                        <v-list-item-title>
                          <v-btn
                            variant="plain"
                            class="sub-nav-btn"
                            :to="subNavItem.href"
                          >
                            {{ subNavItem.title }}
                          </v-btn>
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template>
                <template v-else>
                  <v-btn variant="plain" class="nav-btn" :to="item.href">
                    {{ item.title }}
                  </v-btn>
                </template>
              </template>
              <!--              <v-btn density="compact" icon="mdi-cellphone" variant="plain" class="ctas__btn" :href="telephoneLink" title="Call to schedule a consultation"></v-btn>-->
              <!--              <v-btn density="compact" icon="mdi-email" variant="plain" class="ctas__btn" href="/contact-info/" title="Email to schedule a consultation"></v-btn>-->
            </v-toolbar-items>
            <div class="hidden-md-and-up mobile-meni-icon">
              <v-app-bar-nav-icon
                @click="drawer = !drawer"
              ></v-app-bar-nav-icon>
            </div>
          </div>
        </div>
      </v-toolbar>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      class="drawer"
      temporary
      location="right"
      color="primary"
      width="350"
    >
      <div class="drawer-content">
        <div class="drawer-header">
          <div class="drawer-branding">
            <div class="logo-name">Caroline Min, M.D</div>
            <div class="logo-description">Board Certified Plastic Surgeon</div>
          </div>
          <v-btn
            variant="flat"
            density="compact"
            icon="mdi-menu-right"
            color="primary"
            size="large"
            @click="drawer = !drawer"
          ></v-btn>
        </div>

        <v-btn
          variant="flat"
          color="primary"
          class="nav-btn drawer"
          to="/"
          block
          size="large"
        >
          Home
        </v-btn>

        <div v-for="item in navItems" class="drawer-nav-items">
          <header-nav-drawer-menu :nav-item="item"></header-nav-drawer-menu>
        </div>

        <ul class="mt-10 text-center">
          <li>547 E Union St.</li>
          <li>Pasadena, California 91101</li>
        </ul>

        <ul class="mt-10 text-center">
          <li>Tel: 626-737-9001</li>
          <li>Fax: 626-737-9020</li>
          <li>info@drcarolinemin.com</li>
        </ul>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<style lang="scss" scoped>
.header-main-nav {
}

.header-main-nav-content {
  position: fixed;
  z-index: 3;
  width: 100%;
  top: 0;
}

.mobile-meni-icon {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.logo-name {
  white-space: nowrap;
  letter-spacing: 1.2px;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
}

.logo-description {
  white-space: nowrap;
  letter-spacing: 1.1px;
  font-size: 14px;
  font-weight: 500;
  margin-top: -10px;
  margin-left: 2px;
}

:deep(.v-toolbar) {
  transition:
    color 0.1s ease,
    background-color 0.5s ease;
  background-color: transparent;
  color: $font-primary;
  text-shadow: 1px 1px 1px $font-primary-shadow;
}

:deep(.v-toolbar.scrolling) {
  background-color: #fff;
  color: $primary;
  text-shadow: 1px 1px 1px #eee;
  box-shadow:
    0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}

:deep(.v-toolbar.not-home-or-service) {
  background-color: #fff;
  color: $primary;
  text-shadow: 1px 1px 1px #eee;
}

:deep(.v-toolbar__content) {
  max-width: $page-max-width;
  margin: 0 auto;
  padding: 0 10px;
}

.logo {
  display: block;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 100%;
}

:deep(.v-btn--active) {
  opacity: 1;
}

.nav-btn {
  padding-left: 5px;
  padding-right: 5px;
  margin-left: 5px;
  margin-right: 5px;
  opacity: 1;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.5vw;
  letter-spacing: normal;

  :deep(.v-btn__append) {
    margin: 0;
  }

  :deep(.v-icon) {
    zoom: 0.75;
  }

  &.drawer {
    text-align: left;
    font-size: 100%;
    margin: 0;
    width: 80%;

    :deep(.v-btn__content) {
      width: 100%;
      justify-content: left;
    }
  }
}

.ctas__btn {
  margin: 0 5px;
}

/* need to have dropdown menu classes at root level */
.sub-nav-list {
  width: auto;
}

.sub-nav-list-item {
  padding: 0;
  margin: 0;
}

.sub-nav-btn {
  font-weight: 700;
  opacity: 1;
  color: $primary;
  text-transform: capitalize;
}

/* drawer */
.drawer-content {
  padding: 0 5px;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 5px;
}

.drawer-branding {
  margin: 0px;

  .logo-name {
    font-size: 30px;
    line-height: 50px;
  }

  .logo-description {
    font-size: 12px;
  }
}

@include upToMd {
  .logo-name {
    font-size: 30px;
  }

  .logo-description {
    font-size: 12px;
  }
}

@include upToSm {
  .logo-name {
    font-size: 26px;
  }

  .logo-description {
    font-size: 11px;
  }
}
</style>
