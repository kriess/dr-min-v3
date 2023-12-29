<script setup>
const appConfig = useAppConfig();
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
  return selectors
})

const telephoneLink = computed(() => {
  return `tel:1-${appConfig.phone}`
})
</script>

<template>
  <div class="header-main-nav">
    <div class="header-main-nav-content">
      <v-toolbar height="80" :class="headerSelectors">
        <div class="hidden-sm-and-down" style="width: 100%; height: 100%">
          <div class="nav-container">
            <div @click="goHome" style="cursor: pointer">
              <div class="logo-name">Caroline Min, M.D</div>
              <div class="logo-description">
                Board Certified Plastic Surgeon
              </div>
            </div>
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
<!--              <v-btn density="compact" icon="mdi-cellphone" variant="plain" class="ctas__btn" :href="telephoneLink" title="Call to schedule a consultation"></v-btn>-->
<!--              <v-btn density="compact" icon="mdi-email" variant="plain" class="ctas__btn" href="/contact-info/" title="Email to schedule a consultation"></v-btn>-->
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

  .logo-name {
    white-space: nowrap;
    letter-spacing: 1.4px;
    font-weight: 500;
    font-size: 32px;
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
    transition: color 0.1s ease, background-color 0.5s ease;
    background-color: transparent;
    color: $tertiary-action;
  }

  :deep(.v-toolbar.scrolling) {
    background-color: #fff;
    box-shadow:
      0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12);
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
      :deep(.v-btn__content) {
        width: 100%;
        justify-content: left;
      }
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
</style>
