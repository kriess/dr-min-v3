<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const title = 'Blepharoplasty - Eyelid Lift'
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}/`

const faqs = [
  {
    question: 'What is transconjunctival blepharoplasty?',
    answer: `This refers to a limited form of eyelid surgery that is done in
 patients who have bulging fat in the eyelids without loose skin or
 muscle. These patients are usually younger and have good skin tone.
 The incision is made inside the eyelid and only fat is removed.
 There are no visible scars and recovery is quicker than with
 traditional blepharoplasty.
`,
  },
  {
    question: "What won't blepharoplasty correct?",
    answer: `Blepharoplasty cannot raise the eyebrows or reduce the appearance of
 crow’s feet or dark discoloration under the eyes. However, eyelid
 surgery can be combined with other procedures such as a brow lift,
 BOTOX® treatments and laser procedures to achieve optimal results.
`,
  },
  {
    question: 'What is a browlift and when is it combined with eyelid surgery?',
    answer: `The eyebrows are intimately related to the upper eyelids. When the
 eyebrows droop with age, the upper eyelids appear to have more skin
 excess than they would if the eyebrows were in a normal position. In
 those patients who have significant droopiness of the eyebrows,
 browlift is combined with upper eyelid lift for the most optimal
 result and complete correction of aging changes in the upper face.
`,
  },
  {
    question: 'What is the tear trough deformity?',
    answer: `The tear trough refers to the groove underneath the lower eyelid
 that extends from the inner corner of the eye. This groove is often
 one of the first signs of aging around the eyes and results from a
 loss of volume. It can be improved by the placement of fat or filler
 into the groove.
`,
  },
  {
    question: 'Is blepharoplasty ever covered by my insurance?',
    answer: `Upper eyelid lift may be covered by insurance for those patients who
 have a tremendous amount of hanging skin. In these patients, the
 skin excess must be enough to cause a limitation in vision. Your eye
 doctor must document this during an eye examination.
`,
  },
  {
    question: 'What is recovery from eyelid surgery like?',
    answer: `Bruising, swelling and a sense of tightness in the eyelids are
 common after eyelid surgery. Eyelid surgery is not typically
 painful. Most patients return to work in about 7-10 days. Contact
 lenses may not be worn for two weeks. The eyes may be more sensitive
 to light and wind and feel drier for a short while - eye drops and
 lubricants may be used to ease any temporary discomfort.
`,
  },
  {
    question: 'What are the risks of eyelid surgery?',
    answer: `Complications from blepharoplasty are uncommon, but can include
 infection, reaction to anesthesia, dry eyes, double or blurred
 vision for a few days, temporary swelling of the eyelids and
 difficulty closing the eyes when going to sleep. Uneven healing and
 scarring and ectropion (pulling down of the lower lids) are very
 rare and may require surgical correction.`,
  },
]

useHead({
  title: title,
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'Eyelid surgery, also known as blepharoplasty, can rejuvenate puffy, sagging, tired-looking eyes by removing excess fat, skin and muscle from the eyelids. ',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <h1 class="services-title">{{ title }}</h1>
      <services-body-main-thumb
        src="/img/services/thumbs/eyelid-adobe-2.jpg"
      ></services-body-main-thumb>
      <p>
        Eyelid surgery, also known as blepharoplasty, can rejuvenate puffy,
        sagging, tired-looking eyes by removing excess fat, skin and muscle from
        the eyelids. The procedure can be performed on either the upper or lower
        eyelid, or both, depending on what you need.
      </p>
      <p>
        The fat layer around the eyes can protrude as we get older, causing
        puffiness in the lower eyelids and in the corners of the upper eyelids.
        Fat protrusion can occur in some patients at an early age. Eyelid skin
        can also become loose and crepey and hang over the lids and the eyelid
        muscle can sag. If there is a large amount of overhanging skin, the
        condition can be uncomfortable and even limit vision. Women may find it
        making it difficult to apply make-up and have problems with eye shadow
        creasing in the folds.
      </p>
      <p>
        The best candidates for blepharoplasty are generally healthy, do not
        smoke and do not have any serious eye conditions like glaucoma or
        dryness. For lower eyelid surgery, it is important to have good eyelid
        tone to avoid complications. Dr. Min will evaluate this during the
        initial consultation.
      </p>
      <p>
        Eyelid surgery is performed on an outpatient basis either with local
        anesthesia and sedation or under general anesthesia. The procedure can
        take 45 to 60 minutes or longer, depending on how much work is done.
      </p>

      <services-faqs :faqs="faqs" :title="title"></services-faqs>
      <services-before-after
        :title="title"
        section="face"
        procedure="blepharoplasty"
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
