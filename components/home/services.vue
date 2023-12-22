<script setup>
const props = defineProps({
  title: { type: String, default: "page title" },
})

const services = [
  {
    link: "/services/face/",
    label: "Face",
    imageSrc: '/img/raw/Layer-4-1024x676.jpg',
    content: `We enjoy seeing our patients' bright and happy faces, especially when we can care for them! Dr. Davis offers several aesthetic facial procedures, including rhinoplasties, facelifts, brow lifts, blepharoplasties, neck lifts, and fat transfers. Discover which facial rejuvenation procedure can help you reach your aesthetic goals by following the link.`
  },
  {
    link: "/services/breast/",
    label: "Breast",
    imageSrc: '/img/raw/Layer-3-1024x676.jpg',
    content: `A woman’s breasts can be a positive source of confidence and
            femininity. Dr. Davis has helped countless women achieve their ideal
            look through her cosmetic breast surgery options, which include breast
            augmentation, breast lift, breast lift with implants, breast revision
            and more. Continue reading for in-depth information on breast surgeries.`
  },
  {
    link: "/services/body/",
    label: "Body",
    imageSrc: '/img/raw/Davis-Homepage-Face-procedures-Beverly-Hills-CA-1024x676.jpg',
    content: `All bodies are welcome at Dr. Gabrielle B. Davis Plastic Surgery. Dr. Davis provides a number of body contouring procedures, such as tummy tucks, liposuction, mommy makeovers, Brazilian butt lifts, labiaplasty, and more. To see which body contouring procedures are right for you, please follow the link for thorough information on each procedure.  `
  },
  {
    link: "/services/skin/",
    label: "Skin",
    imageSrc: '/img/raw/Davis-Homepage-non-surgical-procedures-Beverly-Hills-1024x676.jpg',
    content: `Not interested or ready for cosmetic surgery? In addition to our surgical procedures, we also offer various non-surgical treatments such as injectables, non-surgical facelifts, laser skin resurfacing, microneedling, body sculpting, and more. Learn more about all of our non-surgical aesthetic treatments by following the link below.`
  },
]
</script>

<template>
  <div class="home-services">
    <div
      v-for="(item, index) in services"
      :key="index"
      class="home-services__item"
      :style="`background-image: url('${item.imageSrc}')`">
      <NuxtLink class="nuxt-link" :to="item.link">
        <div class="item__wrapper">
          <div class="item__label">
            <h4 class="item__title">{{ item.label}}</h4>
          </div>
          <div class="item__content">
            <h4 class="item__title">{{ item.label }}</h4>
            {{ item.content }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-services {
  border-top: 10px solid $secondary;
  border-bottom: 10px solid $secondary;
  overflow: hidden;
  display: flex;
  width: 100%;
}
.home-services__item {
  position: relative;
  background-position: center center;
  width: 25%;
  min-height: 620px;
  background-color: #e1d9c5;
  display: grid;
  place-items: center;
  filter: grayscale(100%);
  transition: width .5s linear;
  .item__content {
    top: 700px;
    position: relative;
    text-align: center;
    padding: 0 2vw;
    visibility: visible;
    opacity: 1;
    transition: visibility 0s, top 0.5s ease, opacity 0.5s 0.6s;
  }
  .item__label {
    top: 38%;
    position: absolute;
    visibility: visible;
    opacity: 1;
    transition: visibility 0s, opacity 0.5s 0.6s, top 0.5s ease;
  }
}
.home-services__item:hover {
  width: 35%;
  filter: grayscale(0%);
  .item__content {
    top: 38%;
    position: absolute;
    visibility: visible;
    opacity: 1;
  }
  .item__label {
    top: -700px;
    visibility: hidden;
    opacity: 0;
  }
}
.item__wrapper {
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
}
.item__title {
  text-align: center;
  font-weight: 300;
  text-transform: capitalize;
  color: #fff;
  font-size: 3vw;
}

.nuxt-link {
  text-decoration: none;
  height: 100%;
  width: 100%;
}
</style>
