<script lang="ts" setup>
interface Props {
  title: string
  imageSrc?: string
  imageWidth?: string
}

// props
const props = withDefaults(defineProps<Props>(), {
  title: 'Page Title',
  imageWidth: '50%',
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
          :src="imageSrc"
          class="main-img"
        ></v-img>
        <v-sheet color="primary" class="page-title-visual">
          <div class="page-title-text">{{ title }}</div>
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
    font-size: min(5vw, 50px);
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(20%);
  }
}
</style>
