<script setup>
const appConfig = useAppConfig()
</script>

<template>
  <div class="header-banner-contact">
    <v-row no-gutters class="header-bio align-center">
      <v-col class="hidden-sm-and-down" cols="12" sm="4">
        <v-sheet class="banner-item">
          <ul>
            <li>{{ appConfig.streetAddress }}</li>
            <li>Pasadena, California 91101</li>
          </ul>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <v-sheet class="banner-item">
          <h1 class="dr-title">Caroline Min MD</h1>
          <h2 class="dr-sub-title">Board Certified Female Plastic Surgeon</h2>
        </v-sheet>
      </v-col>
      <v-col class="hidden-sm-and-down" cols="12" sm="4">
        <v-sheet class="banner-item">
          <ul>
            <li>Tel: 626-737-9001</li>
            <li>Fax: 626-737-9020</li>
            <li>info@drcarolinemin.com</li>
          </ul>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.header-banner-contact {
  width: 100%;

  .header-bio {
    flex-grow: 0;
    border-bottom: 1px solid #777;
    align-items: center;
    text-align: center;

    li {
      list-style-type: none;
    }
  }

  .banner-item {
    padding-top: min(3vw, 30px);
    padding-bottom: min(3vw, 30px);
  }

  .dr-title {
    font-size: 2.75rem;
    font-weight: 700;
    color: $primary;
    line-height: 120%;
  }

  .dr-sub-title {
    font-size: 120%;
    font-weight: 600;
    color: $primary;
  }
}
</style>
