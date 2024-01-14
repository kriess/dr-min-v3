<script setup>
// import recaptchaScriptIsReady from '~/scripts/google/captcha';
const appConfig = useAppConfig()
import { loadScript } from 'vue-plugin-load-script'

const status = ref('loading')

// methods
const loadGoogleRecaptcha = () => {
  console.log('loadGoogleRecaptcha')
  const link =
    'https://www.google.com/recaptcha/enterprise.js?render=6LepurAoAAAAAAO-f4JhmuJ5P7JA3uZ2N347jn0Q'
  // const link = 'https://www.google.com/recaptcha/api.js?render=explicit&onload=onRecaptchaLoadCallback'
  loadScript(link)
    .then(() => {
      // console.log(grecaptcha)
      // function onRecaptchaLoadCallback() {
      //   const clientId = grecaptcha.render('inline-badge', {
      //     sitekey: '6LepurAoAAAAAAO-f4JhmuJ5P7JA3uZ2N347jn0Q',
      //     badge: 'inline',
      //     size: 'invisible',
      //   })
      // }
    })
    .catch(() => {
      console.log('failed to load recaptcha script')
    })
}

// lifecycle hooks
onMounted(() => {
  console.log('footer mounted')
  setTimeout(loadGoogleRecaptcha, 5000)
})

const year = computed(() => {
  const today = new Date()
  return today.getFullYear()
})

const telephoneLink = computed(() => {
  return `tel:1-${appConfig.phone}`
})
</script>

