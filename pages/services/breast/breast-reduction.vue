<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}/`
const title = 'Breast Reduction'

const faqs = [
  {
    question: 'How is breast reduction surgery performed?',
    answer: `Breast reduction surgery is typically performed under general anesthesia. The surgeon makes incisions to remove excess glandular tissue, fat, and skin. The nipple-areola complex is repositioned and the breasts are reshaped for a more balanced appearance. In some cases, liposuction may be used to further refine the contours.`,
  },
  {
    question: 'Will breast reduction surgery leave scars?',
    answer: `Yes, breast reduction surgery will result in some scars.  The extent and visibility of scars depend on the surgical technique used. Common incision types include the anchor-shaped incision (around the areola, vertically down to the breast crease, and along the crease) or the “lollipop” technique (scar around the areola and vertical only.. Scars typically fade over time
 and post-operative scar care instructions will be provided to optimize the healing process.`,
  },
  {
    question: 'How long is the recovery period after breast reduction surgery?',
    answer: `Recovery time varies, but most patients can expect to return to light activities within a week and resume normal activities within a few weeks. Strenuous activities such as gym exercise should be avoided for 4 weeks.`,
  },
  {
    question: 'Are there risks associated with breast reduction surgery?',
    answer: `Like any surgical procedure, breast reduction surgery carries potential risks, including infection, bleeding, changes in nipple sensation, and scarring. Your surgeon will discuss these risks during the consultation and steps will be taken to minimize them.`,
  },
  {
    question: 'Will breast reduction surgery affect my ability to breastfeed?',
    answer: `Breast reduction surgery can impact the ability to breastfeed. While some women can still breastfeed after the procedure, others may experience a reduction in milk supply. It's important to discuss your plans for breastfeeding with your surgeon during the consultation to understand potential implications.`,
  },
  {
    question:
      'What is the recommended age range for breast reduction patients?',
    answer: `Breast reduction surgery is generally recommended for individuals who have fully developed breasts, which is typically after the age of 18. There is no upper age limit as long as you are in overall good health, and the procedure can be performed at various stages of life when symptoms and concerns arise.`,
  },
  {
    question: 'Can breast reduction surgery be combined with other procedures?',
    answer: `Yes, breast reduction surgery can be combined with other procedures, such as a liposuction for additional shaping or a tummy tuck as part of a mommy makeover. The combination of procedures will depend on individual goals and circumstances.`,
  },
  {
    question: 'How long do the results of breast reduction surgery last?',
    answer: `The results of breast reduction surgery are generally long-lasting. However, factors such as aging, weight fluctuations, and pregnancy can impact the outcome over time. Maintaining a stable weight and a healthy lifestyle can contribute to the longevity of the results.`,
  },
]

useHead({
  title: title,
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'Large breasts can cause pain, improper posture, rashes, breathing problems, skeletal deformities, and low self-esteem. ',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Breast Reduction</div>
      <services-body-main-thumb
        src="/img/services/thumbs/breastreduction.jpg"
      ></services-body-main-thumb>
      <p>
        Large breasts, a condition known as macromastia, can be associated with
        a range of physical and emotional challenges, prompting many women to
        seek relief through breast reduction surgery. Common issues associated
        with large breasts include chronic pain in the back, neck, and
        shoulders, which can significantly impact daily life and limit physical
        activities. Improper posture is another concern, as the added weight of
        large breasts can disrupt the body's natural alignment, leading to
        musculoskeletal strain. Some individuals with large breasts may
        experience skin irritations and rashes in the areas beneath the breast
        folds. Breathing difficulties can also arise due to the weight of the
        breasts, particularly when engaging in physical exertion.
      </p>
      <p>
        Performed under general anesthesia, the procedure removes fat and
        glandular tissue and tightens skin to produce smaller, lighter and
        perkier breasts that are in a better proportion to the rest of the body.
        The decision to undergo breast reduction surgery is highly personal and
        should be based on a thorough consultation with a qualified plastic
        surgeon. During this consultation, the surgeon will assess the patient's
        health, discuss individual concerns and goals, and provide information
        about the surgical process, recovery, and potential risks. Overall,
        breast reduction surgery is a transformative option for women seeking
        relief from the physical and emotional burdens associated with
        excessively large breasts, promoting a healthier and more confident
        lifestyle. Dr. Min has many happy patients who have successfully
        undergone breast reduction surgery.
      </p>

      <services-faqs :faqs="faqs" :title="title"></services-faqs>
      <services-before-after
        :title="title"
        section="breast"
        procedure="breast-reduction"
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
