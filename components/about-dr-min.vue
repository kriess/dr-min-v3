<script lang="ts" setup>
//
</script>

<template>
  <div class="about-dr-min">
    <!--    <h1 class="text-h2 text-center mb-10">Welcome to Our Site</h1>-->
    <div class="container">
      <v-row>
        <v-col cols="12" sm="12" md="4" class="text-center">
          <v-img
            class="headshot"
            width="100%"
            cover
            src="/img/headshots/min-white-coat.jpg"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="12" md="1"></v-col>
        <v-col cols="12" sm="12" md="7">
          <div class="sub-title">About</div>
          <div class="main-title">Dr. Caroline Min</div>
          <p>
            Dr. Caroline Min is a board certified plastic surgeon specializing
            in cosmetic surgery. She has completed additional fellowship
            training in aesthetic surgery and has the skills and expertise to
            help you achieve your goals for plastic surgery. Your consultation
            with Dr. Min will be thorough and unhurried. She and her staff will
            work closely with you to develop an individualized plan of treatment
            to meet your plastic surgery needs. Whether you are having a minor
            procedure or a more involved cosmetic surgery, our office strives to
            provide each patient with an exceptional experience in a warm,
            caring environment.
          </p>
          <p class="mt-2 pt-10">
            <v-btn
              color="primary"
              variant="elevated"
              rounded="sm"
              size="small"
              class="main-button temptext-h6"
              to="/biography"
            >
              Read More About Dr. Min
            </v-btn>
          </p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-dr-min {
  width: auto;
  // background-color: $light-primary;
  background-image: url('/img/misc/rotatesliders.webp');
  padding: 50px;
  .sub-title {
    font-weight: 100;
    color: #333;
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
    font-weight: bold;
    // margin-bottom: 20px;
    text-decoration: none;
    text-align: left;
    line-height: 2em;
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
}
</style>
