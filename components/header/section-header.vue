<script setup>
const route = useRoute()
const services = useServices()

const getBg = () => {
  const isService = route.fullPath.includes('/services')
  const sections = route.fullPath.split('/')
  const siteSection = isService ? sections[2] : sections[1]

  if (siteSection === 'body') {
    return {
      backgroundPosition: 'bottom right',
      backgroundImage:
        'url(https://www.gingerxumd.com/wp-content/uploads/2023/05/Xu-Banner-Body-Updated.jpg)',
    }
  }
  if (siteSection === 'face') {
    return {
      backgroundPosition: 'bottom center',
      backgroundImage: 'url(/img/header/section/face.jpg)',
    }
  }
  if (siteSection === 'breast') {
    return {
      backgroundPosition: 'bottom center',
      backgroundImage: 'url(/img/header/section/breast.jpg)',
    }
  }
  if (siteSection === 'skin') {
    return {
      backgroundPosition: 'bottom right',
      backgroundImage:
        'url(https://www.gingerxumd.com/wp-content/uploads/2023/05/Xu-Banner-Body-Updated.jpg)',
    }
  }
  return {
    backgroundImage: 'none',
  }
}

const isService = computed(() => {
  return route.fullPath.includes('/services')
})
const siteSection = computed(() => {
  const isService = route.fullPath.includes('/services')
  const sections = route.fullPath.split('/')
  return isService ? sections[2] : sections[1]
})
const procedureTitle = computed(() => {
  const sections = route.fullPath.split('/')
  const section = services?.sections?.find((i) => i.slug === sections[2])
  const procedure = section?.procedures?.find((i) => i.slug === sections[3])
  return procedure?.title
})

console.log('services', services)
</script>

<template>
  <div class="header-section-header" v-if="isService" :style="getBg()">
    <div class="content" v-if="isService">
      <h1 class="section-title">{{ procedureTitle ?? siteSection }}</h1>
      <!--      <h2>{{ siteProcedure }}</h2>-->
      <!--      <p>{{ procedureTitle }}</p>-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-section-header {
  height: 300px;
  background-image: url('https://www.gingerxumd.com/wp-content/uploads/2023/05/Xu-Banner-Body-Updated.jpg');
  // background-position: bottom right;
  background-color: #eee;
  box-shadow:
    0 2px 4px -1px rgba(0, 0, 0, 0.1),
    0 4px 5px 0 rgba(0, 0, 0, 0.1),
    0 1px 10px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  width: auto;

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0px auto;
    padding: 10px;
    max-width: $page-max-width;
  }

  .section-title {
    color: $primary;
    text-transform: capitalize;
  }
}
</style>
