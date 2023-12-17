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
        <v-img
          v-if="imageSrc"
          :width="imageWidth"
          cover
          :alt="alt"
          :src="imageSrc"
          class="main-img"
        ></v-img>
        <v-sheet color="primary" class="page-title-visual">
          <h1 class="page-title-text">{{ title }}</h1>
        </v-sheet>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-top-visuals {
  position: relative;
  padding: 0 5vw 0 5vw;
}
.visuals {
  padding: min(5vw, 40px);
  margin: 0 auto;
  width: 100%;
  .title-image-container {
    margin: 0 auto;
    width: 70%;
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
    top: 35%;
    right: 0;
    bottom: 35%;
    left: 40%;
    border-radius: $main-border-radius;
  }
  .page-title-text {
    text-shadow: 1px 1px 1px #333;
    font-weight: 500;
    font-size: $page-title-font-size;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(20%);
  }
}
</style>
