<script lang="ts" setup>
interface Props {
  faqs?: []
  title: string
}

const props = withDefaults(defineProps<Props>(), {
  faqs: [],
  title: 'Title',
})
</script>

<template>
  <div class="services-faqs">
    <h3 class="title">{{ props.title }} FAQs</h3>
    <div class="faq-container">
      <div class="faq" v-for="faq in props.faqs">
        <dl>
          <dt class="question">{{ faq.question }}</dt>
          <dd class="answer">{{ faq.answer }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services-faqs {
  clear: both;
  margin-bottom: 40px;

  .faq-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 2vw;
    width: 100%;
  }

  .title {
    font-size: 150%;
    color: $primary;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .faq {
    padding: 20px;
    border-radius: $border-radius-v3;
    background-color: rgba(0, 0, 0, 0.03);
    border: 1px solid #eee;
  }

  .faq:hover {
    transition: all 0.5s ease;
    background-color: rgba(0, 0, 0, 0.08);
    // border: 1px solid $primary;
    box-shadow:
      0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .question {
    font-weight: 600;
    margin-bottom: 10px;
  }
}
</style>
