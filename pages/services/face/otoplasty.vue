<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`

useHead({
  title: 'Otoplasty',
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content: 'Otoplasty is ear surgery that is done to improve the appearance of large prominent ears that stick out. Patients with prominent ears are often teased during childhood for having “dumbo ears” and are very self-conscious about it. '
    }
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <h2 class="services-title">Otoplasty</h2>
      <services-body-main-thumb
        src="/img/services/thumbs/otoplasty.jpg">
      </services-body-main-thumb>
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

      <h1 class="header-text"><strong>Otoplasty FAQ's</strong></h1>
      <p>
        <strong>How is otoplasty surgery done?</strong>
        <br />
        It is typically done under general anesthesia at an outpatient surgery
        center. An incision is made in the crease behind the ear that is well
        hidden. Sutures are then used to reshape the ear and to pin it back
        closer to the head. At times, a small piece of cartilage is removed. The
        procedure lasts from two to three hours.
      </p>
      <p>
        <strong>Is there an age limit for the surgery?</strong>
        <br />
        For children, otoplasty can be done from age 5 and up. Otoplasty can
        also be done in adults of all ages.
      </p>
      <p>
        <strong>Is otoplasty covered by my insurance?</strong>
        <br />
        Otoplasty to set back protruding or overly large ears is generally
        considered a cosmetic procedure and is not covered by insurance.
        However, your policy may cover other ear surgeries, such as traumatic
        injuries resulting from a dog bite or accident in which your ear has
        been disfigured. Insurance may also cover severe congenital ear
        deformities in which a portion of the ear or entire ear is missing or
        disfigured.
      </p>
      <p>
        <strong>What is recovery from otoplasty like?</strong>
        <br />
        After surgery, you will have a head dressing in place for a few days.
        You will have mild pain, bruising and swelling of the ears. A soft
        headband is worn at night for 4 weeks to protect the ears. The patient
        can usually return to work or school after 1 week.
      </p>
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
