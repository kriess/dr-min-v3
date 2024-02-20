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
  <div class="home-intro">
    <div class="home-intro-content" ref="target">
      <div
        :class="targetIsVisible ? 'title-container visible' : 'title-container'"
      >
        <h2 class="title">Enhance your natural beauty</h2>
      </div>
      <div :class="targetIsVisible ? 'content visible' : 'content'">
        <p>
          Welcome to Dr. Min’s practice. Our philosophy is to focus on providing
          soft, natural results with aesthetic procedures tailored to each
          unique individual. Artistry and technical skill are combined with a
          feminine touch to ensure that you are never overdone, pulled too tight
          or unrecognizable when you look in the mirror. Enhance your natural
          beauty with a gentle, refined approach to be the best version of you.
          Turn back the clock and gain self confidence in a warm, caring
          environment where your safety and satisfaction are the top priority.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-intro {
  width: auto;
  padding: 4vw 0;
}

.home-intro-content {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.title-container {
  width: 38.5%;
  flex: 1 1 auto;
  padding: 0 0 0 0;
  text-align: right;
  opacity: 0;
  position: relative;
  left: -300px;
  transition: all 1s ease;

  &.visible {
    left: 0;
    opacity: 1;
  }
}

.title {
  font-weight: 300;
  color: $primary;
  font-size: clamp(1rem, 10vw, 3rem);
  line-height: clamp(1rem, 10vw, 3rem);
}

.content {
  color: #555;
  padding: 0 5vw 0 5vw;
  width: 61.5%;
  opacity: 0;
  position: relative;
  left: 300px;
  transition: all 1s ease;

  &.visible {
    left: 0;
    opacity: 1;
  }
}

@include upToSm {
  .home-intro {
    width: auto;
    padding: 10vw 0;
  }
  .home-intro-content {
    flex-direction: column;
  }
  .content {
    width: auto;
    opacity: 1;
    left: 0;
  }
  .title-container {
    width: auto;
    text-align: center;
    padding: 0 20px 20px 20px;
    opacity: 1;
    left: 0;
  }
}
</style>
