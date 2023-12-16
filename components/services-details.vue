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
    <template v-if="section === 'face'">
      <template v-if="procedure.slug === 'blepharoplasty'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            src="/img/services/thumbs/eyelid-adobe-2.jpg"
          ></v-img>
          <p>
            Eyelid surgery, also known as blepharoplasty, can rejuvenate puffy,
            sagging, tired-looking eyes by removing excess fat, skin and muscle
            from the eyelids. The procedure can be performed on either the upper
            or lower eyelid, or both, depending on what you need.
          </p>
          <p>
            The fat layer around the eyes can protrude as we get older, causing
            puffiness in the lower eyelids and in the corners of the upper
            eyelids. Fat protrusion can occur in some patients at an early age.
            Eyelid skin can also become loose and crepey and hang over the lids
            and the eyelid muscle can sag. If there is a large amount of
            overhanging skin, the condition can be uncomfortable and even limit
            vision. Women may find it making it difficult to apply make-up and
            have problems with eye shadow creasing in the folds.
          </p>
          <h1 class="header-text">Blepharoplasty FAQ’s</h1>
          <dl>
            <dt>Am I a good candidate for an eyelid lift?</dt>
            <dd>
              The best candidates for blepharoplasty are generally healthy, do
              not smoke and do not have any serious eye conditions like glaucoma
              or dryness. For lower eyelid surgery, it is important to have good
              eyelid tone to avoid complications. Dr. Min will evaluate this
              during the initial consultation.
            </dd>
          </dl>
          <dl>
            <dt>How is a blepharoplasty performed?</dt>
            <dd>
              Eyelid surgery is performed on an outpatient basis either with
              local anesthesia and sedation or under general anesthesia. The
              procedure can take 45 to 60 minutes or longer, depending on how
              much work is done.
            </dd>
          </dl>
          <dl>
            <dt>What is transconjunctival blepharoplasty?</dt>
            <dd>
              <p>
                This refers to a limited form of eyelid surgery that is done in
                patients who have bulging fat in the eyelids without loose skin
                or muscle. These patients are usually younger and have good skin
                tone. The incision is made inside the eyelid and only fat is
                removed. There are no visible scars and recovery is quicker than
                with traditional blepharoplasty.
              </p>
            </dd>
          </dl>
          <dl>
            <dt>What won't blepharoplasty correct?</dt>
            <dd>
              <p>
                Blepharoplasty cannot raise the eyebrows or reduce the
                appearance of crow’s feet or dark discoloration under the eyes.
                However, eyelid surgery can be combined with other procedures
                such as a brow lift, BOTOX® treatments and laser procedures to
                achieve optimal results.
              </p>
            </dd>
          </dl>
          <dl>
            <dt>
              What is a browlift and when is it combined with eyelid surgery?
            </dt>
            <dd>
              <p>
                The eyebrows are intimately related to the upper eyelids. When
                the eyebrows droop with age, the upper eyelids appear to have
                more skin excess than they would if the eyebrows were in a
                normal position. In those patients who have significant
                droopiness of the eyebrows, browlift is combined with upper
                eyelid lift for the most optimal result and complete correction
                of aging changes in the upper face.
              </p>
            </dd>
          </dl>
          <dl>
            <dt>What is the tear trough deformity?</dt>
            <dd>
              <p>
                The tear trough refers to the groove underneath the lower eyelid
                that extends from the inner corner of the eye. This groove is
                often one of the first signs of aging around the eyes and
                results from a loss of volume. It can be improved by the
                placement of fat or filler into the groove.
              </p>
            </dd>
          </dl>
          <dl>
            <dt>Is blepharoplasty ever covered by my insurance?</dt>
            <dd>
              <p>
                Upper eyelid lift may be covered by insurance for those patients
                who have a tremendous amount of hanging skin. In these patients,
                the skin excess must be enough to cause a limitation in vision.
                Your eye doctor must document this during an eye examination.
              </p>
            </dd>
          </dl>
          <dl>
            <dt>What is recovery from eyelid surgery like?</dt>
            <dd>
              <p>
                Bruising, swelling and a sense of tightness in the eyelids are
                common after eyelid surgery. Eyelid surgery is not typically
                painful. Most patients return to work in about 7-10 days.
                Contact lenses may not be worn for two weeks. The eyes may be
                more sensitive to light and wind and feel drier for a short
                while - eye drops and lubricants may be used to ease any
                temporary discomfort.
              </p>
            </dd>
          </dl>
          <dl>
            <dt>What are the risks of eyelid surgery?</dt>
            <dd>
              <p>
                Complications from blepharoplasty are uncommon, but can include
                infection, reaction to anesthesia, dry eyes, double or blurred
                vision for a few days, temporary swelling of the eyelids and
                difficulty closing the eyes when going to sleep. Uneven healing
                and scarring and ectropion (pulling down of the lower lids) are
                very rare and may require surgical correction.
              </p>
            </dd>
          </dl>
        </div>
      </template>
      <template v-if="procedure.slug === 'browlift'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>
          <p>
            A brow lift can revitalize the upper face by lifting sagging
            eyebrows that may make you look angry, tired and sad. The eye area
            tends to look heavy if the brows are droopy and in a low position.
            There are often deep furrows and excess skin in the glabella (the
            area between the eyebrows). The forehead creases are accentuated and
            deepened. Patients subconsciously try to compensate for the low brow
            position by contracting the forehead muscles, which temporarily
            elevates the brow and further deepens forehead lines.
          </p>
          <p>
            Using a minimally invasive method, the eyebrows are gently lifted to
            provide a more youthful appearance. The procedure is often combined
            with an upper eyelid lift to improve the look of the eyes and upper
            face.
          </p>
          <h1 class="header-text">Brow Lift FAQ's</h1>
          <p>
            <strong>What is an endoscopic brow lift?</strong>
            <br />
            This is the standard brow lift that is performed today. Small
            incisions are made in the scalp and an endoscope (small camera) is
            used to visualize and elevate the tissues. The brow is lifted and
            fixated into position with a small bioabsorbable device called an
            endotine. The scars are all within the hairline and are not visible.
          </p>
          <p>
            <strong>Am I a good candidate for an endoscopic brow lift?</strong>
            <br />
            The endoscopic brow lift procedure is great for patients who have
            significantly droopy, low positioned eyebrows but patients who have
            receding hairlines, very thin hair, or very high foreheads are
            generally not good candidates for the endoscopic technique.
          </p>
          <p>
            <strong>Are there different kinds of brow lifts?</strong>
            <br />
            Yes, there are several other techniques to lift the brow. The
            coronal brow lift is a more invasive procedure that involves a long
            incision in the scalp. It has been mostly replaced by the endoscopic
            technique but is still useful for patients with very heavy foreheads
            who need a more aggressive lift and in some men. A direct brow lift
            is performed by directly excising forehead skin just above the brow
            or in a forehead crease. It leaves a small minor scar that usually
            heals well and is done on patients who are not candidates for the
            endoscopic lift. The lateral temporal brow lift elevates the lateral
            brow only and is performed via an incision in the lateral part of
            the scalp.
          </p>
          <p>
            <strong>
              Can I avoid a brow lift and just have an upper eyelid lift
              instead?
            </strong>
            <br />
            The eyebrows and forehead are intimately related to the upper
            eyelids. If your eyebrows are excessively droopy and in a low
            position, the upper eyelids will appear to have more excess skin
            than they would if the eyebrows were in a normal position. If an
            upper eyelid lift is performed on a patient who has very droopy
            eyebrows without a brow lift, the result may be unsatisfactory.
          </p>
          <p>
            <strong>Will I look unnatural?</strong>
            <br />
            No, if done correctly in the proper patient, brow lift surgery will
            look natural and rejuvenate the upper face. But brow lift surgery
            isn't for everyone. It should only be done in patients whose
            eyebrows are in a very low position and in a conservative fashion.
            Over-aggressively elevated brows are associated with a frightened or
            surprised look that is unnatural appearing and should be avoided.
          </p>
          <p>
            <strong>What is recovery like?</strong>
            <br />
            There will be some mild swelling and bruising in the forehead area.
            The patient is advised to apply ice packs and keep the head elevated
            for 2 weeks. Strenuous activity should be avoided for 4 weeks.
          </p>
          <p>
            <strong>Is there a nonsurgical way to lift the eyebrow?</strong>
            <br />
            The eyebrows can be lifted slightly with Botox injections to the
            glabella. This effect is subtle and will last about 4 months.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'facelift'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>

          <p>
            In time, gravity, sun exposure, and the stresses of daily life take
            their toll on our faces: wrinkles appear, skin sags, folds and fat
            deposits form on the neck and jawline. Facelift surgery improves the
            appearance of aging changes in the face and neck by removing excess
            fat, lifting drooping tissue and tightening skin and muscles.
            Facelift surgery will give you a fresher, more youthful look.
          </p>
          <p>
            A facelift can be combined with a browlift, eyelid surgery or nose
            reshaping for more dramatic results, or it can be restricted to the
            neck (necklift) if the patient's problems center there. Incisions
            are made in inconspicuous places such as behind the hairline and in
            natural folds of the face and ears. Limited incision or short scar
            facelifts are performed on appropriate candidates. Dr. Min focuses
            on achieving, soft, natural looking results and avoids
            overaggressive surgery that can result in being pulled too tight and
            an "operated" look.
          </p>

          <h1 class="header-text">Facelift FAQ’s</h1>
          <p>
            <strong>Am I a good candidate for a facelift?</strong>
            <br />
            Facelift surgery will significantly improve your appearance if you
            are unhappy with droopy tissue in the face and or neck. You should
            be in good general health and not smoke. Patients who have certain
            medical conditions such as high blood pressure, blood clotting
            problems or the tendency to form excessive scars should discuss
            potential risks with their surgeon.
          </p>
          <p>
            <strong>What is the best age to have a facelift?</strong>
            <br />
            Facelifts are most often performed on people in their 40s-60s, but
            those in their 70s or 80s can have facelifts as well as long as they
            are in good overall health. Everyone ages differently so the right
            time to have surgery depends on your appearance and specific needs.
          </p>
          <p>
            <strong>
              What part of my face will be improved with a facelift?
            </strong>
            <br />
            The surgery will significantly improve the appearance of your
            cheeks, lower face, jawline and neck. It does not address the eyes
            or forehead. It can be combined with eyelid or browlift surgery if
            necessary.
          </p>
          <p>
            <strong>
              What is the difference between a mini-facelift and a full
              facelift?
            </strong>
            <br />
            A mini-facelift is typically performed on younger patients who have
            less skin laxity in the face and neck. The incisions can be shorter
            and the surgery is more limited. It is not good for older patients
            who have significant aging changes.
          </p>
          <p>
            <strong>
              What is the difference between a necklift and facelift?
            </strong>
            <br />
            A facelift procedure will typically address aging changes in both
            the face and neck. Some patients are only concerned with the
            appearance of their neck. In these patients, it is possible to
            perform a necklift procedure only to tighten the neck and leave the
            face unchanged.
          </p>
          <p>
            <strong>
              What is a threadlift?
              <br />
            </strong>
            The threadlift procedure became popular as a minimally invasive way
            of lifting droopy facial tissues by inserting wires into the face
            using small incisions. It has fallen out of favor because results
            have been shown to be short lived.
          </p>
          <p>
            <strong>
              How is facelift surgery done and where are the incisions placed?
            </strong>
            <br />
            Facelift surgery may be done as an outpatient procedure in a surgery
            center or in a hospital with an overnight stay, depending on several
            factors. Dr. Min prefers to perform the surgery under general
            anesthesia but it is possible to do with local anesthesia and
            sedation. The incisions are strategically placed in inconspicuous
            areas to be as unnoticeable as possible. The incision begins in the
            hairline at the sideburns and extends in the skin fold in front of
            the ear and back behind the earlobe. The remainder of the scar is
            hidden behind the ear and in the hairline. Fat along the jaw and
            neck will be suctioned, the deeper layer of muscle is tightened and
            lifted and the excess skin is trimmed. Fine stitches and a thin
            drainage tube are then placed.
          </p>
          <p>
            <strong>
              I am worried about looking unnatural after facelift surgery.
              <br />
            </strong>
            When done properly, facelift surgery should give you a natural, more
            youthful appearance. You will still look like yourself, only better.
            You should not have a pulled too tight, operated on appearance that
            is noticed by others. Patients who have an unnatural look have had
            their tissue pulled too tight or in the wrong direction during
            surgery.
            <strong></strong>
          </p>
          <p>
            <strong>
              What is recovery from facelift surgery like?
              <br />
            </strong>
            You will initially have some bruising and swelling and iced
            compresses should be applied for the first day. The drains are
            removed after 1-2 days and the stitches will be removed by 1 week.
            The surgery is not typically painful but you may feel tightness in
            your lower face and neck that will improve with time. Most patients
            need 2 ½ to 3 weeks off from work to recover.
          </p>
          <p>
            <strong>How long do the results of a facelift surgery last?</strong>
            <br />
            Results of a facelift are long lasting but do not last forever. You
            will continue to age in the years after the surgery but will look
            far better than if you had never had the procedure.
          </p>
          <p>
            <strong>
              What are possible complications of facelift surgery?
              <br />
            </strong>
            Complications are uncommon but may include bleeding, infection,
            temporary or permanent nerve injury, numbness around the ears, and
            skin slough.
          </p>
          <p>
            <strong>
              I don’t think that I am ready for surgery yet. What are my
              alternatives?
            </strong>
            <br />
            If you are not yet ready to have surgery, you can consider
            treatments like Botox, filler injections, fat grafting, and laser
            procedures. These are less costly and less invasive, but will not
            improve your appearance as much as surgery can.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'otoplasty'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>

          <p>
            Otoplasty is ear surgery that is done to improve the appearance of
            large prominent ears that stick out. Patients with prominent ears
            are often teased during childhood for having “dumbo ears” and are
            very self-conscious about it. The surgery reshapes the ears and sets
            them back closer to the head. Misshapen or deformed ears can also be
            corrected. The procedure can be performed on both children and
            adults and results in a dramatic change in the overall appearance
            and self esteem of the patient. After surgery, hair may be worn
            shorter, pulled back in a ponytail, or styled in an up do.
          </p>
          <p>
            Dr. Min also performs surgery on earlobe piercings that are
            stretched out to correct elongated or torn earlobe piercings.
            Earlobes that are elongated from aging can also be trimmed to make
            them smaller and more youthful appearing.
          </p>

          <h1 class="header-text"><strong>Otoplasty FAQ's</strong></h1>
          <p>
            <strong>How is otoplasty surgery done?</strong>
            <br />
            It is typically done under general anesthesia at an outpatient
            surgery center. An incision is made in the crease behind the ear
            that is well hidden. Sutures are then used to reshape the ear and to
            pin it back closer to the head. At times, a small piece of cartilage
            is removed. The procedure lasts from two to three hours.
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
            However, your policy may cover other ear surgeries, such as
            traumatic injuries resulting from a dog bite or accident in which
            your ear has been disfigured. Insurance may also cover severe
            congenital ear deformities in which a portion of the ear or entire
            ear is missing or disfigured.
          </p>
          <p>
            <strong>What is recovery from otoplasty like?</strong>
            <br />
            After surgery, you will have a head dressing in place for a few
            days. You will have mild pain, bruising and swelling of the ears. A
            soft headband is worn at night for 4 weeks to protect the ears. The
            patient can usually return to work or school after 1 week.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'necklift'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>

          <p>
            A neck lift is performed to remove excess fat beneath the chin and
            tighten loose skin in the neck. The procedure can produce dramatic
            results in the patient whose chin and/or neck has sagged with age or
            after weight loss.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'facelipo'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>

          <p>
            Facial liposuction sculpts the face by removing areas of fat from
            the lower cheek, jawline, chin or neck. For older patients looking
            to tone the cheeks or jowls liposuction can be an effective and less
            invasive alternative to a face or neck lift. Younger patients who
            have excess fat in the lower face and neck will benefit from
            liposuction and obtain a thinner, more sculpted face and jawline.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'buccal'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>

          <p>
            Buccal fat removal surgery removes excess fat from the cheeks to
            produce a more contoured and refined appearance. This is effective
            in patients who have full cheeks with rounds faces that desire a
            more chiseled look. You may have heard it called cheek reduction
            surgery, as well. It is often combined with liposuction of the neck
            for the best improvement in facial contour. A small incision is made
            in the cheek inside the mouth and excess fat is gently removed. The
            incision is closed with absorbable stitches. Recovery is quick and
            there may be mild swelling in the cheeks that will resolve within a
            few weeks.
          </p>
        </div>
      </template>
    </template>

    <template v-if="section === 'breast'">
      <template v-if="procedure.slug === 'breast-augmentation'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>
          <p>
            Breast augmentation is one of the most popular cosmetic surgery
            procedures in the United States. It can give women with small or
            unevenly sized breasts a fuller, firmer, better-proportioned look.
            Women choose to undergo breast augmentation for a variety of
            reasons. Some women have small breasts that never quite developed
            and enhancement with breast implants can improve self-esteem and
            quality of life. Other women choose breast augmentation to regain
            breast fullness that was lost after pregnancy and breast-feeding or
            after weight loss. In patients with sagging breast tissue,
            augmentation may be combined with a breast lift to provide the most
            optimal result. Some women are born with congenital breast defects
            where one breast is much smaller than the other or fails to develop
            at all. Breast augmentation can provide better symmetry in these
            patients so that the breasts match in size.
          </p>
          <p>
            Dr. Min takes the time during every consultation to learn what her
            patients want to achieve from a breast augmentation procedure. By
            listening to what patients have to say and closely examining them
            rather than performing a one-size-fits-all procedure, she provides a
            completely customized treatment. She has extensive experience with
            breast surgery and takes pride in natural looking, beautiful
            results.
          </p>

          <p>
            Breast augmentation is one of the most popular cosmetic surgery
            procedures in the United States. It can give women with small or
            unevenly sized breasts a fuller, firmer, better-proportioned look.
            Women choose to undergo breast augmentation for a variety of
            reasons. Some women have small breasts that never quite developed
            and enhancement with breast implants can improve self-esteem and
            quality of life. Other women choose breast augmentation to regain
            breast fullness that was lost after pregnancy and breast-feeding or
            after weight loss. In patients with sagging breast tissue,
            augmentation may be combined with a breast lift to provide the most
            optimal result. Some women are born with congenital breast defects
            where one breast is much smaller than the other or fails to develop
            at all. Breast augmentation can provide better symmetry in these
            patients so that the breasts match in size.
          </p>
          <p>
            Dr. Min takes the time during every consultation to learn what her
            patients want to achieve from a breast augmentation procedure. By
            listening to what patients have to say and closely examining them
            rather than performing a one-size-fits-all procedure, she provides a
            completely customized treatment. She has extensive experience with
            breast surgery and takes pride in natural looking, beautiful
            results.
          </p>

          <p>
            <strong>Silicone vs. Saline Implants</strong>
            <br />
            Breast implants are silicone shells filled with either saline (salt
            water) or silicone gel. Both types of implants are safe and FDA
            approved. There was some controversy regarding silicone implants in
            the past, but extensive studies have proven them to be safe.
            Silicone gel implants are softer and more natural looking and
            feeling than saline implants. They require a slightly larger
            incision for placement than saline implants because they come
            pre-filled with the gel. Saline implants are filled with salt water
            after they are placed into the breast pocket and can thus be rolled
            into a smaller size for insertion. Silicone implants are also
            costlier than saline implants. Dr. Min will discuss which option may
            be best for you during your consultation.
          </p>
          <p>
            <strong>
              Implant Sizes and Profiles
              <br />
            </strong>
            Breast implants are available in many different sizes and profiles
            (low, moderate or high profile). The profile of the implant refers
            to how tall the implant is, with the higher profile implants having
            more projection from your chest. The different types of implants are
            available for viewing in Dr. Min’s office. Generally, the moderate
            or high profile implants are most commonly used. Which one is
            selected depends on a number of factors, including the patient’s
            chest width, the amount of augmentation desired, and the appearance
            of the breasts.
          </p>
          <p>
            <strong>Incisions</strong>
            <br />
            The implants are placed through incisions that are made in
            inconspicuous places on the breast to minimize scar visibility. Dr.
            Min prefers to use an incision either around the areola border (the
            pigmented skin around the nipple) or in the crease on the underside
            of the breast. Both of these incisions usually heal very nicely.
            They also allow Dr. Min to have a clear view of the pocket that is
            made for the implant. This is very important, as the creation of an
            exact pocket is necessary for the most optimal result. If the pocket
            is not created perfectly, the implants will not sit correctly.
          </p>
          <p>
            <strong>Under vs. Over the Muscle</strong>
            <br />
            The implants are usually placed underneath the chest wall muscle,
            which offers a few advantages over placement beneath the breast
            tissue only. These include more natural looking breasts with
            improved tissue coverage over the upper part of the implants,
            reduced risk of capsular contracture (post-operative tightening
            around the implant) and less interference with mammograms. When the
            implants are placed under the breast tissue only, the outline of the
            upper part of the implant may be visible, especially in a thin
            patient.
          </p>
          <p>
            <strong>Recovery From Breast Augmentation Surgery</strong>
            <br />
            The procedure lasts 1 ½ to 2 hours and is typically performed under
            general anesthesia. After surgery, the bust-line may be increased by
            one or more cup sizes, depending on patient preference. Most
            patients feel tired and sore after surgery, but this usually
            improves quickly and many patients return to work within a week.
            Post-operative pain, swelling and sensitivity will diminish over the
            first few weeks. Scars will begin to fade in a few months and will
            continue to fade over the year. Initially, the implants may appear
            to be sitting too high. As the breast tissue and muscle stretch to
            accommodate them, the implants will drop down and look more natural
            over the course of several weeks. You should avoid any strenuous
            activity or exercise for 4 weeks.
          </p>
          <p>
            <strong>Complications Following Breast Augmentation Surgery</strong>
            <br />
            Complications following surgery are uncommon and usually minimal.
            They may include capsular contracture (hardening of the implant),
            bleeding, swelling and pain, infection, a change in nipple or breast
            sensation, milk production if you nursed a baby within a year before
            the procedure, dissatisfaction with results, need for additional
            surgery, delayed healing and leakage of the implant as a result of
            injury or the normal compression and movement of your breast.
            <strong></strong>
          </p>
          <h1 class="header-text"><strong>Breast Implant FAQ’s</strong></h1>
          <p>
            <strong>
              Will I be able to breastfeed after breast augmentation?
            </strong>
            <br />
            Implants may affect your ability to successfully breastfeed. Not all
            women are able to breastfeed, even without surgery. Many women have
            been able to successfully breastfeed with breast implants but the
            success rate is likely to be slightly lower.
          </p>
          <p>
            <strong>Will I lose nipple sensation?</strong>
            <br />
            A change in nipple sensation is always a possibility after any
            breast surgery, although the risk of permanent change is low.
          </p>
          <p>
            <strong>Are breast implants permanent?</strong>
            <br />
            Breast implants are not considered lifetime devices. Removal and
            replacement of your implants will eventually be required. Timing is
            different for each patient as some may require earlier intervention
            and others go much longer before exchanging their implants.
          </p>
          <p>
            <strong>Can I have the implants removed later on?</strong>
            <br />
            The implants can be removed but keep in mind that the breast tissue
            and skin have been stretched by the presence of the implant. After
            implant removal, the breasts may appear more droopy and deflated.
            The appearance of the breasts after implant removal depends on the
            way they looked before implantation and the size of the implants
            that were placed.
          </p>
          <p>
            <strong>What causes capsular contracture?</strong>
            <br />
            After breast augmentation, the body normally forms scar tissue or a
            “capsule” around the implant. Capsular contracture is the abnormal
            hardening of this capsule. This can range from mild firmness of the
            implants to extreme hardness and distortion of the breast
            appearance. Severe hardening is uncommon. The cause is not known but
            has been linked to possible microscopic bacterial contamination. It
            cannot be predicted which patients will develop this as each
            individual heals differently. Dr. Min takes measures to reduce the
            risk of capsule formation by using an antibiotic irrigation during
            surgery and instructing all patients to perform breast massage
            afterwards to keep the implants soft.
          </p>
          <p>
            <strong>What about pregnancy?</strong>
            <br />
            If you are planning to get pregnant within the next year or two, you
            should wait to undergo breast augmentation. Your breasts may undergo
            significant changes with pregnancy that may alter the results. If
            you have been pregnant recently, it is advisable to wait at least
            six months after you have finished breast-feeding to allow your
            breasts to have time to return to their normal shape and size.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'breast-lift'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>
          <p>
            A breast lift, or mastopexy, is performed to return youthful shape
            and lift to breasts that have sagged as a result of weight loss,
            pregnancy, loss of the skin's natural elasticity or simply the
            effects of aging and gravity. The procedure can also reduce areolar
            size (the dark skin surrounding the nipple), and it can be combined
            with breast augmentation for added firmness or volume. It is usually
            done under general anesthesia. Dr. Min is skilled in performing a
            limited scar breast lift for appropriate candidates.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'breast-reduction'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>
          <p>
            Large breasts can cause pain, improper posture, rashes, breathing
            problems, skeletal deformities, and low self-esteem. Breast
            reduction surgery is usually done to provide relief from these
            symptoms. Performed under general anesthesia, the procedure removes
            fat and glandular tissue and tightens skin to produce smaller,
            lighter and perkier breasts that are in a healthier proportion to
            the rest of the body. A limited scar breast reduction can be
            performed in those patients who are good candidates.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'breast-revision'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>
          <p>
            Revision breast augmentation is performed for patients who are not
            satisfied with their results after previously undergoing breast
            augmentation. These patients' unhappiness may arise from the implant
            shape, size, or placement or because of a post-surgical complication
            such as wrinkling, implant displacement, capsular contracture
            (hardening around the implant) or synmastia (implants drift
            together). We can correct these errors and help patients enjoy the
            fuller breasts they envisioned before their original surgery.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'inverted-nipples'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>
          <p>
            Nipple and areola reconstruction can provide a boost in
            self-confidence to patients who have inverted or stretched nipples.
            The inverted nipples can be surgically altered to create a more
            prominent and projected appearance.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'breast-reduction-male'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>
          <p>
            Enlarged male breasts (gynecomastia) affect nearly 40-60% of men,
            often with no known cause. This condition can be highly embarrassing
            as well as physically uncomfortable. Men who feel self-conscious
            about enlarged breasts may seek breast reduction surgery. The
            procedure removes fat and/or glandular tissue from the breasts, and
            in some cases excess skin as well. The result is a flatter, firmer
            chest.
          </p>
        </div>
      </template>
    </template>

    <template v-if="section === 'body'">
      <template v-if="procedure.slug === 'abdominoplasty'">
        <div class="services-section">
          <div class="services-title">Abdominoplasty (Tummy Tuck)</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>
          <p>
            Sometimes, diet and exercise just aren't enough to give you the flat
            tummy that you desire. Especially if you've been pregnant or
            experienced significant weight loss, you may have loose skin and
            stretch marks that don't go away no matter what you do. Tummy tuck
            surgery, also known as abdominoplasty, removes unwanted excess fat
            and skin. If you have weakness in your abdominal muscles or
            separation of the muscles in the midline (known as rectus
            diastasis), this will be repaired during surgery. The result is a
            smooth flat abdomen. The scar will be placed as low as possible so
            that it remains hidden by your underwear or bathing suit.
          </p>
          <p>
            Liposuction is often combined with abdominoplasty to contour the
            waistline and other areas.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'liposuction'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>
          <p>
            Liposuction (also known as liposculpture) is one of the most popular
            cosmetic surgery procedures performed today. Liposuction permanently
            removes stubborn fat deposits that have not responded to diet and
            exercise. We are genetically programmed to store our body fat in
            different places. Some of us are “top heavy” and keep extra fat in
            the upper body while others tend to store excess fat in the middle
            section or legs. Liposuction can remove excess fat from your problem
            areas. It can be done in one area only or multiple different areas,
            depending on your needs. If you have trouble spots that prevent your
            clothes from fitting properly and lower your self-esteem,
            liposuction may be right for you.
          </p>
          <h1 class="header-text">Liposuction FAQ’s</h1>

          <p>
            <strong>Am I a good candidate for liposuction?</strong>
            <br />
            Liposuction is great for patients who are in good overall shape but
            have specific problem areas. It is not meant to be a way of losing
            overall body fat for patients who are very overweight. Liposuction
            will not improve loose, hanging skin and may make it worse.
          </p>
          <p>
            <strong>What areas can liposuction be performed on?</strong>
            Liposuction can safely remove fat from many different areas. In the
            face, excess fat can be removed from the neck and along the jaw
            line. In the body, fat can be removed from virtually anywhere there
            is excess – upper arms, pooches in front of the armpits, chest,
            back, abdomen, waist, hips, buttocks, inner and outer thighs, knees,
            and calves.
          </p>
          <p>
            <strong>How is liposuction performed?</strong>
            <br />
            The areas to be treated are carefully inspected and marked. The
            liposuction procedure begins with the injection of a solution
            composed of salt water, a local anesthetic, and a small amount of
            adrenaline. This is referred to as “tumescent” fluid and it allows
            the fat to be removed more easily with decreased bruising and
            bleeding. The fat is removed with a cannula that is connected to a
            suction device through very small incisions that are strategically
            placed to minimize visibility.
          </p>
          <p>
            <strong>
              What are the differences between power assisted, ultrasonic and
              laser liposuction?
            </strong>
            <br />
            All of these methods are adjunctive techniques to help remove the
            fat more easily. Power assisted liposuction uses a vibrating cannula
            to break up the fat. Ultrasound uses ultrasonic energy to break up
            fat cells and laser liposuction uses a laser to melt fat.
          </p>
          <p>
            <strong>
              Is any one liposuction technique better than the others?
            </strong>
            <br />
            The most important part of performing liposuction is removing the
            fat evenly and making sure that just the right amount of fat is
            removed. All of these techniques get the job done. Ultrasound and
            laser liposuction are good for removing very fibrous fat such as
            that found in male gynecomastia (enlarged male breasts) but can have
            additional complications such as burns and fluid collections.
          </p>
          <p>
            <strong>
              How long does liposuction take?
              <br />
            </strong>
            The procedure may last from one to four hours, depending on the
            amount of fat being removed. Either local or general anesthesia is
            used, depending on the size of the areas being treated as well as
            other factors.
          </p>
          <p>
            <strong>
              How much fat can be safely removed by liposuction?
              <br />
            </strong>
            A large amount of fat can be removed in the outpatient setting, up
            to 5 liters.
          </p>
          <p>
            <strong>What is recovery from liposuction like?</strong>
            <br />
            After liposuction surgery, you will have some bruising and swelling.
            You may also have leakage of fluid from the incisions for a short
            period of time. A compression garment is worn for approximately two
            weeks. Most patients take a week off from work although some may
            return to work within a few days. Strenuous activity should be
            avoided for about a month. When the initial swelling subsides, you
            should see a significant improvement in your shape, although it
            takes up to a year for all trace amounts of swelling to resolve.
          </p>
          <p>
            <strong>
              Will I weigh less after liposuction?
              <br />
            </strong>
            You will notice an improvement in your shape and contour rather than
            a significant drop in your weight. This is because fat cells do not
            weigh that much but take up space. After your liposuction procedure,
            you may go down in clothing size because you have lost fat in key
            areas that affect your body shape.
          </p>
          <p>
            <strong>
              Will liposuction improve cellulite?
              <br />
            </strong>
            Generally, liposuction does not improve dimpling caused by
            cellulite.
          </p>
          <p>
            <strong>
              Are the results permanent? What happens if I gain weight
              afterwards?
            </strong>
            <br />
            The results of liposuction are permanent in that the fat cells that
            are removed do not grow back. With weight gain, the remaining fat
            cells in your body will swell, not multiply. So if you gain a
            significant amount of weight after your surgery, you will get larger
            in all areas, not only in the areas that were treated.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'arm-lift'">
        <div class="services-section">
          <div class="services-title">Arm Lift (Brachioplasty)</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>
          <p>
            After substantial weight loss, weight gain or simply from the
            effects of aging, skin on the upper arms can become inelastic, loose
            and flabby. Arm lifts, also known as brachioplasty, remove that
            excess skin and fat. Patients who have significant amounts of fat
            may want to consider combining the procedure with liposuction.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'thigh-lift'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>
          <p>
            A thigh lift is performed to remove excess skin and fat from the
            upper legs. Candidates typically suffer from loose, inelastic skin
            after extreme weight loss due to diet, exercise or bariatric
            surgery. Because of this, the procedure is often combined with
            others such as breast lifts, facelifts and arm lifts to retain an
            attractive body proportion.
          </p>
          <p>
            In a medial thigh lift (inner thigh lift), the surgical incision is
            made in the inner thigh along the line where the leg meets the
            groin. In a lateral thigh lift (outer thigh lift), the incision is
            made from the groin around the back of the body, so that the
            buttocks are lifted along with the thigh.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'buttock-augmentation'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>
          <p>
            For patients who desire larger, fuller buttocks, fat from other
            parts of the body can be transferred to the buttocks, creating long
            lasting augmentation.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'body-contouring'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>
          <p>
            Candidates for body contouring typically suffer from loose
            (inelastic) skin on many or most areas of the body usually as a
            result of significant weight loss due to diet, exercise or bariatric
            surgery. Because of this, the procedure is often combined with
            others such as breast lifts, arm lifts and liposuction to retain a
            proper body proportion. Body contouring tightens and tones areas of
            loose skin on the abdomen, breasts, back, buttocks, hips and thighs.
            After the loose, hanging skin is removed, the patient will have a
            complete body makeover and newfound self-confidence.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'labiaplasty'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>

          <p>
            Many women suffer from enlarged labia minora (the inner genital
            lips). Some may not like the appearance of their large, uneven or
            thick labia, which can sometimes extend beyond the vaginal opening.
            Others may be bothered by labial irritation while conducting normal
            activities, or may find it difficult to keep the labial area clean.
            Still others may experience pain during sexual intercourse, sports
            or other vigorous activities.
          </p>
          <p>
            Labiaplasty reduces large labia or reshapes uneven labia, improving
            their appearance and reducing associated discomfort. The results of
            labiaplasty can:
          </p>
          <ul type="disc" class="unordered-list">
            <li>Improve the appearance of the vagina and vulva</li>
            <li>Boost self-confidence</li>
            <li>
              Reduce discomfort caused by clothes rubbing against the labia
            </li>
            <li>
              Eliminate pain caused by large labia during sexual intercourse
            </li>
            <li>
              Improve or restore sexual satisfaction that was hampered by large
              labia
            </li>
          </ul>
          <p>
            Dr. Min uses an advanced technique pioneered by Dr. Gary Alter who
            is renowned for his work in aesthetic genital surgery. This
            technique removes a wedge from the most protuberant portion of the
            labia and preserves the labial edge, which results in natural
            looking labia with scars that are barely visible. Excess skin on the
            sides of the clitoral hood can also be reduced. In contrast, many
            surgeons merely trim the edge of the labia and oversew the raw edge,
            which changes the natural color and contour of the labia, giving an
            unnatural appearance. Recovery from labiaplasty surgery is quick and
            relatively pain free. Sexual intercourse may be resumed in 6 weeks.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'mommy-makeover'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>

          <p>
            One of our practice's increasingly popular programs addresses the
            changes to the female breasts and midsection after childbirth.
          </p>
          <p>
            After breastfeeding, the breasts can be droopy, smaller and have a
            deflated appearance. This can be corrected with breast augmentation
            and/or breast lift.
          </p>
          <p>
            For the abdomen/midsection area, the most common concerns include
            the following:
          </p>
          <ul class="unordered-list">
            <li>Stretch marks</li>
            <li>Loose abdominal skin</li>
            <li>Abdominal pouching or protrusion</li>
            <li>
              Abdominal fat hanging over that does not fit well into clothing.
            </li>
            <li>
              This can be corrected with abdominoplasty surgery, often combined
              with limited liposuction
            </li>
          </ul>
        </div>
      </template>
    </template>

    <template v-if="section === 'skin'">
      <template v-if="procedure.slug === 'botox'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            src="/img/services/thumbs/eyelid-adobe-2.jpg"
          ></v-img>
          <p>
            BOTOX® Cosmetic is commonly used to reduce or eliminate the
            appearance of facial wrinkles. It is injected under the skin into
            areas surrounding the eyes, forehead and mouth to smooth crow's
            feet, frown and worry lines, and lines on the neck. If BOTOX® is
            injected regularly, the deepening of wrinkles from repetitive facial
            movements such as frowning, can be prevented. Made from a purified
            protein, BOTOX® relaxes wrinkles and gives the face a rejuvenated
            look. BOTOX® may also be useful for migraine headaches, excessive
            sweating, and eye and neck muscle spasms.
          </p>
        </div>
      </template>
      <template v-if="procedure.slug === 'fillers'">
        <div class="services-section">
          <div class="services-title">{{ procedure.title }}</div>
          <v-img
            class="thumb"
            cover
            :src="`/img/services/thumbs/${procedure.thumbUrl || 'temp.jpg'}`"
          ></v-img>
          <p>
            Facial fillers are designed to smooth wrinkles, sculpt lips and
            shape facial contours. It is a clear, synthetic gel made with
            hyaluronic acid, a natural substance that is found throughout your
            body. It carries little risk of allergic reaction. The most common
            areas for treatment are the glabellar lines (between the eyebrows)
            and the nasolabial folds (from the root of the nose to the angle of
            your mouth and the lips). The results can last from six months to a
            year.
          </p>
        </div>
      </template>
    </template>
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
    outline: 1px solid #ccc;
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
