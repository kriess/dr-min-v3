<script lang="ts" setup>
import ContactMap from '~/components/contact-map.vue'

const year = computed(() => {
  const today = new Date()
  return today.getFullYear()
})
</script>

<template>
  <div class="site-footer mt-5">
    <v-footer class="site-footer">
      <v-container>
        <v-row no-gutters class="bio">
          <v-col cols="12" sm="12" md="4" class="bio__left-col">
            <div class="bio__name">
              <h3 class="text-h4">Caroline Min M.D.</h3>
              <h4 class="text-h6">Board Certified Plastic Surgeon</h4>
              <v-img
                class="asps-logo"
                width="60%"
                src="/img/misc/asps-logo-footer.png"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="4" class="bio__mid-col">
            <div class="bio__address">
              <div class="bio__location">
                <!--                <div class="text-h6 text-center mb-3">Practice Location</div>-->
                <contact-map></contact-map>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="4" class="bio__right-col">
            <div class="bio__address">
              <div class="bio__contact">
                <div>
                  <ul>
                    <li>547 E Union St.</li>
                    <li>Pasadena, California 91101</li>
                    <li>Tel: 626-737-9001</li>
                    <li>info@drcarolinemin.com</li>
                    <li class="separator"></li>
                    <li>
                      Parking spots are available in front of the office as well
                      as street parking and paid parking lots across the street
                      at Madison Avenue.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters class="copyright" align="center">
          <v-col cols="12" sm="12" md="9">
            <div class="copy">
              <p>
                Plastic Surgery Pasadena - Dr. Caroline Min, M.D., specializes
                in plastic surgery procedures serving Pasadena, Los Angeles,
                Beverly Hills, and the surrounding areas.
              </p>
              <!--              <p>-->
              <!--                Plastic Surgeon Dr. Caroline Min, M.D., serving Pasadena, Los-->
              <!--                Angeles, Beverly Hills, Glendale, Burbank, Studio City, La-->
              <!--                Canada, Arcadia, Altadena, San Gabriel, Alhambra, Monrovia,-->
              <!--                Duarte, Glendora, Covina, Azusa, and the surrounding areas.-->
              <!--              </p>-->
              &copy;
              {{ year }} Dr. Caroline Min, M.D. All Rights Reserved.
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="3">
            <div id="inline-badge"></div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<style lang="scss" scoped>
.site-footer {
  border-radius: $main-border-radius $main-border-radius 0 0;
  padding: 0;
  overflow: hidden;
}
:deep(.v-container) {
  padding: 0;
}
.bio {
  --bio-padding: 2vw;
  background-color: $secondary;
  .asps-logo {
    margin: 10px auto 0 auto;
  }
  .bio__left-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .bio__name {
    padding: var(--bio-padding);
    color: $text-on-dark;
    text-align: center;
  }
  .bio__address {
    padding: var(--bio-padding);
    background-color: $light-primary;
    height: 100%;
  }
  .bio__contact {
    display: flex;
    justify-content: space-evenly;
    li {
      list-style-type: none;
    }
    .separator {
      border: 1px solid $grey-lighten-2;
      height: 1px;
      margin: 20px 0;
    }
  }
}

.copyright {
  background-color: $primary;
  color: $text-on-dark;
  padding: 20px;
}
.copy {
  font-size: 90%;
  line-height: 1.1em;
  margin: 0 auto;
  max-width: $page-max-width;
  width: 100%;
  p {
    margin-bottom: 10px;
  }
}
</style>
