<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
const title = 'Breast Revision'

/**

 */
const faqs = [
  {
    question: 'I don’t like the results of my breast surgery.  What can I do?',
    answer: `A skilled and ethical plastic surgeon will manage expectations realistically and prioritize patient satisfaction. In cases of dissatisfaction, open communication with your surgeon is important to explore potential solutions or revisions.  If there is an issue that can be corrected surgically, it is best to discuss this with your surgeon. It is important to wait until there has been enough time to heal before attempting any revision work.`,
  },
  {
    question:
      'Is breast revision surgery more complex than the initial breast augmentation?',
    answer: `Breast revision surgery can be more complex than the initial surgery, as it often involves addressing scar tissue from previous surgeries and working with the existing anatomy. However, the complexity depends on the individual case and the goals of the revision.`,
  },
  {
    question: 'Will breast revision surgery leave additional scars?',
    answer: `The extent of scarring depends on the nature of the revision. In some cases, existing incisions can be used, but in others, new incisions may be necessary. Your surgeon will discuss the placement of incisions during the consultation.`,
  },
]

useHead({
  title: title,
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'Revision breast augmentation is performed for patients who are not satisfied with their results after previously undergoing breast augmentation. ',
    },
  ],
})
</script>
<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Breast Revision</div>
      <services-body-main-thumb
        src="/img/services/thumbs/breastrevision.jpg"
      ></services-body-main-thumb>
      <p>
        Revision breast surgery is performed for patients who are not satisfied
        with their results after previously undergoing breast augmentation or
        other breast surgery. Dissatisfaction may stem from various factors
        including implant size or malposition, poor scarring, asymmetry or
        contour deformities. Dr. Min is very experienced with revision surgery
        to improve the results of your augmentation, lift or reduction.
      </p>
      <p>
        The specific procedure varies based on the individual's goals and
        concerns. It may include changing the size or type of implants,
        adjusting the position of the implants, removing and/or replacing
        implants, correcting asymmetries, addressing complications, or revising
        breast scars.
      </p>
      <p>
        It's advisable to consult with a board-certified plastic surgeon to
        assess your situation and determine whether breast revision surgery is
        appropriate for you.
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
