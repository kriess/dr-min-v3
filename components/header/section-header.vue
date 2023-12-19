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
const procedures = computed(() => {
  const sections = route.fullPath.split('/')
  const section = services?.sections?.find((i) => i.slug === sections[2])
  const procedures = section?.procedures

  procedures.forEach((i) => {
    i.href = `/services/${siteSection.value}/${i.slug}`
  })
  return procedures
})

// console.log('services', services)
</script>

<template>
  <div class="header-section-header" v-if="isService" :style="getBg()">
    <div class="content" v-if="isService">
      <h1 class="section-title">{{ procedureTitle ?? siteSection }}</h1>
      <ul class="procedures" v-if="procedureTitle">
        <li v-for="i in procedures">
          <v-btn class="section-nav-btn" variant="plain" :to="i.href">
            {{ i.title }}
          </v-btn>
        </li>
      </ul>
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
  margin-bottom: 0px;
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
    text-shadow: 1px 1px 2px #aaa;
    font-size: 250%;
    letter-spacing: 1.2px;
    color: $primary;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .procedures {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
    }
  }

  .section-nav-btn {
    border-radius: $border-radius-v3;
    font-weight: 700;
    opacity: 1;
    color: $primary;
    margin: 0 10px;
    background-color: rgba(0, 0, 0, 0.05);
    text-transform: capitalize;
    &.v-btn--active {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.15);
    }
  }
  .section-nav-btn:hover {
    transition: all 1s ease;
    background-color: rgba(0, 0, 0, 0.15);
  }
}
</style>
