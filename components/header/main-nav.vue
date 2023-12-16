<script setup>
const navItems = useNavItems()
const drawer = ref(false)
const route = useRoute()

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
</script>

<template>
  <div class="header-main-nav">
    <div class="header-main-nav-content">
      <!--    <p>isService = {{ isService }}</p>-->
      <!--    <p>siteSection = {{ siteSection }}</p>-->
      <v-toolbar>
        <div class="hidden-md-and-up mobile-meni-icon">
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </div>

        <div class="hidden-sm-and-down" style="width: 100%; height: 100%">
          <div class="nav-container">
            <div>
              <nuxt-link to="/">
                <img
                  width="219"
                  height="50"
                  class="logo"
                  alt="Dr. Caroline Min - Board Certified Plastic Surgeon"
                  src="/img/header/logo.png"
                />
              </nuxt-link>
            </div>
            <v-toolbar-items>
              <template v-for="item in navItems">
                <template v-if="item.subNavItems">
                  <v-menu open-on-hover>
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
  </div>
</template>

<style lang="scss" scoped>
.header-main-nav {
  position: fixed;
  z-index: 2;
  width: 100%;
  box-shadow:
    0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);

  .header-main-nav-content {
    top: 0;
  }

  :deep(.v-toolbar) {
    background-color: $primary;
    color: #fff;
  }

  :deep(.v-toolbar__content) {
    max-width: $page-max-width;
    margin: 0 auto;
    border-bottom: 1px solid $primary;
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
    border-bottom: 2px solid #fff;
    opacity: 1;
  }

  .nav-btn {
    border-bottom: 2px solid transparent;
    border-top: 2px solid transparent;
    color: #fff;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 114%;
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

/* need to have dropdown menu classes at root level */
.sub-nav-list {
  width: auto;
}
.sub-nav-list-item {
  padding: 0;
  margin: 0;
}
.sub-nav-btn {
  text-transform: capitalize;
}
</style>
