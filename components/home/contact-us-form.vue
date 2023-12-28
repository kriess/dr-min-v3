<script lang="ts" setup>
interface Props {
  title?: string
  showHeader?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  title: 'Page Title',
  showHeader: true,
})

// reactive data
const recaptchaRef = ref<HTMLElement | null>(null)
const dialog = ref(false)
const dialogMessage = ref('Submitting your email...')
const isValid = ref(false)
const lastName = ref('')
const firstName = ref('')
const email = ref()
const phone = ref('')
const message = ref('')
const rules = ref({
  email: (v) => !!(v || '').match(/@/) || 'Please enter a valid email',
  length: (len) => (v) =>
    (v || '').length >= len ||
    `Invalid character length, at least ${len} characters required.`,
  required: (v) => (v || '').length >= 1 || `This field is required.`,
  max: (len) => (v) =>
    (v || '').length < len || `This field must be less than ${len} characters.`,
})

// computed
const galleries = computed(() => {
  return props.title + ' with some more text'
})

// methods
const changeView = (view) => {
  console.log(view)
}
const sendEmail = async (e) => {
  e.preventDefault()

  dialog.value = true

  // const clientId = grecaptcha.render('inline-badge', {
  //   sitekey: '',
  //   badge: 'inline',
  //   size: 'invisible',
  // })

  grecaptcha.enterprise.ready(async () => {
    console.log('dfsdfsdfsd')
    const token = await grecaptcha.enterprise.execute(
      '6LepurAoAAAAAAO-f4JhmuJ5P7JA3uZ2N347jn0Q',
      { action: 'SUBMIT_EMAIL' },
    )
    // IMPORTANT: The 'token' that results from execute is an encrypted response sent by
    // reCAPTCHA Enterprise to the end user's browser.
    // This token must be validated by creating an assessment.
    // See https://cloud.google.com/recaptcha-enterprise/docs/create-assessment
    console.log('token', token)

    console.log('submit form', e)
    const formValues = {
      token: token,
      random: '987654321',
      lastName: lastName.value,
      firstName: firstName.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    }
    console.log('data to post', formValues)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues),
    }
    const response = await fetch('/cgi-bin/send-email.php', requestOptions)
    const data = await response.json()
    console.log('res data', data)

    if (response.ok) {
      dialogMessage.value = 'Your email was submitted successfully.  Thank you!'
    }
  })
}
</script>

<template>
  <div class="contact-us-form">
    <div class="contact-us-form__bg" style="background-image: url('/img/raw/essentia-office.webp');">
      <div class="mask"></div>
        <div class="form-wrapper">
        <h1 v-if="props.showHeader" class="text-center mb-10 section-title">
          Contact Us
        </h1>

        <v-form ref="form" v-model="isValid" @submit="sendEmail">
          <div class="form-fields-grid">
            <v-text-field
              class="form-field"
              base-color="#fff"
              v-model="firstName"
              label="First Name*"
              placeholder="First Name"
              persistent-placeholder
              variant="outlined"
              :rules="[rules.required, rules.max(30)]"
            ></v-text-field>
            <v-text-field
              class="form-field"
              v-model="lastName"
              label="Last Name*"
              placeholder="Last Name"
              persistent-placeholder
              variant="outlined"
              :rules="[rules.required, rules.max(30)]"
            ></v-text-field>
            <v-text-field
              class="form-field"
              v-model="email"
              label="Email*"
              placeholder="Email"
              persistent-placeholder
              variant="outlined"
              :rules="[rules.email, rules.max(50)]"
              type="email"
            ></v-text-field>
            <v-text-field
              class="form-field"
              v-model="phone"
              label="Phone"
              placeholder="Phone"
              persistent-placeholder
              :rules="[rules.required, rules.max(20)]"
              variant="outlined"
            ></v-text-field>
            <v-textarea
              class="message-container form-field"
              v-model="message"
              label="Message*"
              placeholder="Message"
              persistent-placeholder
              variant="outlined"
              :rules="[rules.length(10), rules.max(1000)]"
              auto-grow
            ></v-textarea>
            <v-btn type="submit" variant="elevated" rounded="sm" size="small" class="submit-button">
              Submit
            </v-btn>
            <!--        <v-btn type="submit" :disabled="!isValid">Submit</v-btn>-->
            <!--
            https://developers.google.com/recaptcha/docs/invisible#js_api
            -->
          </div>
        </v-form>
      </div>
    </div>

    <v-dialog
      v-if="dialog"
      v-model="dialog"
      width="200"
      class="photo-gallery-dialog"
    >
      <v-card>
        <v-card-text>
          {{ dialogMessage }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="scss" scoped>
.contact-us-form {
  border-top: 10px solid $secondary;
  border-bottom: 10px solid $secondary;
  overflow: hidden;
  position: relative;
  color: #fff;

  .contact-us-form__bg {
    background-position: top center;
    background-size: cover;
    height: auto;
    padding: 5vw 0;
    //display: grid;
    //justify-content: center;
    //align-content: center;
  }

  :deep(.v-text-field input),
  :deep(textarea),
  :deep(.v-input__details .v-messages) {
    font-size: 1.1rem;
  }
  .form-fields-grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
  .message-container {
    grid-column: 1 / span 2;
  }
  :deep(.v-field--error) {
    color: #fc0;
  }
  .section-title {
    position: relative;
    font-size: min(9vw, 40px);
    color: $text-on-dark;
  }
}

.mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.submit-button {
  width: fit-content;
  display: inline-block;
  background-color: $tertiary-action;
  color: #fff;
  text-transform: capitalize;
}

.form-wrapper {
  position: relative;
  margin: 3vw 25vw;
  padding: 3vw;
  background-color: rgba(211, 117, 107, 0.85); // $primary;
}

.form-field {
  :deep(.v-field__outline) {
    --v-field-border-opacity: 0.9;
  }
}

@media screen and (max-width: 700px) {
  .contact-us-form {
    .form-fields-grid {
      grid-template-columns: 1fr;
    }
    .message-container {
      grid-column: 1;
    }
  }
}
</style>
