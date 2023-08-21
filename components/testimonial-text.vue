<script lang="ts" setup>
const props = defineProps<{
  text: string
  initials: string
  procedures: string[]
}>()
</script>

<template>
  <div class="testimonial-text">
    <div>
      <blockquote class="text">{{ text }}</blockquote>
      <div class="attribution">
        <span class="initials">{{ initials }}</span>
        -
        <span v-for="p in props.procedures" :key="p" class="procedures">
          {{ p }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.testimonial-text {
  width: auto;
  overflow: hidden;
  .procedures {
    text-transform: capitalize;
  }
  .procedures::after {
    content: ', ';
  }
  .procedures:last-child::after {
    content: '';
  }
  .attribution {
    margin-top: 10px;
    font-weight: bold;
  }
  .text {
    font-style: italic;
  }
  .text::before,
  .text::after {
    content: '"';
  }
}
</style>
