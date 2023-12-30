<script setup>
const appConfig = useAppConfig()
const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
  },
)

// computed
const imageBg = computed(() => {
  return {
    backgroundPosition: 'center center',
    backgroundImage: 'url(/img/home/header-1600x1200.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
})
</script>

<template>
  <div class="home-splash">
    <div class="bg-image" :style="imageBg"></div>
    <div class="mask">
      <div class="content" ref="target">
        <div :class="targetIsVisible ? 'ctas visible' : 'ctas'">
          <h1>Caroline Min, M.D.</h1>
          <h4>Board Certified Plastic Surgeon</h4>
        </div>
      </div>
    </div>
    <v-btn
      variant="elevated"
      :class="targetIsVisible ? 'ctas__btn visible' : 'ctas__btn'"
      href="/contact-info/"
      title="Email to schedule a consultation"
    >
      Schedule a Consultation
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.home-splash {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  aspect-ratio: 2/1;
  font-size: 200%;
  position: relative;
  box-shadow:
    0 2px 4px -1px rgba(0, 0, 0, 0.1),
    0 4px 5px 0 rgba(0, 0, 0, 0.1),
    0 1px 10px 0 rgba(0, 0, 0, 0.1);
}

.bg-image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, $header-opacity);
}

.content {
  display: grid;
  width: 100%;
  height: 100%;
}

.ctas {
  text-align: center;
  place-self: center;
  color: #fff;

  h1 {
    position: relative;
    top: -200px;
    left: 0px;
    transition: all 1s ease;
    opacity: 0;
    font-size: clamp(40px, 8vw, 70px);
    line-height: 6vw;
    font-weight: 300;
    text-shadow: 1px 1px 1px $font-primary-shadow;
  }

  h4 {
    position: relative;
    top: -200px;
    transition: all 1s 0.3s;
    opacity: 0;
    font-size: clamp(15px, 3vw, 25px);
    font-weight: 300;
    text-shadow: 1px 1px 1px $font-primary-shadow;
  }
}

.ctas__btn {
  position: relative;
  transition: all 1s 0.6s;
  opacity: 0;
  text-transform: none;
  background-color: $primary;
  color: #fff;
  width: fit-content;
  margin-bottom: 200px;
}

.ctas__btn.visible {
  opacity: 1;
  margin-bottom: 20px;
}

.ctas.visible {
  h1 {
    left: 0;
    top: 0;
    opacity: 1;
  }

  h4 {
    left: 0;
    top: 0;
    opacity: 1;
  }

  //.ctas__btn {
  //  left: 0;
  //  top: 0px;
  //  opacity: 1;
  //}
}

@include upToSm {
  .home-splash {
    aspect-ratio: 3/3;
  }
}
</style>
