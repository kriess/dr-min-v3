<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
const title = 'Arm Lift'

/**

 */
const faqs = [
  {
    question: 'How long is the recovery period after brachioplasty?',
    answer: `Recovery time varies, but most patients can expect to take off about 2 weeks from work.  There will be some swelling and bruising. Strenuous activities should be avoided during the initial healing period. Compression garments may be recommended to support the healing process.`,
  },
  {
    question: 'When will I see the final results of brachioplasty?',
    answer: `Some results are immediately visible, but final results may take 6 months to a year as the swelling continues to subside and the scars mature.. Patients should have realistic expectations and understand that the healing process takes time.`,
  },
  {
    question: 'Can I combine brachioplasty with other procedures?',
    answer: `Yes, brachioplasty can be combined with other procedures, such as liposuction or breast surgery.  Combining procedures may be discussed during the consultation.`,
  },
  {
    question:
      'What are the potential risks and complications of brachioplasty?',
    answer: `Like any surgery, brachioplasty carries potential risks, including infection, bleeding, scarring, asymmetry and changes in sensation to the arm skin.`,
  },
  {
    question: 'How can I minimize scarring after brachioplasty?',
    answer: `Closely following postoperative scar care instructions provided by the surgeon is crucial. This may include avoiding sun exposure, using scar creams/tapes, and avoiding certain movements of your arm in the postoperative period.`,
  },
]

useHead({
  title: title,
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'After substantial weight loss, weight gain or simply from the effects of ' +
        'aging, skin on the upper arms can become inelastic, loose and flabby.Arm lifts, also known as brachioplasty, remove that excess skin and fat.',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">{{ title }}</div>
      <services-body-main-thumb
        src="/img/services/thumbs/armlift.jpg"
      ></services-body-main-thumb>
      <p>
        Arm lift surgery, known as brachioplasty, is a cosmetic procedure
        designed to reshape the upper arms by removing excess skin and fat. This
        surgery is often sought by individuals who have experienced significant
        weight loss, leading to sagging or "batwing" arms. Ideal candidates for
        this surgery are those who have reached their goal weight and are
        overall healthy and non-smokers.
      </p>
      <p>
        Surgeons may use various techniques, such as liposuction, excision, or a
        combination of both, depending on the extent of correction needed. The
        placement of the skin incision is important so that the scar is hidden
        when your arms are down. The excision can extend into the armpit and
        also into the lateral chest if there is additional loose skin present in
        this area.
      </p>
      <p>
        Ideally, the arm lift scar should be placed carefully so that the scar
        is not visible when your arms are down by your side. The scars will be
        visible if you wear short sleeved clothing and your arms are raised.
        Over time, the scars should fade. Post-operative scar therapy is
        recommended for the optimal result.
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
