<script setup>
const props = defineProps({
  navItem: { type: Object, default: {} },
})
const subMenuIsVisible = ref(false)

const subMenuCss = computed(() => {
  console.log(subMenuIsVisible)
  return subMenuIsVisible.value
    ? 'header-nav-drawer-menu__sub-menu visible'
    : 'header-nav-drawer-menu__sub-menu'
})
</script>

<template>
  <div class="header-nav-drawer-menu">
    <div class="header-nav-drawer-menu__content">
      <div class="drawer-nav-items__btn-container">
        <v-btn
          variant="flat"
          color="primary"
          class="nav-btn"
          :to="props.navItem.href"
          block
          size="large"
        >
          {{ props.navItem.title }}
        </v-btn>
      </div>
      <div class="drawer-nav-items__icon">
        <v-btn
          v-if="props.navItem.subNavItems"
          variant="flat"
          :icon="subMenuIsVisible ? 'mdi-menu-up' : 'mdi-menu-down'"
          color="primary"
          size="large"
          block
          @click="subMenuIsVisible = !subMenuIsVisible"
        ></v-btn>
      </div>
    </div>
    <div :class="subMenuCss">
      <v-btn
        v-for="(subNavItem, index) in props.navItem.subNavItems"
        :key="index"
        variant="plain"
        class="sub-nav-btn"
        :to="subNavItem.href"
        size="large"
        block
      >
        {{ subNavItem.title }}
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-nav-drawer-menu {
  width: 100%;
}

.header-nav-drawer-menu__content {
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.header-nav-drawer-menu__sub-menu {
  display: none;
  padding: 0 10px 10px 10px;

  &.visible {
    display: block;
  }
}

.nav-btn {
  padding-left: 5px;
  padding-right: 5px;
  opacity: 1;
  text-transform: capitalize;
  text-align: left;
  font-size: 100%;
  margin: 0;
  width: 80%;

  :deep(.v-btn__append) {
    margin: 0;
  }

  :deep(.v-icon) {
    zoom: 0.75;
  }

  :deep(.v-btn__content) {
    width: 100%;
    justify-content: left;
  }
}

.sub-nav-btn {
  padding-left: 5px;
  padding-right: 5px;
  opacity: 1;
  text-transform: capitalize;
  text-align: left;
  font-size: 100%;
  margin: 0;
  width: 100%;

  :deep(.v-btn__append) {
    margin: 0;
  }

  :deep(.v-icon) {
    zoom: 0.75;
  }

  :deep(.v-btn__content) {
    width: 100%;
    justify-content: left;
  }
}

.drawer-nav-items__btn-container {
  width: 80%;
}

.drawer-nav-items__icon {
  width: 20%;
}
</style>
