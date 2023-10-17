<script lang="ts" setup>
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
          <v-col cols="12" sm="12" md="5" class="bio__left-col">
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
          <v-col cols="12" sm="12" md="7" class="bio__right-col">
            <div class="bio__address">
              <div class="bio__contact">
                <div class="text-h6">Practice Location</div>
                <div>
                  <ul>
                    <li>547 E Union St.</li>
                    <li>Pasadena, California 91101</li>
                    <li>info@mysite.com</li>
                    <li class="separator"></li>
                    <li>Tel: 123-456-7890</li>
                    <li>Fax: 123-456-7890</li>
                  </ul>
                </div>
                <!--                <div>-->
                <!--                  <ul>-->
                <!--                    <li>Saint Francis Hospital</li>-->
                <!--                    <li>500 Terry Francine Street</li>-->
                <!--                    <li>San Francisco, CA 94158</li>-->
                <!--                    <li>info@mysite.com</li>-->
                <!--                    <li class="separator"></li>-->
                <!--                    <li>Tel: 123-456-7890</li>-->
                <!--                    <li>Fax: 123-456-7890</li>-->
                <!--                  </ul>-->
                <!--                </div>-->
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters class="copyright">
          <v-col cols="12" sm="12">
            <div class="copy">
              <!-- <p>
          Plastic Surgeon Dr. Caroline Min, M.D., serving Pasadena, Los Angeles,
          Beverly Hills, Glendale, Burbank, Studio City, La Canada, Arcadia,
          Altadena, San Gabriel, Alhambra, Monrovia, Duarte, Glendora, Covina,
          Azusa, and the surrounding areas.
        </p>
        <p>
          Dr. Caroline Min, M.D. | 50 Bellefontaine Street, Suite #104 Pasadena,
          CA 91105 | Tel: 626-304-6300 | www.drcarolinemin.com
        </p> -->
              &copy; {{ year }}
              Caroline Min, M.D. All Rights Reserved.
            </div>
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
  --bio-padding: 2vw 10px 2vw 10px;
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
  margin: 0 auto;
  max-width: $page-max-width;
  text-align: center;
  width: 100%;
  p {
    margin-bottom: 20px;
  }
}
</style>
