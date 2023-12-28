<script setup>
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
    backgroundImage: 'url(/img/raw/home/header-1600x1200.jpg)',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
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
          <v-btn variant="elevated" class="ctas__btn" href="/contact-info/" title="Email to schedule a consultation">
            Schedule a Consultation
          </v-btn>

        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.home-splash {
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
  background-color: rgba(0, 0, 0, 0.2);
}
.content {
  display: grid;
  width: 100%;
  aspect-ratio: 2/1;
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
    font-size: 6vw;
    line-height: 6vw;
    font-weight: 300;
    text-shadow: 1px 1px 1px #777;
  }
  h4 {
    position: relative;
    top: -200px;
    transition: all 1s 0.5s;
    opacity: 0;
    font-size: 1.5vw;
    font-weight: 300;
    margin-bottom: 40px;
    text-shadow: 1px 1px 1px #777;
  }
  .ctas__btn {
    position: relative;
    top: -200px;
    transition: all 1s 0.995s;
    opacity: 0;
    text-transform: none;
    background-color: $tertiary-action;
    color: #fff;
  }
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
  .ctas__btn {
    left: 0;
    top: 0;
    opacity: 1;
  }
}


</style>
