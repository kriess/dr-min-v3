<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const canonicalUrl = `${runtimeConfig.public.siteDomain}${route.fullPath}`

useHead({
  title: 'Face Lift',
  link: [{ rel: 'canonical', hid: 'canonical', href: canonicalUrl }],
  meta: [
    {
      name: 'description',
      content: 'In time, gravity, sun exposure, and the stresses of daily life take their toll on our faces: wrinkles appear, skin sags, folds and fat deposits form on the neck and jawline. '
    }
  ],
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Facelift</div>
      <services-body-main-thumb
        src="/img/services/thumbs/facelift.jpg">
      </services-body-main-thumb>


      <p>
        In time, gravity, sun exposure, and the stresses of daily life take
        their toll on our faces: wrinkles appear, skin sags, folds and fat
        deposits form on the neck and jawline. Facelift surgery improves the
        appearance of aging changes in the face and neck by removing excess fat,
        lifting drooping tissue and tightening skin and muscles. Facelift
        surgery will give you a fresher, more youthful look.
      </p>
      <p>
        A facelift can be combined with a browlift, eyelid surgery or nose
        reshaping for more dramatic results, or it can be restricted to the neck
        (necklift) if the patient's problems center there. Incisions are made in
        inconspicuous places such as behind the hairline and in natural folds of
        the face and ears. Limited incision or short scar facelifts are
        performed on appropriate candidates. Dr. Min focuses on achieving, soft,
        natural looking results and avoids overaggressive surgery that can
        result in being pulled too tight and an "operated" look.
      </p>

      <h1 class="header-text">Facelift FAQ’s</h1>
      <p>
        <strong>Am I a good candidate for a facelift?</strong>
        <br />
        Facelift surgery will significantly improve your appearance if you are
        unhappy with droopy tissue in the face and or neck. You should be in
        good general health and not smoke. Patients who have certain medical
        conditions such as high blood pressure, blood clotting problems or the
        tendency to form excessive scars should discuss potential risks with
        their surgeon.
      </p>
      <p>
        <strong>What is the best age to have a facelift?</strong>
        <br />
        Facelifts are most often performed on people in their 40s-60s, but those
        in their 70s or 80s can have facelifts as well as long as they are in
        good overall health. Everyone ages differently so the right time to have
        surgery depends on your appearance and specific needs.
      </p>
      <p>
        <strong>What part of my face will be improved with a facelift?</strong>
        <br />
        The surgery will significantly improve the appearance of your cheeks,
        lower face, jawline and neck. It does not address the eyes or forehead.
        It can be combined with eyelid or browlift surgery if necessary.
      </p>
      <p>
        <strong>
          What is the difference between a mini-facelift and a full facelift?
        </strong>
        <br />
        A mini-facelift is typically performed on younger patients who have less
        skin laxity in the face and neck. The incisions can be shorter and the
        surgery is more limited. It is not good for older patients who have
        significant aging changes.
      </p>
      <p>
        <strong>What is the difference between a necklift and facelift?</strong>
        <br />
        A facelift procedure will typically address aging changes in both the
        face and neck. Some patients are only concerned with the appearance of
        their neck. In these patients, it is possible to perform a necklift
        procedure only to tighten the neck and leave the face unchanged.
      </p>
      <p>
        <strong>
          What is a threadlift?
          <br />
        </strong>
        The threadlift procedure became popular as a minimally invasive way of
        lifting droopy facial tissues by inserting wires into the face using
        small incisions. It has fallen out of favor because results have been
        shown to be short lived.
      </p>
      <p>
        <strong>
          How is facelift surgery done and where are the incisions placed?
        </strong>
        <br />
        Facelift surgery may be done as an outpatient procedure in a surgery
        center or in a hospital with an overnight stay, depending on several
        factors. Dr. Min prefers to perform the surgery under general anesthesia
        but it is possible to do with local anesthesia and sedation. The
        incisions are strategically placed in inconspicuous areas to be as
        unnoticeable as possible. The incision begins in the hairline at the
        sideburns and extends in the skin fold in front of the ear and back
        behind the earlobe. The remainder of the scar is hidden behind the ear
        and in the hairline. Fat along the jaw and neck will be suctioned, the
        deeper layer of muscle is tightened and lifted and the excess skin is
        trimmed. Fine stitches and a thin drainage tube are then placed.
      </p>
      <p>
        <strong>
          I am worried about looking unnatural after facelift surgery.
          <br />
        </strong>
        When done properly, facelift surgery should give you a natural, more
        youthful appearance. You will still look like yourself, only better. You
        should not have a pulled too tight, operated on appearance that is
        noticed by others. Patients who have an unnatural look have had their
        tissue pulled too tight or in the wrong direction during surgery.
        <strong></strong>
      </p>
      <p>
        <strong>
          What is recovery from facelift surgery like?
          <br />
        </strong>
        You will initially have some bruising and swelling and iced compresses
        should be applied for the first day. The drains are removed after 1-2
        days and the stitches will be removed by 1 week. The surgery is not
        typically painful but you may feel tightness in your lower face and neck
        that will improve with time. Most patients need 2 ½ to 3 weeks off from
        work to recover.
      </p>
      <p>
        <strong>How long do the results of a facelift surgery last?</strong>
        <br />
        Results of a facelift are long lasting but do not last forever. You will
        continue to age in the years after the surgery but will look far better
        than if you had never had the procedure.
      </p>
      <p>
        <strong>
          What are possible complications of facelift surgery?
          <br />
        </strong>
        Complications are uncommon but may include bleeding, infection,
        temporary or permanent nerve injury, numbness around the ears, and skin
        slough.
      </p>
      <p>
        <strong>
          I don’t think that I am ready for surgery yet. What are my
          alternatives?
        </strong>
        <br />
        If you are not yet ready to have surgery, you can consider treatments
        like Botox, filler injections, fat grafting, and laser procedures. These
        are less costly and less invasive, but will not improve your appearance
        as much as surgery can.
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
