<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const title = 'Otoplasty'
let canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
if (!canonicalUrl.endsWith('/')) {
  canonicalUrl = canonicalUrl + '/'
}

const faqs = [
  {
    question: 'How is otoplasty surgery done?',
    answer: ` It is typically done under general anesthesia at an outpatient surgery
 center. An incision is made in the crease behind the ear that is well
 hidden. Sutures are then used to reshape the ear and to pin it back
 closer to the head. At times, a small piece of cartilage is removed. The
 procedure lasts from two to three hours.`,
  },
  {
    question: 'Is there an age limit for the surgery?',
    answer: ` For children, otoplasty can be done from age 5 and up. Otoplasty can
 also be done in adults of all ages.`,
  },
  {
    question: 'What is recovery from otoplasty like?',
    answer: ` After surgery, you will have a head dressing in place for a few days.
 You will have mild pain, bruising and swelling of the ears. A soft
 headband is worn at night for 4 weeks to protect the ears. The patient
 can usually return to work or school after 1 week.`,
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
        'Otoplasty is ear surgery that is done to improve the appearance of large prominent ears that stick out. Patients with prominent ears are often teased during childhood for having “dumbo ears” and are very self-conscious about it. ',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <h2 class="services-title">{{ title }}</h2>
      <services-body-main-thumb
        src="/img/services/thumbs/otoplasty.jpg"
      ></services-body-main-thumb>
      <p>
        Otoplasty is ear surgery that is done to improve the appearance of large
        prominent ears that stick out. Patients with prominent ears are often
        teased during childhood for having “dumbo ears” and are very
        self-conscious about it. The surgery reshapes the ears and sets them
        back closer to the head. Misshapen or deformed ears can also be
        corrected. The procedure can be performed on both children and adults
        and results in a dramatic change in the overall appearance and self
        esteem of the patient. After surgery, hair may be worn shorter, pulled
        back in a ponytail, or styled in an up do.
      </p>
      <p>
        Dr. Min also performs surgery on earlobe piercings that are stretched
        out to correct elongated or torn earlobe piercings. Earlobes that are
        elongated from aging can also be trimmed to make them smaller and more
        youthful appearing.
      </p>
      <p>
        Otoplasty to set back protruding or overly large ears is generally
        considered a cosmetic procedure and is not covered by insurance.
        However, your policy may cover other ear surgeries, such as traumatic
        injuries resulting from a dog bite or accident in which your ear has
        been disfigured. Insurance may also cover severe congenital ear
        deformities in which a portion of the ear or entire ear is missing or
        disfigured.
      </p>

      <services-faqs :faqs="faqs" :title="title"></services-faqs>
      <services-before-after
        :title="title"
        section="face"
        procedure="otoplasty"
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
