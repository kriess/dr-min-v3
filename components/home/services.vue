<script setup>
const appConfig = useAppConfig()
const props = defineProps({
  title: { type: String, default: 'page title' },
})

const services = [
  {
    link: '/services/face/',
    label: 'Face',
    imageSrc: `/img/home/services/face.webp?${appConfig.releaseId}`,
    content: `Tired of looking tired? Discover what facial rejuvenation can do to refresh your look. `,
  },
  {
    link: '/services/breast/',
    label: 'Breast',
    imageSrc: `/img/home/services/breast.webp?${appConfig.releaseId}`,
    content: `Whether you are looking for an augmentation, reduction, lift or a combination, learn about breast enhancement options.`,
  },
  {
    link: '/services/body/',
    label: 'Body',
    imageSrc: `/img/home/services/body.webp?${appConfig.releaseId}`,
    content: `Discover what can be done to remove unwanted fat and excess skin or boost your curves.`,
  },
  {
    link: '/services/non-surgical/',
    label: 'Non-Surgical',
    imageSrc: `/img/home/services/skin.webp?${appConfig.releaseId}`,
    content: `Not yet ready for surgery but need a refresh?  Learn about non surgical options.`,
  },
]
</script>

<template>
  <div class="home-services">
    <div
      v-for="(item, index) in services"
      :key="index"
      class="home-services__item"
      :style="`background-image: url(${item.imageSrc})`"
    >
      <NuxtLink class="nuxt-link" :to="item.link">
        <div class="item__wrapper">
          <div class="item__label">
            <h4 class="item__title">{{ item.label }}</h4>
          </div>
          <div class="item__content">
            <h4 class="item__title">{{ item.label }}</h4>
            {{ item.content }}
          </div>
        </div>
      </NuxtLink>
    </div>
    <!--    <div class="hidden-md-and-up hidden-sm-and-down">-->
    <!--      <div-->
    <!--        v-for="(item, index) in services"-->
    <!--        :key="index"-->
    <!--        class=""-->
    <!--        :style="`background-image: url(${item.imageSrc})`"-->
    <!--      >-->
    <!--        <NuxtLink class="nuxt-link" :to="item.link">-->
    <!--          <div class="item__wrapper">-->
    <!--            <div class="item__label">-->
    <!--              <h4 class="item__title">{{ item.label }}</h4>-->
    <!--            </div>-->
    <!--            <div class="item__content">-->
    <!--              <h4 class="item__title">{{ item.label }}</h4>-->
    <!--              {{ item.content }}-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </NuxtLink>-->
    <!--      </div>-->
    <!--    </div>-->
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
  display: flex;
  place-items: center;
  filter: grayscale(100%);
  transition: width 0.5s linear;

  .item__content {
    top: 700px;
    position: relative;
    text-align: center;
    padding: 0 2vw;
    visibility: visible;
    opacity: 1;
    transition:
      visibility 0s,
      top 0.5s ease,
      opacity 0.5s 0.6s;
  }

  .item__label {
    top: 38%;
    position: absolute;
    visibility: visible;
    opacity: 1;
    transition:
      visibility 0s,
      opacity 0.5s 0.6s,
      top 0.5s ease;
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
  font-size: clamp(1rem, 6vw, 2rem);
}

.nuxt-link {
  text-decoration: none;
  height: 100%;
  width: 100%;
}

@include upToSm {
  .home-services {
    flex-wrap: wrap;
  }
  .home-services__item,
  .home-services__item:hover {
    width: 50%;
    filter: grayscale(0%);

    .item__content {
      top: 0;
      opacity: 1;
    }

    .item__label {
      opacity: 0;
    }
  }
}
</style>
