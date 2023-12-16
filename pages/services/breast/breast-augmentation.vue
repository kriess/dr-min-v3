<script lang="ts" setup>
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
interface Props {
  section: string
  procedure: object
}

// props
const props = withDefaults(defineProps<Props>(), {
  section: '',
  procedure: '',
})
</script>

<template>
  <div class="services-details">
    <div class="services-section">
      <div class="services-title">Breast Augmentation</div>
      <v-img
        class="thumb"
        cover
        :src="`/img/services/thumbs/breastsurgery.jpg`"
      ></v-img>
      <p>
        Breast augmentation is one of the most popular cosmetic surgery
        procedures in the United States. It can give women with small or
        unevenly sized breasts a fuller, firmer, better-proportioned look. Women
        choose to undergo breast augmentation for a variety of reasons. Some
        women have small breasts that never quite developed and enhancement with
        breast implants can improve self-esteem and quality of life. Other women
        choose breast augmentation to regain breast fullness that was lost after
        pregnancy and breast-feeding or after weight loss. In patients with
        sagging breast tissue, augmentation may be combined with a breast lift
        to provide the most optimal result. Some women are born with congenital
        breast defects where one breast is much smaller than the other or fails
        to develop at all. Breast augmentation can provide better symmetry in
        these patients so that the breasts match in size.
      </p>
      <p>
        Dr. Min takes the time during every consultation to learn what her
        patients want to achieve from a breast augmentation procedure. By
        listening to what patients have to say and closely examining them rather
        than performing a one-size-fits-all procedure, she provides a completely
        customized treatment. She has extensive experience with breast surgery
        and takes pride in natural looking, beautiful results.
      </p>

      <p>
        Breast augmentation is one of the most popular cosmetic surgery
        procedures in the United States. It can give women with small or
        unevenly sized breasts a fuller, firmer, better-proportioned look. Women
        choose to undergo breast augmentation for a variety of reasons. Some
        women have small breasts that never quite developed and enhancement with
        breast implants can improve self-esteem and quality of life. Other women
        choose breast augmentation to regain breast fullness that was lost after
        pregnancy and breast-feeding or after weight loss. In patients with
        sagging breast tissue, augmentation may be combined with a breast lift
        to provide the most optimal result. Some women are born with congenital
        breast defects where one breast is much smaller than the other or fails
        to develop at all. Breast augmentation can provide better symmetry in
        these patients so that the breasts match in size.
      </p>
      <p>
        Dr. Min takes the time during every consultation to learn what her
        patients want to achieve from a breast augmentation procedure. By
        listening to what patients have to say and closely examining them rather
        than performing a one-size-fits-all procedure, she provides a completely
        customized treatment. She has extensive experience with breast surgery
        and takes pride in natural looking, beautiful results.
      </p>

      <p>
        <strong>Silicone vs. Saline Implants</strong>
        <br />
        Breast implants are silicone shells filled with either saline (salt
        water) or silicone gel. Both types of implants are safe and FDA
        approved. There was some controversy regarding silicone implants in the
        past, but extensive studies have proven them to be safe. Silicone gel
        implants are softer and more natural looking and feeling than saline
        implants. They require a slightly larger incision for placement than
        saline implants because they come pre-filled with the gel. Saline
        implants are filled with salt water after they are placed into the
        breast pocket and can thus be rolled into a smaller size for insertion.
        Silicone implants are also costlier than saline implants. Dr. Min will
        discuss which option may be best for you during your consultation.
      </p>
      <p>
        <strong>
          Implant Sizes and Profiles
          <br />
        </strong>
        Breast implants are available in many different sizes and profiles (low,
        moderate or high profile). The profile of the implant refers to how tall
        the implant is, with the higher profile implants having more projection
        from your chest. The different types of implants are available for
        viewing in Dr. Min’s office. Generally, the moderate or high profile
        implants are most commonly used. Which one is selected depends on a
        number of factors, including the patient’s chest width, the amount of
        augmentation desired, and the appearance of the breasts.
      </p>
      <p>
        <strong>Incisions</strong>
        <br />
        The implants are placed through incisions that are made in inconspicuous
        places on the breast to minimize scar visibility. Dr. Min prefers to use
        an incision either around the areola border (the pigmented skin around
        the nipple) or in the crease on the underside of the breast. Both of
        these incisions usually heal very nicely. They also allow Dr. Min to
        have a clear view of the pocket that is made for the implant. This is
        very important, as the creation of an exact pocket is necessary for the
        most optimal result. If the pocket is not created perfectly, the
        implants will not sit correctly.
      </p>
      <p>
        <strong>Under vs. Over the Muscle</strong>
        <br />
        The implants are usually placed underneath the chest wall muscle, which
        offers a few advantages over placement beneath the breast tissue only.
        These include more natural looking breasts with improved tissue coverage
        over the upper part of the implants, reduced risk of capsular
        contracture (post-operative tightening around the implant) and less
        interference with mammograms. When the implants are placed under the
        breast tissue only, the outline of the upper part of the implant may be
        visible, especially in a thin patient.
      </p>
      <p>
        <strong>Recovery From Breast Augmentation Surgery</strong>
        <br />
        The procedure lasts 1 ½ to 2 hours and is typically performed under
        general anesthesia. After surgery, the bust-line may be increased by one
        or more cup sizes, depending on patient preference. Most patients feel
        tired and sore after surgery, but this usually improves quickly and many
        patients return to work within a week. Post-operative pain, swelling and
        sensitivity will diminish over the first few weeks. Scars will begin to
        fade in a few months and will continue to fade over the year. Initially,
        the implants may appear to be sitting too high. As the breast tissue and
        muscle stretch to accommodate them, the implants will drop down and look
        more natural over the course of several weeks. You should avoid any
        strenuous activity or exercise for 4 weeks.
      </p>
      <p>
        <strong>Complications Following Breast Augmentation Surgery</strong>
        <br />
        Complications following surgery are uncommon and usually minimal. They
        may include capsular contracture (hardening of the implant), bleeding,
        swelling and pain, infection, a change in nipple or breast sensation,
        milk production if you nursed a baby within a year before the procedure,
        dissatisfaction with results, need for additional surgery, delayed
        healing and leakage of the implant as a result of injury or the normal
        compression and movement of your breast.
        <strong></strong>
      </p>
      <h1 class="header-text"><strong>Breast Implant FAQ’s</strong></h1>
      <p>
        <strong>Will I be able to breastfeed after breast augmentation?</strong>
        <br />
        Implants may affect your ability to successfully breastfeed. Not all
        women are able to breastfeed, even without surgery. Many women have been
        able to successfully breastfeed with breast implants but the success
        rate is likely to be slightly lower.
      </p>
      <p>
        <strong>Will I lose nipple sensation?</strong>
        <br />
        A change in nipple sensation is always a possibility after any breast
        surgery, although the risk of permanent change is low.
      </p>
      <p>
        <strong>Are breast implants permanent?</strong>
        <br />
        Breast implants are not considered lifetime devices. Removal and
        replacement of your implants will eventually be required. Timing is
        different for each patient as some may require earlier intervention and
        others go much longer before exchanging their implants.
      </p>
      <p>
        <strong>Can I have the implants removed later on?</strong>
        <br />
        The implants can be removed but keep in mind that the breast tissue and
        skin have been stretched by the presence of the implant. After implant
        removal, the breasts may appear more droopy and deflated. The appearance
        of the breasts after implant removal depends on the way they looked
        before implantation and the size of the implants that were placed.
      </p>
      <p>
        <strong>What causes capsular contracture?</strong>
        <br />
        After breast augmentation, the body normally forms scar tissue or a
        “capsule” around the implant. Capsular contracture is the abnormal
        hardening of this capsule. This can range from mild firmness of the
        implants to extreme hardness and distortion of the breast appearance.
        Severe hardening is uncommon. The cause is not known but has been linked
        to possible microscopic bacterial contamination. It cannot be predicted
        which patients will develop this as each individual heals differently.
        Dr. Min takes measures to reduce the risk of capsule formation by using
        an antibiotic irrigation during surgery and instructing all patients to
        perform breast massage afterwards to keep the implants soft.
      </p>
      <p>
        <strong>What about pregnancy?</strong>
        <br />
        If you are planning to get pregnant within the next year or two, you
        should wait to undergo breast augmentation. Your breasts may undergo
        significant changes with pregnancy that may alter the results. If you
        have been pregnant recently, it is advisable to wait at least six months
        after you have finished breast-feeding to allow your breasts to have
        time to return to their normal shape and size.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services-details {
  width: auto;
  .services-title {
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
