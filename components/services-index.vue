<script lang="ts" setup>
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-props

// reactive data
const colors = ref([
  'indigo',
  'warning',
  'pink darken-2',
  'red lighten-1',
  'deep-purple accent-4',
])
const slides = ref(['First', 'Second', 'Third', 'Fourth', 'Fifth'])
const cycleInterval = ref(6000)

// computed
// const galleries = computed(() => {
//   return props.title + ' with some more text'
// })

// methods
// const changeView = (view) => {
//   console.log(view)
// }
</script>

<template>
  <div class="sevices-carousel">
    Dr. Min performs a wide array of both surgical and non-surgical plastic /
    cosmetic procedures, including:

    <table class="index-table">
      <tbody>
        <tr>
          <td class="header-text">Face</td>
          <td class="header-text">Breast</td>
        </tr>
        <tr>
          <td>
            <ul>
              <li><a href="blepharoplasty.php">Eyelid lift</a></li>
              <li><a href="foreheadlift.php">Browlift</a></li>
              <li><a href="rhinoplasty.php">Rhinoplasty</a></li>
              <li><a href="facelift.php">Facelift</a></li>
              <li><a href="otoplasty.php">Otoplasty</a></li>
              <li><a href="necklift.php">Neck Lift</a></li>
              <li><a href="facelipo.php">Facial Liposuction</a></li>
              <li><a href="chinsurgery.php">Chin Surgery</a></li>
              <li><a href="buccal.php">Buccal Fat Removal</a></li>
            </ul>
          </td>
          <td>
            <ul>
              <li><a href="breast-augmentation.php">Breast Augmentation</a></li>
              <li><a href="breast-lift.php">Breast Lift</a></li>
              <li><a href="breast-reduction.php">Breast Reduction</a></li>
              <li>
                <a href="breast-augmentation-revision.php">
                  Breast Augmentation Revision
                </a>
              </li>
              <li>
                <a href="breast-reduction-male.php">Male Breast Reduction</a>
              </li>
              <li>
                <a href="breast-inverted-nipple.php">
                  Inverted Nipple Correction
                </a>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td class="header-text">Body</td>
          <td class="header-text">Skin</td>
        </tr>
        <tr>
          <td>
            <ul>
              <li><a href="abdominoplasty.php">Abdominoplasty</a></li>
              <li><a href="liposuction.php">Liposuction</a></li>
              <li><a href="armlift.php">Arm Lift</a></li>
              <li><a href="thighlift.php">Thigh Lift</a></li>
              <li><a href="buttock.php">Buttock Augmentation</a></li>
              <li>
                <a href="bodycontour.php">Body Contouring after Weight Loss</a>
              </li>
              <li><a href="labiaplasty.php">Labiaplasty</a></li>
              <li><a href="mommymakeover.php">Mommy Makeover</a></li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                <a href="our_services_skin.php#botox">BOTOX® Cosmetic</a>
              </li>
              <li><a href="our_services_skin.php#fillers">Restylane®</a></li>
              <li>
                <a href="our_services_skin.php#juvederm">
                  JUVÉDERM® Injectable Gel
                </a>
              </li>
              <li><a href="our_services_skin.php#latisse">Latisse</a></li>
              <li><a href="our_services_skin.php#cpeels">Chemical Peels</a></li>
              <li>
                <a href="our_services_skin.php#microdermabrasion">
                  Microdermabrasion
                </a>
              </li>
              <li>
                <a href="our_services_skin.php#laserhair">Laser Hair removal</a>
              </li>
              <li>
                <a href="our_services_skin.php#ipl">
                  Intense Pulsed Light (IPL)
                </a>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.sevices-carousel {
  color: #fff;
  padding: 50px 100px;
  background-color: $primary;
  width: auto;
}
.section-title {
  color: $text-on-dark;
}
.header-text {
  font-weight: bold;
}
.index-table {
  margin-top: 40px;
  width: 100%;
  td {
    width: 50%;
    vertical-align: top;
  }
  a:link {
    color: #fff;
    text-decoration: none;
  }
  ul {
    padding-top: 20px;
    padding-left: 18px;
  }
}
</style>
