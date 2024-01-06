<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
const title = 'Buttock Augmentation'

/**

 */
const faqs = [
  {
    question: 'What is the recovery like after a BBL?',
    answer: `Swelling and bruising are common initially and will gradually resolve with time. Compression garments are worn to minimize swelling and support your newly sculpted contours. Prolonged sitting must be avoided for several weeks, using a cushion when sitting, and sleeping on the stomach or side to protect the newly transferred fat.  Compression Garments: Patients may be required to wear compression garments to minimize swelling and support the newly sculpted contours.  Limitations on Sitting: Patients are typically advised to avoid prolonged sitting for the first few weeks to protect the newly transferred fat.`,
  },
  {
    question: 'How much of the injected fat will survive?',
    answer: `The survival rate of fat transferred during a Brazilian Butt Lift can vary and it's important to note that not all of the transferred fat may survive. The survival rate typically ranges from 60% to 80%.  Several factors can influence the survival of transferred fat including surgical technique, patient factors and postoperative care.`,
  },
  {
    question: 'Are the results of BBL permanent?',
    answer: `Yes, the fat becomes a permanent part of the buttocks for an all natural silicone free result.`,
  },
  {
    question: 'What are the risks of butt lift?',
    answer: `Possible complications include infection, fat embolism, irregular contour, and fluid accumulation.  It is important to inject the fat evenly and smoothly and to avoid injection into the gluteus muscle where fat can more easily enter the bloodstream resulting in a potentially life-threatening complication.`,
  },
]

useHead({
  title: title,
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'The Brazilian Butt Lift, also known as BBL, is an increasingly popular\n' +
        '        cosmetic surgery procedure that enhances the shape and size of the\n' +
        '        buttocks.',
    },
  ],
})
</script>
<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">{{ title }}</div>
      <services-body-main-thumb
        src="/img/services/thumbs/buttockaugmentation.jpg"
      ></services-body-main-thumb>
      <p>
        The Brazilian Butt Lift, also known as BBL, is an increasingly popular
        cosmetic surgery procedure that enhances the shape and size of the
        buttocks. The procedure involves a two-step process, beginning with
        liposuction to remove fat from areas of excess,, most commonly in the
        abdomen, flanks, or thighs. The harvested fat is then purified and then
        injected into various areas of the buttocks to achieve a fuller and
        lifted contour.
      </p>
      <p>
        Enhancing the shape of the buttocks is just as important as adding
        volume to areas that are lacking. An important component of the surgery
        is treating and shaping the surrounding hip, waist and lower back areas
        to create a beautiful hourglass shape. The lower outer hip area, which
        can have depressions and are known as “hip dips”, are filled in with fat
        to create a smooth contour.
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
