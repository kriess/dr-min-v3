<script lang="ts" setup>
interface Props {
  title: string
  imageSrc?: string
  imageWidth?: string
  alt?: string
}

// props
const props = withDefaults(defineProps<Props>(), {
  title: 'Page Title',
  imageWidth: '50%',
  alt: 'Page Top Image',
})

// console.log(props)
</script>

<template>
  <div class="page-top-visuals">
    <div class="visuals">
      <div class="color-band"></div>
      <div class="title-image-container">
        <img
          v-if="imageSrc"
          :width="imageWidth"
          :alt="alt"
          :src="imageSrc"
          class="main-img"
        />
        <div class="page-title-visual">
          <h1 class="page-title-text">{{ title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-top-visuals {
  position: relative;
  padding: 100px 5vw 0 5vw;
  margin-bottom: 3vw;
}

.visuals {
  padding: min(5vw, 20px);
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;

  .title-image-container {
    margin: 0 auto;
    width: 90%;
    max-width: 400px;
    position: relative;
  }

  .main-img {
    border-radius: $main-border-radius;
  }

  .color-band {
    border-radius: $main-border-radius;
    background-color: $page-content-bg;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 50%;
  }

  .page-title-visual {
    position: absolute;
    top: 20%;
    left: 40%;
    color: #fff;
    background-color: $secondary;
    border-radius: $main-border-radius;
    padding: 10px 20px 10px 15px;
    width: fit-content;
  }

  .page-title-text {
    text-shadow: 1px 1px 1px #333;
    font-weight: 500;
    font-size: $page-title-font-size;
    margin: 0;
    white-space: nowrap;
  }
}

@include upToSm {
}
</style>