<template>
  <div class="site-footer mt-5">
    <v-footer class="site-footer">
      <v-container>
        <v-row no-gutters class="bio">
          <v-col cols="12" sm="12" md="4" class="bio__left-col">
            <div class="bio__name">
              <h4 class="text-h4">Caroline Min MD</h4>
              <h4 class="text-h6">Board Certified Plastic Surgeon</h4>
              <v-img
                class="asps-logo"
                width="60%"
                alt="American Society of Plastic Surgeons logo"
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
                    <li>
                      Tel:
                      <a class="phone-link" :href="telephoneLink">
                        {{ appConfig.phone }}
                      </a>
                    </li>
                    <li>info@drcarolinemin.com</li>
                    <li class="separator"></li>
                    <li>
                      Parking spots are available in front of the office as well
                      as street parking and paid parking lots across the street
                      at Madison Avenue.
                    </li>
                  </ul>
                  <div class="social-media">
                    <div class="social-icons">
                      <!--                      <a href="" target="_blank" class="social-icons__icon social-icons__icon&#45;&#45;color">-->
                      <!--                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="#fff"><path fill="#fff" d="M24,0C10.7,0,0,10.7,0,24c0,10.2,6.3,18.9,15.3,22.3c-0.2-1.9-0.4-4.8,0.1-6.9c0.4-1.9,2.8-11.9,2.8-11.9 s-0.7-1.4-0.7-3.6c0-3.3,1.9-5.8,4.3-5.8c2,0,3,1.5,3,3.4c0,2.1-1.3,5.1-2,8c-0.6,2.4,1.2,4.3,3.6,4.3c4.3,0,7.5-4.5,7.5-11 c0-5.7-4.1-9.8-10-9.8c-6.8,0-10.8,5.1-10.8,10.4c0,2.1,0.8,4.3,1.8,5.5c0.2,0.2,0.2,0.4,0.2,0.7c-0.2,0.8-0.6,2.4-0.7,2.7 c-0.1,0.4-0.3,0.5-0.8,0.3c-3-1.4-4.9-5.8-4.9-9.3c0-7.6,5.5-14.5,15.9-14.5c8.3,0,14.8,5.9,14.8,13.9c0,8.3-5.2,14.9-12.5,14.9 c-2.4,0-4.7-1.3-5.5-2.8c0,0-1.2,4.6-1.5,5.7c-0.5,2.1-2,4.7-3,6.3c2.2,0.7,4.6,1.1,7.1,1.1c13.3,0,24-10.7,24-24 C48,10.7,37.3,0,24,0z"></path></g></svg>-->
                      <!--                      </a>-->
                      <!--                      <a href="https://www.instagram.com/drcarolinemin/" target="_blank" class="social-icons__icon social-icons__icon&#45;&#45;color">-->
                      <!--                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="#fff"><path d="M24,6.784c5.607,0,6.271.021,8.486.122a11.65,11.65,0,0,1,3.9.723,6.954,6.954,0,0,1,3.986,3.986,11.65,11.65,0,0,1,.723,3.9c.1,2.215.122,2.879.122,8.486s-.021,6.271-.122,8.486a11.65,11.65,0,0,1-.723,3.9,6.954,6.954,0,0,1-3.986,3.986,11.65,11.65,0,0,1-3.9.723c-2.214.1-2.878.122-8.486.122s-6.272-.021-8.486-.122a11.65,11.65,0,0,1-3.9-.723,6.954,6.954,0,0,1-3.986-3.986,11.65,11.65,0,0,1-.723-3.9c-.1-2.215-.122-2.879-.122-8.486s.021-6.271.122-8.486a11.65,11.65,0,0,1,.723-3.9,6.954,6.954,0,0,1,3.986-3.986,11.65,11.65,0,0,1,3.9-.723c2.215-.1,2.879-.122,8.486-.122M24,3c-5.7,0-6.418.024-8.658.126a15.418,15.418,0,0,0-5.1.976A10.287,10.287,0,0,0,6.525,6.525,10.287,10.287,0,0,0,4.1,10.244a15.418,15.418,0,0,0-.976,5.1C3.024,17.582,3,18.3,3,24s.024,6.418.126,8.658a15.418,15.418,0,0,0,.976,5.1,10.287,10.287,0,0,0,2.423,3.719A10.287,10.287,0,0,0,10.244,43.9a15.418,15.418,0,0,0,5.1.976c2.24.1,2.955.126,8.658.126s6.418-.024,8.658-.126a15.418,15.418,0,0,0,5.1-.976A10.749,10.749,0,0,0,43.9,37.756a15.418,15.418,0,0,0,.976-5.1C44.976,30.418,45,29.7,45,24s-.024-6.418-.126-8.658a15.418,15.418,0,0,0-.976-5.1,10.287,10.287,0,0,0-2.423-3.719A10.287,10.287,0,0,0,37.756,4.1a15.418,15.418,0,0,0-5.1-.976C30.418,3.024,29.7,3,24,3Z" fill="#fff"></path><path d="M24,13.216A10.784,10.784,0,1,0,34.784,24,10.784,10.784,0,0,0,24,13.216ZM24,31a7,7,0,1,1,7-7A7,7,0,0,1,24,31Z" fill="#fff"></path><circle cx="35.21" cy="12.79" r="2.52" fill="#fff"></circle></g></svg>-->
                      <!--                      </a>-->
                      <!--                      <a href="" target="_blank" class="social-icons__icon social-icons__icon&#45;&#45;color">-->
                      <!--                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>logo-youtube</title><g fill="#fff"><path fill="#fff" d="M47.5,14.4c0,0-0.5-3.3-1.9-4.8c-1.8-1.9-3.9-1.9-4.8-2C34.1,7.1,24,7.1,24,7.1h0c0,0-10.1,0-16.8,0.5 c-0.9,0.1-3,0.1-4.8,2c-1.4,1.5-1.9,4.8-1.9,4.8S0,18.3,0,22.2v3.6c0,3.9,0.5,7.8,0.5,7.8s0.5,3.3,1.9,4.8c1.8,1.9,4.2,1.9,5.3,2.1 c3.8,0.4,16.3,0.5,16.3,0.5s10.1,0,16.8-0.5c0.9-0.1,3-0.1,4.8-2c1.4-1.5,1.9-4.8,1.9-4.8s0.5-3.9,0.5-7.8v-3.6 C48,18.3,47.5,14.4,47.5,14.4z M19,30.2l0-13.5l13,6.8L19,30.2z"></path></g></svg>-->
                      <!--                      </a>-->
                      <!--                      <a href="" target="_blank" class="social-icons__icon social-icons__icon&#45;&#45;color">-->
                      <!--                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#fff"><path d="M12.232.721h-.059l-.416,0A6.386,6.386,0,0,0,5.829,4.55c-.533,1.194-.4,3.222-.3,4.852.012.192.025.392.036.584a.947.947,0,0,1-.467.1,2.679,2.679,0,0,1-1.1-.295.891.891,0,0,0-.381-.078,1.191,1.191,0,0,0-1.166.8c-.066.346.089.851,1.2,1.29.1.039.221.077.349.118.459.146,1.153.366,1.341.809a1.066,1.066,0,0,1-.115.88l-.011.024c-.061.142-1.53,3.491-4.792,4.028A.5.5,0,0,0,0,18.185a.66.66,0,0,0,.053.223c.245.572,1.277.992,3.158,1.284a2.372,2.372,0,0,1,.168.568c.039.18.08.366.137.563a.557.557,0,0,0,.583.423,3.039,3.039,0,0,0,.542-.076,6.349,6.349,0,0,1,1.279-.145,5.585,5.585,0,0,1,.917.078,4.345,4.345,0,0,1,1.719.887,5.419,5.419,0,0,0,3.294,1.289c.041,0,.082,0,.122,0s.109,0,.175,0a5.42,5.42,0,0,0,3.3-1.289,4.342,4.342,0,0,1,1.72-.887,5.567,5.567,0,0,1,.917-.078,6.351,6.351,0,0,1,1.279.136,3.022,3.022,0,0,0,.542.067h.027a.541.541,0,0,0,.555-.416c.057-.192.1-.373.138-.557a2.282,2.282,0,0,1,.167-.566c1.881-.292,2.913-.71,3.158-1.28A.665.665,0,0,0,24,18.184a.5.5,0,0,0-.416-.518c-3.263-.538-4.731-3.887-4.792-4.029l-.011-.024a1.063,1.063,0,0,1-.115-.879c.188-.443.882-.663,1.341-.809.129-.041.249-.079.349-.118.813-.322,1.221-.716,1.213-1.173a.975.975,0,0,0-.731-.838h0a1.338,1.338,0,0,0-.5-.1,1.1,1.1,0,0,0-.459.093,2.8,2.8,0,0,1-1.035.293.913.913,0,0,1-.4-.1c.009-.165.02-.336.031-.513l0-.07c.1-1.63.231-3.66-.3-4.855A6.4,6.4,0,0,0,12.232.721Z" fill="#fff"></path></g></svg></a>-->
                      <a
                        title="Dr. Caroline Min Real Self Profile"
                        href="https://www.realself.com/dr/caroline-min-pasadena-ca"
                        target="_blank"
                        class="social-icons__icon social-icons__icon--color"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 48 48"
                          style="enable-background: new 0 0 48 48"
                          xml:space="preserve"
                        >
                          <path
                            fill="#333"
                            d="M27.3,36.8c-3.4,0-6.7-1.1-9.5-3.1l3-4.4c1.6,1.4,4.1,2.3,6.5,2.3c1.8,0,3.2-0.9,3.2-2.1c0-1.5-2-2.2-4.2-3
                      	c-3.3-1.1-7.3-2.5-7.3-7c0-2.1,1-4.1,2.8-5.4c1.8-1.3,4-2,6.3-2c3.2,0,6.4,1.2,7.9,2.3l-2.9,4.5c-0.9-0.6-2.6-1.6-4.6-1.6
                      	s-3.4,0.8-3.4,2s1.7,1.8,3.8,2.5c3.5,1.1,7.8,2.6,7.8,7.7c0,2.1-1,4-2.8,5.3C32.2,36.1,29.8,36.8,27.3,36.8z M0.5,12.6h6.2v23.7H0.5
                      	V12.6z M12.7,20.5c-2.3,0-4.2-1.9-4.2-4.2s1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2S15,20.5,12.7,20.5L12.7,20.5z"
                          ></path>
                          <path
                            fill="#333"
                            d="M43.4,36.8c-2.3,0-4.2-1.9-4.2-4.2s1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2S45.7,36.8,43.4,36.8L43.4,36.8z"
                          ></path>
                        </svg>
                      </a>
                      <!--                      <a href="https://www.facebook.com/drcarolinemin" target="_blank" class="social-icons__icon social-icons__icon&#45;&#45;color">-->
                      <!--                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>logo-facebook</title><g fill="#fff"><path d="M47,24.138A23,23,0,1,0,20.406,46.859V30.786H14.567V24.138h5.839V19.07c0-5.764,3.434-8.948,8.687-8.948a35.388,35.388,0,0,1,5.149.449v5.66h-2.9a3.325,3.325,0,0,0-3.732,2.857,3.365,3.365,0,0,0-.015.737v4.313h6.379l-1.02,6.648H27.594V46.859A23,23,0,0,0,47,24.138Z" fill="#fff"></path></g></svg>-->
                      <!--                      </a>-->
                      <a
                        title="Dr. Caroline Min LinkedIn Profile"
                        href="https://www.linkedin.com/in/caroline-min-83802357/"
                        target="_blank"
                        class="social-icons__icon social-icons__icon--color"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                        >
                          <g fill="#333">
                            <path
                              fill="#333"
                              d="M46,0H2C0.9,0,0,0.9,0,2v44c0,1.1,0.9,2,2,2h44c1.1,0,2-0.9,2-2V2C48,0.9,47.1,0,46,0z M14.2,40.9H7.1V18 h7.1V40.9z M10.7,14.9c-2.3,0-4.1-1.8-4.1-4.1c0-2.3,1.8-4.1,4.1-4.1c2.3,0,4.1,1.8,4.1,4.1C14.8,13,13,14.9,10.7,14.9z M40.9,40.9 h-7.1V29.8c0-2.7,0-6.1-3.7-6.1c-3.7,0-4.3,2.9-4.3,5.9v11.3h-7.1V18h6.8v3.1h0.1c0.9-1.8,3.3-3.7,6.7-3.7c7.2,0,8.5,4.7,8.5,10.9 V40.9z"
                            ></path>
                          </g>
                        </svg>
                      </a>
                      <a
                        title="Dr. Caroline Min Yelp Profile"
                        href="https://www.yelp.com/biz/caroline-min-md-pasadena"
                        target="_blank"
                        class="social-icons__icon social-icons__icon--color"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 800 800"
                          style="enable-background: new 0 0 800 800"
                          xml:space="preserve"
                        >
                          <g>
                            <path
                              fill="#333"
                              d="M335.1,563.6L224.5,698.3c-15.6,19-8.1,47.6,14.7,56.6l108.1,42.6c23.3,9.2,48.7-7.6,49.4-32.7l4.7-176.4
		C402.3,552.8,357.7,536.1,335.1,563.6z"
                            />
                            <path
                              class="st0"
                              d="M316.7,429.7l-164-58.9c-23.1-8.3-47.5,8.3-48.3,32.8l-3.7,116.2c-0.8,25.1,23.5,43.3,47.4,35.5l167.7-54.9
		C349.5,489.4,350.2,441.8,316.7,429.7z"
                            />
                            <path
                              class="st0"
                              d="M504.7,448.6l168-46.3c23.6-6.5,34.1-34.2,20.6-54.7l-63.8-97.1c-13.8-20.9-44.2-21.9-59.2-1.8L464.8,390.3
		C443.5,418.8,470.4,458.1,504.7,448.6z"
                            />
                            <path
                              class="st0"
                              d="M383,44.9c1.3-29.1-26-51-54.1-43.3l-133,36.3c-28.7,7.8-40.9,41.8-23.7,66.1l152.6,264.4
		c1.2,2.1,2.6,4.2,4.2,6.1c22.6,26.6,65,16.7,75.5-14.4c1.9-5.6,2.4-11.5,1.9-17.4L383,44.9z"
                            />
                            <path
                              class="st0"
                              d="M673.9,569.5l-168.7-51.8c-34-10.4-62,28.1-41.6,57.2l100.1,142.7c14.1,20.1,43.7,20.6,58.4,1l70-92.8
		C707.2,605.8,697.8,576.9,673.9,569.5z"
                            />
                          </g>
                        </svg>
                      </a>
                      <a
                        title="Dr. Caroline Min Google Profile/Reviews"
                        href="https://www.google.com/search?hl=en-US&gl=us&q=Caroline+Min,+MD+Pasadena,+547+Union+St,+Pasadena,+CA+91101"
                        target="_blank"
                        class="social-icons__icon social-icons__icon--color"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                        >
                          <g fill="#333">
                            <path
                              d="M45.1,20h-21v9H36c-1.9,6-6.6,8-12,8a13,13,0,1,1,8.346-22.953l6.54-6.228A21.995,21.995,0,1,0,24,46C36.131,46,47.1,38,45.1,20Z"
                              fill="#333"
                            ></path>
                          </g>
                        </svg>
                      </a>
                      <!--                      <a href="" target="_blank" class="social-icons__icon social-icons__icon&#45;&#45;color">-->
                      <!--                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 59.901"><path fill="#fff" d="M8.386,4.122h8.749L55.769,55.778H47.02ZM55.449,0,35.4,21.659,19.2,0H.156l24.71,33.039L0,59.9H5.6l21.77-23.518L44.956,59.9H64L37.9,25,61.045,0Z"></path></svg>-->
                      <!--                      </a>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters class="copyright" align="center">
          <v-col cols="12" sm="12" md="9">
            <div class="copy">
              <p>
                Plastic Surgery Pasadena - Dr. Caroline Min, MD, specializes in
                plastic surgery procedures serving Pasadena, Los Angeles,
                Beverly Hills, and the surrounding areas.
              </p>
              &copy;
              {{ year }} Dr. Caroline Min, MD All Rights Reserved.
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
  margin-top: 50px;
  border-radius: 0; //$main-border-radius $main-border-radius 0 0;
  padding: 0;
  overflow: hidden;
}

:deep(.v-container) {
  max-width: none;
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
    background-color: $tertiary;
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

.social-media {
  display: flex;
  margin: 10px 0;
}

.social-icons__icon svg {
  fill: #333;
  margin-right: 20px;
  width: 25px;
  height: 25px;
}

.phone-link:link,
.phone:visited {
  color: #333;
}
</style>
