<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
const title = 'Breast Lift'

/**

 */
const faqs = [
  {
    question: ' Will a breast lift change the size of my breasts?',
    answer: `While a breast lift primarily focuses on lifting and reshaping the breasts, some patients may experience a slight reduction in size due to the removal of excess skin and a more compact shape. If additional volume is desired, it can be addressed with breast augmentation. `,
  },
  {
    question:
      'How is a breast lift performed, and what type of anesthesia is used?',
    answer: `A breast lift involves removing excess skin, reshaping breast tissue, and repositioning the nipple-areola complex to a higher position. The procedure is typically performed under general anesthesia to ensure patient comfort. `,
  },
  {
    question: ' What is a limited scar breast lift, and am I a candidate?',
    answer: `A limited scar breast lift is a technique that minimizes scarring by utilizing shorter incisions. Dr. Min determines candidacy based on factors such as breast shape, size, and the degree of sagging during the consultation. `,
  },
  {
    question: ' Will a breast lift leave visible scars?',
    answer: `While breast lift surgery does leave some scars, Dr. Min uses techniques to minimize visibility. Scars typically fade over time, and post-operative scar care instructions are provided to optimize the healing process. `,
  },
  {
    question: ' How long is the recovery period after a breast lift?',
    answer: `Recovery time varies, but most patients can expect to return to light activities and work within a week. Strenuous activities such as exercise should be avoided for a longer period, usually up to 4 weeks.`,
  },
  {
    question: ' Will I be able to breastfeed after a breast lift?',
    answer: `Breast lift surgery can affect breastfeeding, as it involves repositioning the nipple-areola complex. While some women can still breastfeed after a lift, others may experience a reduction in milk supply. Discussing your plans for breastfeeding with Dr. Min during the consultation is important. `,
  },
  {
    question: ' How long do the results of a breast lift last?',
    answer: `The results of a breast lift are long-lasting, but factors such as aging, weight fluctuations, and pregnancy can impact the outcome over time. Maintaining a stable weight and a healthy lifestyle can contribute to the longevity of the results`,
  },
]

useHead({
  title: title,
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        "A breast lift, or mastopexy, is performed to return youthful shape and lift to breasts that have sagged as a result of weight loss, pregnancy, loss of the skin's natural elasticity or simply the effects of aging and gravity.",
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Breast Lift</div>
      <services-body-main-thumb
        src="/img/services/thumbs/anotherbreastsurgery.jpg"
      ></services-body-main-thumb>
      <p>
        A breast lift, or mastopexy, is performed to return youthful shape to
        breasts that have sagged as a result of weight loss, pregnancy, or
        simply the effects of aging and gravity. The breast lift procedure
        involves the removal of excess skin, reshaping of breast tissue, and
        repositioning of the nipple-areola complex to create a more lifted and
        aesthetically pleasing contour. The procedure can be combined with
        breast augmentation or fat grafting for added firmness or volume. Dr.
        Min employs her skill and expertise to achieve natural-looking results,
        tailoring the procedure to meet the unique needs and goals of each
        patient. If you are considering a breast lift, Dr. Min's expertise and
        commitment to achieving optimal outcomes make her a trusted choice in
        the field of cosmetic surgery.
      </p>
      <p>
        A breast lift is recommended for droopy sagging breasts to restore a
        more youthful shape, while breast augmentation adds volume or fullness.
        In some cases, both procedures can be combined to achieve the desired
        lift and volume. During the consultation, Dr. Min will carefully assess
        each patient to determine the most suitable approach, considering
        factors such as breast shape, size, the extent of sagging and the
        patient’s desired outcome.
      </p>
      <p>
        A breast lift can be combined with other procedures such as breast
        augmentation or fat grafting to address specific concerns. The
        combination of procedures will depend on individual goals and anatomical
        factors.
      </p>

      <services-faqs :faqs="faqs" :title="title"></services-faqs>
      <services-before-after
        :title="title"
        section="breast"
        procedure="breast-lift"
      ></services-before-after>
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
