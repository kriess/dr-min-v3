<script lang="ts" setup>
//
</script>

<template>
  <div class="about-dr-min">
    <h1 class="text-h2 text-center mb-10">Meet Dr. Min</h1>
    <div class="container">
      <v-row>
        <v-col cols="12" sm="12" md="4">
          <v-img
            class="headshot"
            width="100%"
            cover
            src="/img/headshots/dr-min.jpg"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="12" md="1"></v-col>
        <v-col cols="12" sm="12" md="7">
          Dr. Caroline Min is a board certified plastic surgeon specializing in
          cosmetic surgery. She has completed additional fellowship training in
          aesthetic surgery and has the skills and expertise to help you achieve
          your goals for plastic surgery. Your consultation with Dr. Min will be
          thorough and unhurried. She and her staff will work closely with you
          to develop an individualized plan of treatment to meet your plastic
          surgery needs. Whether you are having a minor procedure or a more
          involved cosmetic surgery, our office strives to provide each patient
          with an exceptional experience in a warm, caring environment.

          <p class="mt-10 pt-10">
            <v-btn color="primary" class="text-h6" to="/biography">
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
  background-color: $light-primary;
  padding: 50px;
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
  }
}
</style>
