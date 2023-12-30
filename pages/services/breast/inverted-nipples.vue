<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
const title = 'Correction of Inverted Nipples'

/**

 */

const faqs = [
  {
    question: 'How is inverted nipple surgery performed?',
    answer: `Inverted nipple surgery is typically performed under local anesthesia. A small incision is made at the base of the nipple and the surgeon releases tight ducts or tissue causing the inversion.  In some cases, additional support may be provided to prevent recurrence.`,
  },
  {
    question: 'Will inverted nipple surgery affect my ability to breastfeed?',
    answer: `In some cases, the surgery may affect the ability to breastfeed, especially if ducts are cut during the procedure. It's essential to discuss this concern with the surgeon during the consultation.`,
  },
  {
    question: 'What is the recovery like after inverted nipple surgery?',
    answer: `Recovery is generally quick. Patients may experience some swelling, bruising, and mild discomfort, but these symptoms typically subside within a few days. It is important to shield the nipple from pressure during the healing period to prevent recurrent inversion.  Post-operative care instructions should be followed for optimal healing.`,
  },
  {
    question: 'Will there be visible scarring after inverted nipple surgery?',
    answer: `The extent of scarring depends on the surgical technique used but the scar is typically small and inconspicuous.`,
  },
]

useHead({
  title: title,
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'Nipple and areola reconstruction can provide a boost in self-confidence to patients who have inverted or stretched nipples. The inverted nipples can be surgically altered to create a more prominent and projected appearance.',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Correction of Inverted Nipples</div>
      <services-body-main-thumb
        src="/img/services/thumbs/nipplecorrection.jpg"
      ></services-body-main-thumb>
      <p>
        A nipple is inverted when it is retracted or pulled inward into the
        breast instead of pointing outward. This can occur on one or both
        breasts and may be present from birth or develop later in life. Inverted
        nipples are generally categorized into three grades based on the
        severity of inversion:
      </p>
      <ul class="unordered-list">
        <li>
          Grade 1: The nipple can be easily pulled out and maintains its
          projection for a period.
        </li>
        <li>
          Grade 2: The nipple can be pulled out, but it retracts spontaneously.
        </li>
        <li>
          Grade 3: The nipple is severely inverted and cannot be pulled out
          manually.
        </li>
      </ul>

      <p>
        The causes of inverted nipples can be congenital (present at birth) or
        acquired. Congenital inversion is often due to short ducts or tissue
        tethering that restrict the normal eversion of the nipple. Acquired
        inversion can be caused by scarring, inflammation, or underlying medical
        conditions.
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
