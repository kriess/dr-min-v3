<script setup>
const appConfig = useAppConfig()
const navItems = useNavItems()
const drawer = ref(false)
const route = useRoute()
const router = useRouter()
const { x, y } = useWindowScroll({ behavior: 'smooth' })

console.log(y.value)

const goHome = () => {
  router.push({
    path: '/',
  })
}

// ----- methods ----------------------------

// ----- computed ---------------------------
const path = computed(() => {
  return route.fullPath
})

const isHome = computed(() => {
  return route.fullPath === "/"
})

const isService = computed(() => {
  return route.fullPath.includes('/services')
})

const siteSection = computed(() => {
  const sections = route.fullPath.split('/')
  return sections[1]
})

const headerSelectors = computed(() => {
  const selectors = []
  if (y.value > 50) {
    selectors.push('scrolling')
  }
  if (!isHome && !isService) {
    selectors.push('not-home-or-service')
  }
  return selectors
})

const headerContentSelectors = computed(() => {
  const selectors = ['header-main-nav-content']
  if (y.value > 30) {
    selectors.push('scrolling')
  }
  if () {

  }
  return selectors
})

const telephoneLink = computed(() => {
  return `tel:1-${appConfig.phone}`
})
</script>

<template>
  <div class="header-main-nav">
    <div :class="headerContentSelectors">
      <div class="header-container">
        <div @click="goHome" style="cursor: pointer">
          <div class="logo-name">Caroline Min, M.D</div>
          <div class="logo-description">Board Certified Female Plastic Surgeon</div>
        </div>
        <div class="ctas">
          <v-btn variant="plain" class="ctas__btn" :href="telephoneLink">
            {{ appConfig.phone }}
          </v-btn>
          <v-btn variant="tonal" class="ctas__btn" href="/contact-info/">
            Schedule a Consultation
          </v-btn>
        </div>
      </div>

      <v-toolbar :class="headerSelectors" density="compact">
        <div class="hidden-sm-and-down" style="width: 100%; height: 100%">
          <div class="nav-container">
            <v-toolbar-items>
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
            </v-toolbar-items>
          </div>
        </div>
      </v-toolbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-main-nav {
  position: fixed;
  z-index: 3;
  width: 100%;
  top: 0;

  .header-main-nav-content {
    transition:
      color 0.1s ease,
      background-color 0.5s ease;
    background-color: transparent;
    color: $primary;

    &.scrolling {
      // background: linear-gradient(0deg, rgba(255, 255, 255, 0) 25%, white 100%);
      //background-color: $primary;
      background-color: #fff;
      // background: linear-gradient($primary, $secondary);
      // color: #fff;
      box-shadow:
        0 2px 4px -1px rgba(0, 0, 0, 0.2),
        0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12);
    }
  }

  .logo-name {
    // text-shadow: 1px 1px 1px #333;
    letter-spacing: 1.4px;
    font-weight: 500;
    font-size: 32px;
  }

  .logo-description {
    letter-spacing: 1.1px;
    font-size: 15px;
    font-weight: 500;
    margin-top: -10px;
    margin-left: 2px;
  }

  :deep(.v-toolbar__content) {
    max-width: $page-max-width;
    margin: 0 auto;
    padding: 0 10px;
  }

  .logo {
    display: block;
  }

  .header-container {
    padding: 10px 20px 10px 20px;
    color: $primary;
    text-shadow: 0px 0px 1px $secondary;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    height: 100%;
  }

  .nav-container {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    height: 100%;
  }

  :deep(.v-btn--active) {
    opacity: 1;
  }

  :deep(.v-toolbar) {
    // background-color: rgba(167, 93, 93, 0.05);
    background-color: transparent;
  }

  .nav-btn {
    //background-color: rgba(0, 0, 0, 0.05);
    //border-radius: $border-radius-v3;
    color: $primary;
    //padding-left: 5px;
    //padding-right: 5px;
    //margin-left: 5px;
    //margin-right: 5px;
    opacity: 1;
    //border-radius: $border-radius-v3;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 1.2rem;
    letter-spacing: normal;

    &.v-btn--active {
      opacity: 1;
      background-color: rgba(167, 93, 93, 0.09);
    }

    :deep(.v-btn__append) {
      margin: 0;
    }

    :deep(.v-icon) {
      zoom: 0.75;
    }

    &.drawer {
      text-align: left;

      :deep(.v-btn__content) {
        width: 100%;
        justify-content: left;
      }
    }
  }
}

a.telephone-link:link {
  color: #fff;
  text-decoration: none;
}

.ctas {
}

.ctas__btn {
  opacity: 1;
  text-transform: none;
  color: $primary;
  // border-radius: $border-radius-v3;
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
</style>
