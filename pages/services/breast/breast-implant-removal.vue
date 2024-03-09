<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
let canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
if (!canonicalUrl.endsWith('/')) {
  canonicalUrl = canonicalUrl + '/'
}
const title = 'Silicon Breast Implant Removal'

/**

 */
const faqs = [
  {
    question:
      'What is breast implant-associated illness, and how is it addressed in surgery?',
    answer: `Breast implant-associated illness (BII) is a term used to describe symptoms some individuals attribute to their breast implants. Symptoms may include fatigue, joint pain, and cognitive issues like brain fog. If you have concerns about BII, it's important to discuss them with your surgeon during the consultation.`,
  },
  {
    question: 'What is en bloc capsulectomy?\n',
    answer: `En bloc capsulectomy refers to a surgical technique where the implant and surrounding capsule are removed together.  However, there is no scientific evidence that en bloc capsule removal is necessary or provides improved relief of BII symptoms.
`,
  },
  {
    question: 'Can breast implant removal be combined with other procedures?\n',
    answer: `Yes, breast implant removal can be combined with other procedures to achieve the desired aesthetic outcome. This may include a breast lift to improve breast shape, the replacement of implants, or fat grafting to the breasts. The combination of procedures will be tailored to individual goals and circumstances.
`,
  },
]

useHead({
  title: title,
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      property: 'og:url',
      content: canonicalUrl,
    },
    {
      name: 'description',
      content:
        'Dr Caroline Min MD has successfully performed many breast implant removal surgeries across Pasadena, CA. Contact her today and regain your self confidence!',
    },
  ],
})
</script>
<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">{{ title }}</div>
      <services-body-main-thumb
        alt="Breast Implant Removal by Dr. Caroline Min: Board Certified Female Plastic Surgeon"
        src="/img/services/thumbs/breast-implant-removal.webp"
      ></services-body-main-thumb>
      <p>
        Breast implant removal, also known as explantation, is a surgical
        procedure to remove breast implants. It may be done for various reasons,
        including personal choice, changes in health, or the desire to address
        complications or aesthetic concerns related to the implants.
      </p>
      <p>
        Dr. Min has successfully performed many implant removal surgeries. Her
        expertise and experience enables her to guide patients on the approach
        best suited to their specific circumstance.
      </p>
      <p>
        Reasons for considering breast implant removal are diverse and may
        include dissatisfaction with the appearance of the implants, changes in
        personal preferences, concerns about implant-related complications (such
        as leakage or rupture), or the desire to address symptoms associated
        with breast implant illness (BII). BII refers to a range of symptoms
        some individuals attribute to their breast implants, and it's essential
        to discuss these concerns with your surgeon.
      </p>
      <p>
        The impact on breast appearance after implant removal varies based on
        factors such as the size and condition of natural breast tissue, the
        type of implants, and the duration they were in place. In some cases,
        additional procedures like a breast lift may be recommended to achieve
        the desired aesthetic outcome.
      </p>

      <services-faqs :faqs="faqs" :title="title"></services-faqs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services-details {
  width: auto;

  .services-title {
    display: none;
    color: $primary;
    font-size: 150%;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  .header-text {
    font-size: 150%;
    color: $primary;
    font-weight: bold;
    margin-bottom: 20px;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: 20px;
  }

  .thumb {
    border-radius: $border-radius-v3;
    border: 1px solid #ccc;
    margin: 0 0 20px 20px;
    float: right;
    width: 50%;
  }

  .unordered-list {
    margin-bottom: 20px;

    li {
      margin-left: 20px;
    }
  }
}
</style>
