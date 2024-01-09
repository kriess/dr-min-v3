<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const title = 'Brow Lift'
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}/`

const faqs = [
  {
    question: 'Are there different kinds of brow lifts?',
    answer: `Yes, there are several other techniques to lift the brow. The coronal
    brow lift is a more invasive procedure that involves a long incision in
    the scalp. It has been mostly replaced by the endoscopic technique but
    is still useful for patients with very heavy foreheads who need a more
    aggressive lift and in some men. A direct brow lift is performed by
    directly excising forehead skin just above the brow or in a forehead
    crease. It leaves a small minor scar that usually heals well and is done
    on patients who are not candidates for the endoscopic lift. The lateral
    temporal brow lift elevates the lateral brow only and is performed via
    an incision in the lateral part of the scalp.`,
  },
  {
    question:
      'Can I avoid a brow lift and just have an upper eyelid lift instead?',
    answer: `The eyebrows and forehead are intimately related to the upper eyelids.
    If your eyebrows are excessively droopy and in a low position, the upper
    eyelids will appear to have more excess skin than they would if the
    eyebrows were in a normal position. If an upper eyelid lift is performed
    on a patient who has very droopy eyebrows without a brow lift, the
    result may be unsatisfactory.`,
  },
  {
    question: 'Will I look unnatural?',
    answer: `No, if done correctly in the proper patient, brow lift surgery will look
    natural and rejuvenate the upper face. But brow lift surgery isn't for
    everyone. It should only be done in patients whose eyebrows are in a
    very low position and in a conservative fashion. Over-aggressively
    elevated brows are associated with a frightened or surprised look that
    is unnatural appearing and should be avoided.`,
  },
  {
    question: 'What is recovery like?',
    answer: `There will be some mild swelling and bruising in the forehead area. The
    patient is advised to apply ice packs and keep the head elevated for 2
    weeks. Strenuous activity should be avoided for 4 weeks.`,
  },
  {
    question: 'Is there a nonsurgical way to lift the eyebrow?',
    answer: `The eyebrows can be lifted slightly with Botox injections to the
    glabella. This effect is subtle and will last about 4 months.`,
  },
]

useHead({
  title: title,
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'A brow lift can revitalize the upper face by lifting sagging eyebrows that may make you look angry, tired and sad. The eye area tends to look heavy if the brows are droopy and in a low position. ',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">{{ title }}</div>
      <services-body-main-thumb
        src="/img/services/thumbs/eyebrowlift.jpg"
      ></services-body-main-thumb>
      <p>
        A brow lift can revitalize the upper face by lifting sagging eyebrows
        that may make you look angry, tired and sad. The eye area tends to look
        heavy if the brows are droopy and in a low position. There are often
        deep furrows and excess skin in the glabella (the area between the
        eyebrows). The forehead creases are accentuated and deepened. Patients
        subconsciously try to compensate for the low brow position by
        contracting the forehead muscles, which temporarily elevates the brow
        and further deepens forehead lines.
      </p>
      <p>
        Using a minimally invasive method, the eyebrows are gently lifted to
        provide a more youthful appearance. The procedure is often combined with
        an upper eyelid lift to improve the look of the eyes and upper face.
      </p>
      <p>
        The endoscopic brow lift is is the standard brow lift that is performed
        today. Small incisions are made in the scalp and an endoscope (small
        camera) is used to visualize and elevate the tissues. The brow is lifted
        and fixated into position with a small bioabsorbable device called an
        endotine. The scars are all within the hairline and are not visible.
      </p>
      <p>
        The endoscopic brow lift procedure is great for patients who have
        significantly droopy, low positioned eyebrows but patients who have
        receding hairlines, very thin hair, or very high foreheads are generally
        not good candidates for the endoscopic technique.
      </p>
      <services-faqs :faqs="faqs" :title="title"></services-faqs>
      <services-before-after
        :title="title"
        section="face"
        procedure="browlift"
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
