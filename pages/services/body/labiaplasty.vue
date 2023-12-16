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
      <div class="services-title">Labiaplasty</div>
      <v-img
        class="thumb"
        cover
        :src="`/img/services/thumbs/labiaplasty.jpg`"
      ></v-img>

      <p>
        Many women suffer from enlarged labia minora (the inner genital lips).
        Some may not like the appearance of their large, uneven or thick labia,
        which can sometimes extend beyond the vaginal opening. Others may be
        bothered by labial irritation while conducting normal activities, or may
        find it difficult to keep the labial area clean. Still others may
        experience pain during sexual intercourse, sports or other vigorous
        activities.
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
        color and contour of the labia, giving an unnatural appearance. Recovery
        from labiaplasty surgery is quick and relatively pain free. Sexual
        intercourse may be resumed in 6 weeks.
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
