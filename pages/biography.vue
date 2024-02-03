<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const pageTitle = 'Biography'
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`

useHead({
  bodyAttrs: {
    itemtype: 'https://schema.org/ProfilePage',
    itemscope: 'itemscope',
  },
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
      alt="Dr. Caroline Min - board certified plastic surgeon"
      image-src="/img/headshots/min-suit.jpg"
    ></PageTopVisuals>

    <div
      class="content-area"
      itemtype="https://schema.org/mainContentOfPage"
      itemscope
    >
      <div class="text-descriptions text-body-1">
        <p>
          Dr. Caroline Min was born and raised in New York City to parents who
          immigrated from South Korea. She comes from a family of physicians as
          both of her parents and twin sister are also physicians. She knew
          early on in childhood that she wanted to pursue a career in medicine
          as the idea of helping people appealed to her and she enjoyed science
          and innovation. With a love of working with her hands and changing
          lives for the better, she was fascinated by surgery while in medical
          school. Dr. Min completed a 5 year residency in General Surgery which
          gave her a robust foundation in both surgical skills and clinical
          knowledge needed to care for the entirety of a patient’s journey, from
          preoperative, intraoperative to postoperative recovery. She was drawn
          to the artistry and creativity of plastic surgery and went on to
          complete an accredited Plastic Surgery Residency at Montefiore Medical
          Center in New York. She completed an additional year of fellowship
          training in cosmetic plastic surgery at the Manhattan Eye, Ear and
          Throat Hospital under the tutelage of some of the most renowned
          cosmetic surgeons in the country.
        </p>
        <p>
          After completion of her training, Dr. Min moved to sunny Pasadena to
          begin her career, initially working for a medical group formerly known
          as HealthCare Partners. Dr. Min is board certified in Plastic Surgery
          since 2008 and is an active member of the American Society of Plastic
          Surgeons (ASPS), the largest plastic surgery organization in the
          world. ASPS members are required to have completed a minimum of 6
          years of surgical training, adhere to a strict code of ethics,
          participate in continuing education requirements and operate only in
          accredited medical facilities. She is proud to establish her private
          practice in late 2023 where she can provide her patients with
          personalized top notch care.
        </p>
        <p>
          Dr. Min is a mother to two wonderful boys, Lucas and Aiden. She also
          has two rescue dogs, Oreo and Willie and has a soft spot for animals
          in need. She has fostered dogs for local rescue organizations, one
          being a mother with puppies and another with medical needs. She enjoys
          being active - walking her dogs, Crossfit workouts, hiking, paddle
          boarding and snowboarding. She is an oenophile and enjoys wine and
          international food from all over the world.
        </p>
      </div>

      <div class="logos">
        <img
          src="/img/school-logos-200-tall/mit-logo.webp"
          alt="MIT School logo"
          height="100"
        />
        <img
          src="/img/school-logos-200-tall/nyu-logo.jpg"
          alt="NYU School logo"
          height="100"
        />
        <img
          src="/img/school-logos-200-tall/stanford-logo.webp"
          alt="Stanford School logo"
          height="100"
        />
        <img
          src="/img/school-logos-200-tall/abps-logo-square.webp"
          alt="American Board of Plastic Surgery logo"
          height="100"
        />
      </div>

      <div class="education content-width">
        <h2 class="title-text">Education & Training</h2>
        <h4 class="education--item">MIT / Stanford</h4>
        <h4 class="education--item">New York University School of Medicine</h4>

        <h4 class="education--item">
          Plastic Surgery Residency, Montefiore Medical Center
        </h4>

        <h4 class="education--item">
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
    text-align: center;
    border-bottom: 1px solid #777;
    padding-bottom: 50px;
    font-weight: 300;
    font-size: clamp(1rem, 8vw, 2.5rem);
    line-height: clamp(1rem, 8vw, 2.5rem);
  }

  .education--item {
    border-bottom: 1px solid #777;
    text-align: center;
    padding: 50px;
    font-weight: 300;
    font-size: clamp(1rem, 6vw, 2rem);
    line-height: clamp(1rem, 6vw, 2rem);
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

@include upToSm {
  .content-width {
    width: 100%;
  }
  .education {
    .education--item {
      padding: 40px 0px;
    }
  }
}
</style>
