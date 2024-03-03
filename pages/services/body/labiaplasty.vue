<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
let canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
if (!canonicalUrl.endsWith('/')) {
  canonicalUrl = canonicalUrl + '/'
}
const title = 'Labia Surgery & Vaginal Reconstruction Surgery'

/**

 */
const faqs = [
  {
    question: 'How is labiaplasty performed?',
    answer: `Generally speaking, there are two different ways to perform labiaplasty surgery, the trim technique and the wedge technique.  In the trim technique, the edge of the labia is excised and the incision is closed with sutures.  While it is a quicker procedure, this technique may result in a loss of natural contour with a more visible scar and a scalloped appearance to the edge of the labia.  The wedge technique involves removing a triangular-shaped wedge of tissue from the thickest part of the labia minora, preserving the natural contour and edge of the labia and the scars are well hidden.  This technique is more complex than the trim technique but gives superior results.`,
  },
  {
    question: 'Will labiaplasty affect sexual sensation?',
    answer: `Labiaplasty is generally focused on the external appearance of the labia and should not significantly impact sexual sensation. Some women may report increased comfort and satisfaction after the procedure.`,
  },
  {
    question: 'What is the recovery like after labiaplasty?',
    answer: `Pain is usually mild and most women can return to work in less than one week.  There is some swelling which will resolve with time.  Sexual intercourse and use of tampons should be avoided for 6 weeks.`,
  },
  {
    question: 'Will there be visible scarring after labiaplasty?',
    answer: `The wedge technique places the scars in discrete locations and once healed, the scars are usually barely visible.`,
  },
  {
    question: 'Is labiaplasty suitable for women of all ages?',
    answer: `Labiaplasty surgery is generally suitable for adult women.  Healing may be more delayed in post-menopausal women due to thinning of tissues with decline in estrogen levels.`,
  },
  {
    question: 'What are the risks associated with labiaplasty?',
    answer: `Like any surgery, labiaplasty carries potential risks, including infection, bleeding, scarring, and changes in sensation. Wound healing complications can rarely occur.`,
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
        'Elevate your natural beauty with the help of Dr Caroline Min MD. Click or call now for labia surgery and vaginal reconstruction surgery across Pasadena, CA!',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">{Labiaplasty{ title }</div>
      <services-body-main-thumb
        alt="Labiaplasty by Dr. Caroline Min: Board Certified Plastic Surgeon"
        src="/img/services/thumbs/labiaplasty.jpg"
      ></services-body-main-thumb>

      <p>
        Many women suffer from enlarged labia minora (the inner genital lips)
        which can cause physical and emotional discomfort. Some women may be
        dissatisfied with the appearance of their labia if it is larger or
        thicker than they desire. Enlarged labia minora can lead to discomfort
        during normal activities, such as walking, sitting, or wearing certain
        types of clothing as well as during sexual intercourse or sports. Women
        with enlarged labia minora may experience psychological distress,
        including embarrassment or anxiety which can influence intimate
        relationships and overall well-being.
      </p>
      <p>
        Labiaplasty reduces large labia or reshapes uneven labia, improving
        their appearance and reducing associated discomfort. The results of
        labiaplasty can:
      </p>
      <ul type="disc" class="unordered-list">
        <li>Improve the appearance of the vagina and vulva</li>
        <li>Boost self-confidence</li>
        <li>Reduce discomfort caused by clothes rubbing against the labia</li>
        <li>Eliminate pain caused by large labia during sexual intercourse</li>
        <li>
          Improve or restore sexual satisfaction that was hampered by large
          labia
        </li>
      </ul>
      <p>
        Dr. Min uses an advanced technique pioneered by Dr. Gary Alter who is
        renowned for his work in aesthetic genital surgery. This technique
        removes a wedge from the most protuberant portion of the labia and
        preserves the labial edge, which results in natural looking labia with
        scars that are barely visible. Excess skin on the sides of the clitoral
        hood can also be reduced. In contrast, many surgeons merely trim the
        edge of the labia and oversew the raw edge, which changes the natural
        color and contour of the labia, giving an unnatural appearance.
      </p>

      <services-faqs :faqs="faqs" :title="title"></services-faqs>
      <services-before-after
        :title="title"
        section="body"
        procedure="labiaplasty"
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
