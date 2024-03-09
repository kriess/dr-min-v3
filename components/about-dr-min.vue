<script lang="ts" setup>
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
  <div class="about-dr-min">
    <!--    <h1 class="text-h2 text-center mb-10">Welcome to Our Site</h1>-->
    <div class="container">
      <v-row ref="target">
        <v-col cols="12" sm="12" md="4" class="text-center">
          <div :class="targetIsVisible ? 'head-shot visible' : 'head-shot'">
            <img
              class="headshot"
              width="100%"
              alt="Dr. Caroline Min - Pasadena female plastic surgeon"
              src="/img/headshots/min-white-coat.webp"
            />
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="1"></v-col>
        <v-col cols="12" sm="12" md="7">
          <div :class="targetIsVisible ? 'content visible' : 'content'">
            <h4 class="sub-title">About</h4>
            <h1 class="main-title">Dr. Caroline Min</h1>
            <p class="">
              Dr. Caroline Min is a female board certified plastic surgeon
              specializing in cosmetic surgery. She has completed additional
              fellowship training in aesthetic surgery and has the skills and
              expertise to help you achieve your goals for plastic surgery. Your
              consultation with Dr. Min will be thorough and unhurried. She and
              her staff will work closely with you to develop an individualized
              plan of treatment to meet your plastic surgery needs. Whether you
              are having a minor procedure or a more involved cosmetic surgery,
              our office strives to provide each patient with an exceptional
              experience in a warm, caring environment.
            </p>
            <p class="mt-2 pt-10">
              <v-btn
                variant="flat"
                rounded="sm"
                size="small"
                class="main-button temptext-h6"
                to="/biography"
              >
                Read More About Dr. Min
              </v-btn>
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-dr-min {
  width: auto;
  // background-color: $light-primary;
  // background-image: url('/img/misc/rotatesliders.jpg');
  // background-position: 10px 30%;
  padding: 50px 50px 100px 50px;

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
    font-size: clamp(0.5px, 40px, 100vw);
    font-weight: 500;
    // margin-bottom: 20px;
    text-decoration: none;
    text-align: left;
    line-height: 2em;
  }

  .main-button {
    text-transform: capitalize;
    background-color: $tertiary-action;
    color: #fff;
  }

  .title {
    text-align: center;
  }

  .container {
    margin: 0 auto;
    max-width: 800px;
  }

  .headshot {
    outline: 1px solid #ccc;
    filter: drop-shadow(3px 3px 4px #ccc);
    border-radius: $main-border-radius;
    max-width: 500px;
    margin: 0 auto;
  }

  .head-shot {
    opacity: 0;
    position: relative;
    left: -300px;
    transition: all 1s ease;

    &.visible {
      left: 0px;
      opacity: 1;
    }
  }

  .content {
    opacity: 0;
    position: relative;
    left: 300px;
    transition: all 1s ease;

    &.visible {
      left: 0px;
      opacity: 1;
    }
  }
}
</style>
