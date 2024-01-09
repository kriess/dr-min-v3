<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
const title = 'Male Breast Reduction'

/**

 */

const faqs = [
  {
    question: ' What is gynecomastia?',
    answer: `Gynecomastia is a condition characterized by the enlargement of male breast tissue. It can result from hormonal imbalances, genetics, certain medications, or medical conditions.  However, there is often no known cause.`,
  },
  {
    question: ' Who is a good candidate for gynecomastia surgery?',
    answer: `Good candidates for gynecomastia surgery are men who are physically healthy, emotionally stable, and bothered by the appearance of enlarged breasts. Candidates should be non-smokers and have realistic expectations about the outcomes of the procedure.`,
  },
  // {
  //   question: ' What does gynecomastia surgery involve?',
  //   answer: `Gynecomastia surgery, or male breast reduction, involves the removal of excess breast tissue, fat, and in some cases, skin to contour the chest to achieve an aesthetically pleasing result. The surgeon may use liposuction, excision techniques, or a combination of both to achieve a flatter and more masculine chest contour.  The specific techniques used depend on factors such as the extent of breast enlargement, the amount of skin excess as well as the patient's anatomy and the overall desired outcome.  Gynecomastia surgery is typically performed as an outpatient procedure under general anesthesia.`,
  // },
  {
    question: ' Will there be visible scars after gynecomastia surgery?',
    answer: `If the skin excess is minimal, the scar can be placed on the lower border of the areola which typically heals inconspicuously.  If there is a large amount of sagging skin and skin removal is needed, the scarring will be more extensive and visible.`,
  },
  {
    question: 'Are the results of gynecomastia surgery permanent?',
    answer: `Gynecomastia surgery provides long-lasting results, but maintaining a stable weight and a healthy lifestyle is essential. Significant weight fluctuations or certain medications or drugs could potentially impact the outcome over time.`,
  },
  {
    question: ' Will I experience pain after gynecomastia surgery?',
    answer: `Pain and discomfort are typically mild after gynecomastia surgery, but medication will be prescribed to manage pain during the initial stages of recovery.`,
  },
]

useHead({
  title: title,
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'Enlarged male breasts (gynecomastia) affect nearly 40-60% of men, often with no known cause. This condition can be highly embarrassing as well as physically uncomfortable.',
    },
  ],
})
</script>
<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Breast Reduction Male</div>
      <services-body-main-thumb
        src="/img/services/thumbs/malebreast-surgery.jpg"
      ></services-body-main-thumb>
      <p>
        Enlarged male breasts, a condition known as gynecomastia, impact a
        significant percentage of men, estimated to be between 40-60%, often
        without a discernible cause. This condition can be both emotionally
        distressing and physically uncomfortable. Men experiencing
        self-consciousness or discomfort due to enlarged breasts may explore the
        option of breast reduction surgery, also known as gynecomastia surgery.
        The surgery aims to address the excess fat and/or glandular tissue in
        the breasts, and in some cases, it may involve the removal of excess
        skin. The ultimate goal is to achieve a flatter and firmer chest,
        restoring a more masculine contour. This procedure can have a
        transformative impact on a man's self-esteem and overall sense of
        well-being.
      </p>
      <p>
        Gynecomastia surgery, or male breast reduction, involves the removal of
        excess breast tissue, fat, and in some cases, skin to contour the chest
        to achieve an aesthetically pleasing result. The surgeon may use
        liposuction, excision techniques, or a combination of both to achieve a
        flatter and more masculine chest contour. The specific techniques used
        depend on factors such as the extent of breast enlargement, the amount
        of skin excess as well as the patient's anatomy and the overall desired
        outcome. Gynecomastia surgery is typically performed as an outpatient
        procedure under general anesthesia.
      </p>

      <services-faqs :faqs="faqs" :title="title"></services-faqs>
      <services-before-after
        :title="title"
        section="breast"
        procedure="male-breast-reducstion"
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
