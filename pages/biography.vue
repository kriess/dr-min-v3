<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const pageTitle = 'Biography'
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`

useHead({
  title: pageTitle,
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'Dr. Caroline Min is a plastic & reconstructive surgeon who performs\n' +
        ' cosmetic surgery of the face, breast and body as well as general\n' +
        ' reconstructive plastic surgery.',
    },
  ],
})
</script>

<template>
  <section class="biography page">
    <PageTopVisuals
      :title="pageTitle"
      alt="Dr. Caroline Min, M.D. - board certified plastic surgeon"
      image-src="/img/headshots/min-suit.jpg"
    ></PageTopVisuals>

    <div class="content-area">
      <div class="text-descriptions text-body-1">
        <p>
          Dr. Caroline Min is a plastic & reconstructive surgeon who performs
          cosmetic surgery of the face, breast and body as well as general
          reconstructive plastic surgery. She provides the full range of
          cosmetic procedures with an emphasis on obtaining soft, natural
          looking results. Each consultation is personalized and confidential.
          Dr. Min realizes that every patient has different needs and aesthetic
          standards. She will listen carefully to each patient and formulate an
          individualized treatment plan to best achieve his or her goals. Dr.
          Min is committed to providing the highest quality of care with an
          emphasis on safety and ethical practice. She is always available for
          her patients, both before and after surgery.
        </p>
        <p>
          Dr. Min is fully trained in plastic surgery as well as general
          surgery. She completed a general surgery residency at St. Luke's
          Roosevelt Hospital in New York City. She completed her plastic surgery
          training at Montefiore Medical Center in the Bronx. Because she has a
          special interest in cosmetic surgery, she decided to pursue additional
          training in this subspecialty to further hone her skills. She
          completed the prestigious aesthetic surgery fellowship at the
          Manhattan Eye, Ear and Throat Hospital under the tutelage of some of
          the most renowned cosmetic surgeons in the country.
        </p>
        <p>
          Dr. Min is double board certified in both Plastic Surgery and General
          Surgery. She is an active member of the American Society of Plastic
          Surgeons (ASPS), the largest plastic surgery organization in the
          world. ASPS members are required to have completed a minimum of 6
          years of surgical training, adhere to a strict code of ethics,
          participate in continuing education requirements and operate only in
          accredited medical facilities. She is also a member of the Los Angeles
          Society of Plastic Surgeons and the California Society of Plastic
          Surgeons.
        </p>
      </div>

      <div class="logos">
        <img src="/img/school-logos-200-tall/mit-logo.webp" alt="MIT School logo" height="100" />
        <img src="/img/school-logos-200-tall/nyu-logo.jpg" alt="NYU School logo" height="100" />
        <img src="/img/school-logos-200-tall/stanford-logo.webp" alt="Stanford School logo" height="100" />
        <img src="/img/school-logos-200-tall/abps-logo-square.webp" alt="American Board of Plastic Surgery logo" height="100" />
      </div>

      <div class="education content-width">
        <h2 class="text-h2 text-center title-text">Education & Training</h2>
        <h4 class="education--item text-h4">MIT / Stanford</h4>
        <h4 class="education--item text-h4">
          New York University School of Medicine
        </h4>

        <h4 class="education--item text-h4">
          Plastic Surgery Residency, Montefiore Medical Center
        </h4>

        <h4 class="education--item text-h4">
          Aesthetic Surgery Fellowship, Manhattan Eye, Ear and Throat Hospital
        </h4>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.biography {
  width: auto;
}
.content-width {
  width: 70%;
  margin: 0 auto;
}

.text-descriptions {
  // background-color: $page-content-bg;
  padding: 0 0 50px 0;
  p {
    margin-bottom: 20px;
  }
  p:last-child {
    margin-bottom: 0px;
  }
}
.education {
  padding-bottom: 50px;
  .title-text {
    border-bottom: 1px solid #777;
    padding-bottom: 50px;
  }
  .education--item {
    border-bottom: 1px solid #777;
    text-align: center;
    padding: 50px;
  }
}

.logos {
  padding: 0 0 50px 0;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
