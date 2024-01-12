<script setup>
const appConfig = useAppConfig()
const target = ref(null)
const targetIsVisible = ref(false)

useHead({
  link: [
    { rel: 'preload', as: 'image', href: '/img/home/header-1600x1200.webp' },
    { rel: 'preload', as: 'image', href: '/img/home/header-600x450.webp' },
  ],
})

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
  },
)

// computed
const imageBg = computed(() => {
  return {
    backgroundPosition: 'center center',
    backgroundImage: 'url(/img/home/header-1600x1200.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
})
</script>

<template>
  <div class="home-splash">
    <!--    <div class="bg-image" :style="imageBg"></div>-->
    <img
      class="bg-img"
      src="/img/home/header-600x450.webp"
      srcset="
        /img/home/header-600x450.webp    600w,
        /img/home/header-1600x1200.webp 1600w
      "
      sizes="100vw"
      alt="Plastic Surgeon model"
    />
    <!--    <img class="bg-img" src="/img/home/header-1600x1200.webp" />-->
    <div class="mask">
      <div class="content" ref="target">
        <div :class="targetIsVisible ? 'ctas visible' : 'ctas'">
          <h1>Soft Natural Beauty</h1>
          <!--          <h4>Board Certified Plastic Surgeon</h4>-->
          <v-btn
            variant="flat"
            :class="targetIsVisible ? 'ctas__btn visible' : 'ctas__btn'"
            href="/contact-info/"
            title="Email to schedule a consultation"
          >
            Ask Dr. Min a Question
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-splash {
  border-bottom: 10px solid $secondary;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  aspect-ratio: 2/1;
  font-size: 200%;
  position: relative;
}

.bg-img {
  aspect-ratio: 2/1;
  width: 100%;
  object-fit: cover;
}

.bg-image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, $header-opacity);
}

.content {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
}

.ctas {
  text-align: center;
  place-self: center;
  color: #fff;

  h1 {
    position: relative;
    transition: all 1.5s ease;
    opacity: 0;
    font-size: clamp(35px, 6vw, 60px);
    line-height: clamp(40px, 8vw, 70px);
    font-weight: 300;
    margin-bottom: 10px;
    text-shadow: 1px 1px 1px $font-primary-shadow;
  }

  .ctas__btn {
    position: relative;
    transition: all 1.5s 0.25s;
    opacity: 0;
    text-transform: none;
    background-color: $tertiary-action;
    color: #fff;
    width: fit-content;
    margin-bottom: 25vw;
  }
}

.ctas__btn.visible {
  opacity: 1;
  margin-bottom: 2vw;
}

.ctas.visible {
  h1 {
    opacity: 1;
  }

  .ctas__btn {
    opacity: 1;
  }
}

@include upToSm {
  .bg-img {
    aspect-ratio: 3/2.5;
  }
  .home-splash {
    aspect-ratio: 3/2.5;
  }
  .ctas {
    h1 {
      opacity: 1;
    }

    .ctas__btn {
      opacity: 1;
      margin-bottom: 2vw;
    }
  }
}
</style>
