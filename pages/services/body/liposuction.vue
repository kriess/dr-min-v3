<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const title = 'Liposuction'
let canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
if (!canonicalUrl.endsWith('/')) {
  canonicalUrl = canonicalUrl + '/'
}

const faqs = [
  {
    question: 'How is liposuction performed?',
    answer: `The areas to be treated are carefully inspected and marked. The liposuction procedure begins with the injection of a solution composed of salt water, a local anesthetic, and a small amount of adrenaline. This is referred to as “tumescent” fluid and it allows the fat to be removed more easily with decreased bruising and bleeding. The fat is removed with a cannula that is connected to a suction device through very small incisions that are strategically placed to minimize visibility.`,
  },
  {
    question:
      'What are the differences between power assisted, ultrasonic and laser liposuction?',
    answer: `All of these methods are adjunctive techniques to help remove the fat more easily. Power assisted liposuction uses a vibrating cannula to break up the fat. Ultrasound uses ultrasonic energy to break up fat cells and laser liposuction uses a laser to melt fat.`,
  },
  {
    question: 'Is any one liposuction technique better than the others?',
    answer: `The most important part of performing liposuction is removing the fat evenly and making sure that just the right amount of fat is removed. All of these techniques get the job done. Ultrasound and laser liposuction are good for removing very fibrous fat such as that found in male gynecomastia (enlarged male breasts) but can have additional complications such as burns and fluid collections.`,
  },
  {
    question: 'How long does liposuction take?',
    answer: `The procedure may last from one to four hours, depending on the amount of fat being removed. Either local or general anesthesia is used, depending on the size of the areas being treated as well as other factors.`,
  },
  {
    question: 'How much fat can be safely removed by liposuction?',
    answer: `A large amount of fat can be removed in the outpatient setting, up to 5 liters.`,
  },
  {
    question: 'What is recovery from liposuction like?',
    answer: `After liposuction surgery, you will have some bruising and swelling. You may also have leakage of fluid from the incisions for a short period of time. A compression garment is worn for approximately two weeks. Most patients take a week off from work although some may return to work within a few days. Strenuous activity should be avoided for about a month. When the initial swelling subsides, you should see a significant improvement in your shape, although it takes up to a year for all trace amounts of swelling to resolve.`,
  },
  {
    question: 'Will I weigh less after liposuction?',
    answer: `You will notice an improvement in your shape and contour rather than a significant drop in your weight. This is because fat cells do not weigh that much but take up space. After your liposuction procedure, you may go down in clothing size because you have lost fat in key areas that affect your body shape.`,
  },
  {
    question: 'Will liposuction improve cellulite?',
    answer: `Generally, liposuction does not improve dimpling caused by cellulite.`,
  },
  {
    question:
      'Are the results permanent? What happens if I gain weight afterwards?',
    answer: `The results of liposuction are permanent in that the fat cells that are removed do not grow back. With weight gain, the remaining fat cells in your body will swell, not multiply. So if you gain a significant amount of weight after your surgery, you will get larger in all areas, not only in the areas that were treated.`,
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
        'Liposuction (also known as liposculpture) is one of the most popular cosmetic surgery procedures performed today. Liposuction permanently removes stubborn fat deposits that have not responded to diet and exercise. ',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Liposuction</div>
      <services-body-main-thumb
        src="/img/services/thumbs/liposuction.jpg"
      ></services-body-main-thumb>
      <p>
        Liposuction (also known as liposculpture) is one of the most popular
        cosmetic surgery procedures performed today. Liposuction permanently
        removes stubborn fat deposits that have not responded to diet and
        exercise. We are genetically programmed to store our body fat in
        different places. Some of us are “top heavy” and keep extra fat in the
        upper body while others tend to store excess fat in the middle section
        or legs. Liposuction can remove excess fat from your problem areas. It
        can be done in one area only or multiple different areas, depending on
        your needs. If you have trouble spots that prevent your clothes from
        fitting properly and lower your self-esteem, liposuction may be right
        for you.
      </p>

      <p>
        Liposuction is great for patients who are in good overall shape but have
        specific problem areas. It is not meant to be a way of losing overall
        body fat for patients who are very overweight. Liposuction will not
        improve loose, hanging skin and may make it worse.
      </p>

      <p>
        Liposuction can safely remove fat from many different areas. In the
        face, excess fat can be removed from the neck and along the jaw line. In
        the body, fat can be removed from virtually anywhere there is excess –
        upper arms, pooches in front of the armpits, chest, back, abdomen,
        waist, hips, buttocks, inner and outer thighs, knees, and calves.
      </p>

      <services-faqs :faqs="faqs" :title="title"></services-faqs>
      <services-before-after
        :title="title"
        section="body"
        procedure="liposuction"
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
