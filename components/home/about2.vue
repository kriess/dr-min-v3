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
      <div
        :class="targetIsVisible ? 'title-container visible' : 'title-container'"
      >
        <div class="head-shot">
          <img
            class="headshot"
            alt="Dr. Caroline Min, M.D. - board certified plastic surgeon"
            src="/img/headshots/min-white-coat.webp"
          />
        </div>
      </div>
      <div :class="targetIsVisible ? 'content visible' : 'content'">
        <h4 class="sub-title">About</h4>
        <h1 class="main-title">Dr. Caroline Min</h1>
        <p class="mb-5">
          Dr. Caroline Min is a board certified female plastic surgeon who is
          dedicated to achieving natural looking results with cosmetic surgery
          and non surgical procedures. With a wealth of expertise and
          experience, she is dedicated to helping you attain your aesthetic
          goals. Each consultation is characterized by a thorough and unhurried
          approach, ensuring that patients feel heard and understood. She will
          work closely with you to develop an individualized plan of treatment.
          Dr. Min will never recommend an unnecessary procedure and throughout
          her career, she has cultivated a reputation for integrity and honesty.
          Whether you are having a minor procedure or a more involved surgery,
          she strives to provide each patient with an exceptional experience.
          She will ensure that patients are fully educated and prepared before
          any procedure and will be there for you afterwards during every aspect
          of recovery.
        </p>
        <p class="">
          Dr. Min enjoys spending time with her two children and her two rescue
          dogs, Oreo and Willie. She is active and enjoys Crossfit workouts,
          hiking, and the great outdoors. She was born and raised in New York
          City but the Los Angeles area has been home since 2007.
        </p>
        <p class="mt-2 pt-10 main-button-container">
          <v-btn
            variant="elevated"
            rounded="sm"
            size="small"
            class="main-button"
            to="/biography"
          >
            Read More About Dr. Min
          </v-btn>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-about {
  width: auto;
  padding: 5vw 0;
}

.home-about-content {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.headshot {
  border-radius: 3px;
  width: clamp(200px, 80%, 400px);
}

.title-container {
  width: 38.5%;
  flex: 1 1 auto;
  text-align: right;
  opacity: 0;
  position: relative;
  left: -300px;
  transition: all 1s ease;

  &.visible {
    left: 0px;
    opacity: 1;
  }
}

.title {
  font-weight: 300;
  font-size: 3.2rem;
  color: $primary;
  line-height: 3.8rem;
}

.content {
  // border-left: 2px solid $primary;
  width: 61.5%;
  padding: 0 5vw;
  opacity: 0;
  position: relative;
  left: 300px;
  transition: all 1s ease;

  &.visible {
    left: 0px;
    opacity: 1;
  }
}

.sub-title {
  font-weight: 100;
  color: $tertiary-action;
  font-family: sans-serif;
  font-size: clamp(0.5px, 12px, 100vw);
  text-transform: uppercase;
  text-decoration: none;
  text-align: left;
  letter-spacing: 1em;
  line-height: 1em;
}

.main-title {
  color: $primary;
  font-weight: 300;
  font-size: 3.2rem;
  line-height: 4.8rem;
  //font-size: clamp(0.5px, 40px, 100vw);
  //font-weight: 500;
  // margin-bottom: 20px;
  text-decoration: none;
  text-align: left;
}

.main-button {
  text-transform: none;
  background-color: $tertiary-action;
  color: #fff;
}

@include upToSm {
  .home-about {
    width: auto;
    padding: 10vw 0;
  }
  .home-about-content {
    flex-direction: column;
  }
  .content {
    width: auto;
  }
  .title-container {
    width: auto;
    text-align: center;
    padding-bottom: 20px;
  }
  .main-button-container {
    text-align: center;
  }
}
</style>
