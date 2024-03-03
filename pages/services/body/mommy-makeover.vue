<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
let canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
if (!canonicalUrl.endsWith('/')) {
  canonicalUrl = canonicalUrl + '/'
}
const title = 'Mommy Makeover'

/**

 */
const faqs = [
  {
    question: 'Am I a good candidate for a mommy makeover?',
    answer: `Good candidates for a mommy makeover are women who have completed their family planning, are in good overall health, and have specific concerns related to changes in their body following pregnancy and breastfeeding.  You should be at a healthy weight for your height and a non-smoker.`,
  },
  {
    question: 'How long is the recovery period after a mommy makeover?',
    answer: `Recovery time varies depending on the extent of the procedures performed. Most patients can expect to resume light activities within a week, with a gradual return to normal activities over several weeks.`,
  },
  {
    question: 'Can I have more children after a mommy makeover?',
    answer: `While it is possible to have more children after a mommy makeover, it is generally recommended to undergo the procedure after your family planning is complete.. Future pregnancies can impact the long-term results of the makeover.`,
  },
  {
    question: 'Will a mommy makeover address stretch marks?',
    answer: `Some improvement in the appearance of stretch marks may occur, depending on their location and severity but it is generally not possible to remove all stretch marks.`,
  },
  {
    question: 'How long do the results of a mommy makeover last?',
    answer: `The results of a mommy makeover are long-lasting, but factors such as aging, weight fluctuations, and lifestyle choices can impact the outcome over time. Maintaining a healthy lifestyle contributes to prolonged results.`,
  },
  {
    question: 'Will I have visible scars after a mommy makeover?',
    answer: `Scarring is an inevitable part of surgery, but Dr. Min aims to minimize visibility. Incisions are strategically placed, and scars typically fade over time. Post-operative scar care instructions will be provided.`,
  },
  {
    question: 'Can I customize my mommy makeover to address specific concerns?',
    answer: `Yes, a mommy makeover is highly customizable. During the consultation, Dr. Min will discuss individual concerns and goals to create a personalized treatment plan made just for you.`,
  },
  {
    question: "Can I undergo a mommy makeover if I haven't had children?",
    answer: `Absolutely, a woman who hasn't had children can still undergo a mommy makeover. While the term "mommy makeover" is commonly associated with post-pregnancy rejuvenation, the procedures included in a mommy makeover can be tailored to address various body contour concerns unrelated to childbirth.  Women who are bothered by the appearance of their breasts and abdomen, whether related to aging, weight fluctuations, or genetics, can explore the option of a mommy makeover too.`,
  },
]

useHead({
  title: title,
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        "One of our practice's increasingly popular programs addresses the changes to the female breasts and midsection after childbirth.",
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">{{ title }}</div>
      <services-body-main-thumb
        src="/img/services/thumbs/mommymakeover.jpg"
      ></services-body-main-thumb>
      <p>
        A mommy makeover is a comprehensive cosmetic surgery procedure designed
        to rejuvenate multiple areas of a woman's body that may have undergone
        changes due to pregnancy, childbirth, and breastfeeding. It is intended
        to help women regain their pre-pregnancy bodies and boost their
        confidence. While the specific components of a mommy makeover can vary
        based on individual needs and goals, it most often includes a
        combination of the following procedures:
      </p>

      <p>Breast Augmentation or Lift:</p>
      <ul class="unordered-list">
        <li>
          Pregnancy and breastfeeding can lead to changes in breast volume and
          shape. Breast augmentation may involve the use of implants or fat to
          restore lost volume, while a breast lift helps address sagging and
          repositions the breasts for a more youthful contour.
        </li>
      </ul>

      <p>Tummy Tuck (Abdominoplasty):</p>
      <ul class="unordered-list">
        <li>
          Pregnancy often stretches the abdominal muscles and skin, leading to
          loose skin and a protruding belly. A tummy tuck involves the removal
          of excess skin and tightening of the abdominal muscles to create a
          firmer and more toned appearance.
        </li>
      </ul>

      <p>Liposuction:</p>
      <ul class="unordered-list">
        <li>
          Liposuction is often included in a mommy makeover to remove stubborn
          pockets of fat that may have accumulated in various areas of the body,
          such as the abdomen, thighs, or flanks.
        </li>
      </ul>

      <p>
        A mommy makeover is not a one-size-fits-all procedure. Each makeover is
        tailored to every woman’s unique anatomy and concerns.
      </p>

      <services-faqs :faqs="faqs" :title="title"></services-faqs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services-details {
  width: 100%;

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
