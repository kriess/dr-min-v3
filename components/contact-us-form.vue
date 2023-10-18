<script lang="ts" setup>
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
interface Props {
  title?: string
}

// props
const props = withDefaults(defineProps<Props>(), {
  title: 'Page Title',
})

/*
Another props
const props = defineProps<{
  gallery: object
  caseNumber: number
}>()
*/

// reactive data
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
  console.log('submit form', e)
  const formValues = {
    lastName: lastName.value,
    firstName: firstName.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  }
  console.log(formValues)

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formValues),
  }
  const response = await fetch('/cgi-bin/send-email.php', requestOptions)
  const data = await response.json()
  console.log(data)
}
</script>

<template>
  <div class="contact-us-form">
    <div class="contact-us-container">
      <img src="/img/misc/contact-us-bg.webp" class="contact-us-bg" />
    </div>

    <v-form ref="form" v-model="isValid" @submit="sendEmail">
      <div class="form-fields-grid">
        <v-text-field
          base-color="#fff"
          v-model="firstName"
          label="First Name*"
          placeholder="First Name"
          persistent-placeholder
          variant="outlined"
          :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
          v-model="lastName"
          label="Last Name*"
          placeholder="Last Name"
          persistent-placeholder
          variant="outlined"
          :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="Email*"
          placeholder="Email"
          persistent-placeholder
          variant="outlined"
          :rules="[rules.email]"
          color="primary"
          type="email"
        ></v-text-field>
        <v-text-field
          v-model="phone"
          label="Phone"
          placeholder="Phone"
          persistent-placeholder
          variant="outlined"
        ></v-text-field>
        <v-textarea
          class="message-container"
          v-model="message"
          label="Message*"
          placeholder="Message"
          persistent-placeholder
          variant="outlined"
          :rules="[rules.length(10)]"
          auto-grow
        ></v-textarea>
        <v-btn type="submit">Submit</v-btn>
        <!--
        <v-text-field
          base-color="#fff"
          v-model="firstName"
          label="First Name*"
          placeholder="First Name"
          persistent-placeholder
          variant="outlined"
          :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
          v-model="lastName"
          label="Last Name*"
          placeholder="Last Name"
          persistent-placeholder
          variant="outlined"
          :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="Email*"
          placeholder="Email"
          persistent-placeholder
          variant="outlined"
          :rules="[rules.email]"
          color="primary"
          type="email"
        ></v-text-field>
        <v-text-field
          v-model="phone"
          label="Phone"
          placeholder="Phone"
          persistent-placeholder
          variant="outlined"
        ></v-text-field>
        <v-textarea
          class="message-container"
          v-model="message"
          label="Message*"
          placeholder="Message"
          persistent-placeholder
          variant="outlined"
          :rules="[rules.length(10)]"
          auto-grow
        ></v-textarea>
        <v-btn :disabled="!isValid">Submit</v-btn>
        -->
      </div>
    </v-form>
  </div>
</template>

<style lang="scss" scoped>
.contact-us-form {
  position: relative;
  padding: 3vw 10vw;
  color: #fff;
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
  .contact-us-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $primary;
  }
  .contact-us-bg {
    aspect-ratio: 10/6;
    width: 100%;
    filter: grayscale(100%);
    opacity: 0.05;
    object-fit: cover;
  }
  :deep(.v-field--error) {
    color: #fc0;
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
