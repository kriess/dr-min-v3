<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`
const title = 'Tummy Tuck'

/**

 */
const faqs = [
  {
    question: 'What is tummy tuck surgery?',
    answer: `A tummy tuck, or abdominoplasty, is a surgical procedure designed to address concerns such as excess skin, weakened abdominal muscles, and stubborn fat in the abdominal area. The surgery involves making an incision along the lower abdomen, typically from hip to hip, and removing surplus skin and fat. The underlying muscles are then tightened, resulting in a smoother, firmer abdominal contour.`,
  },
  {
    question: 'Who is a good candidate for a tummy tuck?',

    answer: `A tummy tuck is suitable for both men and women who are in good general health overall and are at a stable weight. Women who have muscles and skin stretched after pregnancy may find the procedure useful to tighten those muscles and reduce that skin. A tummy tuck is also an alternative for people with a history of obesity and who have lost significant weight but still have excessive fat deposits or loose skin in the abdominal area. Candidates should be in good overall health, non-smokers and have realistic expectations about the outcome of the procedure.`,
  },
  {
    question: 'How is a tummy tuck performed?',
    answer: `The surgery begins with the surgeon making an incision along the lower abdomen. The extent of the incision depends on the specific type of tummy tuck performed (full, mini, or extended) depending on your individual anatomy.. Excess skin is carefully removed, and the abdominal muscles are tightened using internal sutures. Liposuction is often employed to eliminate stubborn fat deposits and contour the waistline and other areas. The remaining skin is then re-draped to create a more toned and aesthetically pleasing appearance.`,
  },
  {
    question: 'What happens to the belly button?',
    answer: `During the surgery, your belly button will remain attached by its stalk and is cut out of the surrounding skin.  It is then “reinserted” into the new tight skin that is pulled over it.  Dr. Min takes great care in shaping an aesthetically pleasing button as it is a very important part of creating a beautiful tummy tuck result.`,
  },
  {
    question: 'What is the recovery time after a tummy tuck?',
    answer: `Recovery time varies, but patients can typically resume light activities within the first week. It's crucial to follow post-operative care instructions, including wearing compression garments, avoiding strenuous activities, and attending follow-up appointments. Full recovery, including the resolution of swelling and bruising, may take four to six weeks.`,
  },
  {
    question: 'Are there scars after a tummy tuck?',
    answer: `Yes, there will be a scar along the lower abdomen, typically positioned low enough to be concealed by underwear or a bikini. The scar will go through various stages of healing, initially appearing red and raised but gradually fading over time. Proper scar care, including keeping the incision site clean, using scar care products and avoiding sun exposure, can help minimize scarring.`,
  },
  {
    question: 'Are the results of a tummy tuck permanent?',
    answer: `While a tummy tuck provides long-lasting results, maintaining a healthy lifestyle is crucial for preserving the outcome. Factors such as weight fluctuations and pregnancy can impact the results over time. Following a balanced diet, engaging in regular exercise, and avoiding significant weight gain contribute to the longevity of the results.`,
  },
  {
    question: 'Can a tummy tuck be combined with other procedures?',
    answer: `Yes, a tummy tuck can be combined with other procedures such as liposuction or a mommy makeover, which may include breast enhancement procedures. Combining surgeries can address multiple concerns in a single operation, reducing overall recovery time.`,
  },
  {
    question: 'Are there risks associated with a tummy tuck?',
    answer: `Like any surgical procedure, a tummy tuck carries potential risks, including infection, bleeding, and complications related to anesthesia. Your surgeon will thoroughly discuss these risks during the pre-operative consultation, and steps will be taken to minimize these risks, such as conducting a comprehensive medical evaluation before surgery.  Dr. Min is meticulous in her surgical technique so complications are rarely seen.`,
  },
  {
    question: 'How soon can I expect to see the final results?',
    answer: `While there will be an immediate improvement in the abdominal contour after surgery, final results may take several months to become apparent. Swelling and bruising gradually subside during the initial weeks, revealing a more defined and sculpted appearance. Patience is crucial for achieving the best and most satisfying outcome.`,
  },
]
useHead({
  title: title,
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content:
        'Tummy tuck surgery, also known as abdominoplasty, removes unwanted excess fat and skin.',
    },
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">{{ title }}</div>
      <services-body-main-thumb
        src="/img/services/thumbs/abdominoplasty.jpg"
      ></services-body-main-thumb>
      <p>
        Sometimes, diet and exercise just aren't enough to give you the flat
        tummy that you desire. If you've been pregnant or experienced
        significant weight loss, you may have loose skin and stretch marks that
        don't go away no matter what you do. Tummy tuck surgery, also known as
        abdominoplasty, removes unwanted excess fat and skin. The surgery
        involves making an incision along the lower abdomen, typically from hip
        to hip, and removing skin and fat. If you have weakness in your
        abdominal muscles or separation of the muscles in the midline known as
        rectus diastasis, this will be repaired during surgery. The result is a
        smooth flat abdomen. The scar will be placed as low as possible so that
        it remains hidden by your underwear or bathing suit.
      </p>
      <p>
        There are different types of tummy tucks, each addressing specific
        concerns or varying in the extent of correction needed. Here are some
        common types of tummy tucks:
      </p>

      <p>Traditional or Full Tummy Tuck:</p>
      <ul class="unordered-list">
        <li>
          This is the most common type of tummy tuck. It involves an incision
          made horizontally from hip to hip, typically placed low on the abdomen
          to be concealed by underwear or swimwear. Excess skin and fat are
          removed, and the abdominal muscles are tightened.
        </li>
      </ul>

      <p>Mini Tummy Tuck:</p>
      <ul class="unordered-list">
        <li>
          A mini tummy tuck is a less extensive version of the traditional tummy
          tuck. It involves a smaller incision and focuses on the lower abdomen
          below the navel. This procedure is suitable for those with minor skin
          laxity and muscle concerns. Most patients are better suited for the
          traditional tummy tuck.
        </li>
      </ul>

      <p>Extended Tummy Tuck:</p>
      <ul class="unordered-list">
        <li>
          The extended tummy tuck addresses a larger area than the traditional
          tummy tuck. The incision is longer, often extending around the hips to
          the lower back. This allows for more significant correction of excess
          skin and tissue on the sides.
        </li>
      </ul>

      <p>Circumferential or Body Lift:</p>
      <ul class="unordered-list">
        <li>
          This is a more comprehensive procedure that involves a circumferential
          incision around the entire waistline. It addresses excess skin and fat
          not only on the abdomen but also on the back and sides. It is most
          commonly performed as part of body contouring after weight loss.
        </li>
      </ul>

      <p>Fleur-de-Lis Tummy Tuck:</p>
      <ul class="unordered-list">
        <li>
          This variation is suitable for individuals with significant vertical
          excess, often seen after massive weight loss. The incision is made in
          both horizontal and vertical directions, creating a shape resembling a
          fleur-de-lis.
        </li>
      </ul>

      <p>Reverse or Reverse Abdominoplasty:</p>
      <ul class="unordered-list">
        <li>
          Unlike traditional tummy tucks, the incision for a reverse
          abdominoplasty is made in the upper abdominal area, typically below
          the breasts along the breast fold. . It is suitable for individuals
          with excess skin limited to the upper abdomen. This type of
          abdominoplasty is not commonly performed.
        </li>
      </ul>

      <p>
        The choice of tummy tuck procedure depends on individual factors such as
        the extent of excess skin, the desired outcome, and the patient's
        overall health. It is crucial to consult with a board-certified plastic
        surgeon to determine the most suitable type of tummy tuck for your
        specific anatomy and goals.
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
