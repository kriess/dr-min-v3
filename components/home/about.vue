<script setup>
const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
  },
)
</script>

<template>
  <div class="home-about">
    <div class="home-about-content" ref="target">
      <div class="content">
        <h4 class="sub-title">About</h4>
        <h1 class="main-title">Dr. Caroline Min</h1>
        <p class="">
          Dr. Caroline Min is a board certified female plastic surgeon
          specializing in cosmetic surgery. She has completed additional
          fellowship training in aesthetic surgery and has the skills and
          expertise to help you achieve your goals for plastic surgery. Your
          consultation with Dr. Min will be thorough and unhurried. She and her
          staff will work closely with you to develop an individualized plan of
          treatment to meet your plastic surgery needs. Whether you are having a
          minor procedure or a more involved cosmetic surgery, our office
          strives to provide each patient with an exceptional experience in a
          warm, caring environment.
        </p>
      </div>
      <div class="title-container">
        <div :class="targetIsVisible ? 'head-shot visible' : 'head-shot'">
          <img
            class="headshot"
            width="100%"
            alt="Dr. Caroline Min, MD - board certified plastic surgeon"
            src="/img/headshots/suit-transparent-bg.webp"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-about {
  width: auto;
  padding: 0;
}

.home-about-content {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.title-container {
  width: 38.5%;
  flex: 1 1 auto;
  padding: 5vw 5vw 5vw 0;
  text-align: right;
}

.title {
  font-weight: 300;
  font-size: 3.2rem;
  color: $primary;
  line-height: 3.8rem;
}

.content {
  width: 61.5%;
  padding: 5vw 0 5vw 5vw;
}

.sub-title {
  font-weight: 100;
  color: $tertiary-action;
  font-family: sans-serif;
  font-size: clamp(0.5px, 12px, 100vw);
  text-transform: uppercase;
  text-decoration: none;
  text-align: right;
  letter-spacing: 1em;
  line-height: 1em;
}

.main-title {
  color: $primary;
  font-size: clamp(0.5px, 40px, 100vw);
  font-weight: 500;
  // margin-bottom: 20px;
  text-decoration: none;
  text-align: right;
  line-height: 2em;
}
</style>
