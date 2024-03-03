<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
let canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
if (!canonicalUrl.endsWith('/')) {
  canonicalUrl = canonicalUrl + '/'
}
const title = 'Body Contouring'

/**


 */
const faqs = [
  {
    question: 'Am I a candidate for body contouring surgery?',
    answer: `Ideal candidates are individuals who have achieved significant weight loss, have maintained a stable weight, and have excess skin or sagging in specific areas. A consultation with a qualified surgeon is necessary for personalized assessment.`,
  },
  {
    question:
      'When is the right time to consider body contouring after weight loss?',
    answer: `Patients should wait until their weight loss has stabilized for at least 6 months to a year before considering body contouring. This ensures optimal results and reduces the risk of complications.`,
  },
  {
    question: 'How long is the recovery period after body contouring surgery?',
    answer: `Recovery time varies based on the extent of procedures performed.`,
  },
  {
    question: 'Will there be visible scars after body contouring surgery?',
    answer: `Body contouring procedures involve many incisions so scarring is inevitable. However, the incisions are placed strategically to minimize visibility. Many scars will fade over time with proper care.`,
  },
  {
    question: 'Can body contouring surgery be performed in one session?',
    answer: `Depending on the extent of transformation needed, body contouring may be performed in one stage or multiple stages. Performing shorter surgeries in multiple stages allows for safer and faster recovery.`,
  },
  {
    question:
      'What are the potential risks and complications of body contouring surgery?',
    answer: `Like any surgery, body contouring carries potential risks, including infection, bleeding, scarring, wound healing complications, changes in sensation and adverse reactions to anesthesia. Patients should discuss these risks with their surgeon.`,
  },
  {
    question: 'Will body contouring surgery help me lose more weight?',
    answer: `Body contouring is not a weight loss procedure. It is designed to address excess skin and contour irregularities after significant weight loss. Patients should be at or near their goal weight before considering surgery.`,
  },
  {
    question: 'How long do the results of body contouring surgery last?',
    answer: `Results are long-lasting, especially with a healthy lifestyle. However, factors like aging and fluctuations in weight may impact the longevity of results.`,
  },
  {
    question: 'Will insurance cover the cost of body contouring surgery?',
    answer: `In most cases, body contouring is considered cosmetic, and insurance does not cover the procedures. Patients should check with their insurance providers for specific policies.`,
  },
]

useHead({
  title: title,
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'Candidates for body contouring typically suffer from loose (inelastic) skin on many or most areas of the body usually as a result of significant weight loss due to diet, exercise or bariatric surgery. ',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Body Contouring after Weight Loss</div>
      <services-body-main-thumb
        src="/img/services/thumbs/bodycontouringweightloss.jpg"
      ></services-body-main-thumb>
      <p>
        Body contouring surgery is a set of cosmetic procedures designed to
        reshape the body's contours by removing excess skin and fat. This type
        of surgery is often sought by individuals who have undergone significant
        weight loss, either through bariatric surgery or dieting. The aim is to
        address the loose, sagging skin that can result from major weight loss.
      </p>

      <p>Common Procedures include::</p>

      <ul class="unordered-list">
        <li>
          Tummy Tuck (Abdominoplasty): Removes excess skin and fat from the
          abdomen, tightens abdominal muscles.
        </li>
        <li>
          Lower Body Lift: Addresses sagging skin on the lower body, including
          the abdomen, buttocks, and hips.
        </li>
        <li>
          Arm Lift (Brachioplasty): Removes excess skin and fat from the upper
          arms and armpits.
        </li>
        <li>Thigh Lift: Targets sagging skin on the thighs.</li>
        <li>
          Breast Lift (Mastopexy) or Augmentation: Addresses sagging or deflated
          breasts.
        </li>
        <li>
          Bra line Lift: Focuses on removing skin folds along the back and bra
          line, utilizing an incision hidden within the natural bra line.
        </li>
      </ul>

      <p>
        Patients considering body contouring surgery should approach the
        decision thoughtfully, understanding the commitment involved in the
        recovery process and having realistic expectations about the outcomes.
        Body contouring surgery not only addresses physical changes but also
        plays a role in a patient's emotional well-being. Depending on the
        extent of the transformation needed, body contouring may be performed in
        one or more stages.
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
