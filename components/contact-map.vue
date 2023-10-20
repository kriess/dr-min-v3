<script lang="ts" setup>
const mapRef = ref<HTMLElement | null>(null)
let config = useRuntimeConfig()
let map
let marker

// lifecycle hooks
onMounted(async () => {
  setTimeout(() => {
    async function initMap() {
      const domEl = mapRef.value // document.getElementById('map')
      console.log('initMap: dom el', domEl)

      const position = { lat: 34.14752, lng: -118.139075 }
      // Request needed libraries.
      //@ts-ignore
      const { Map } = await google.maps.importLibrary('maps')
      const { AdvancedMarkerElement } =
        await google.maps.importLibrary('marker')

      map = new Map(domEl, {
        zoom: 16,
        center: position,
        mapId: 'drcarolinemin',
      })
      marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: 'essentia ESTHETICS',
      })
    }
    initMap()
  }, 1000)
})
onUnmounted(() => {
  map = null
  marker = null
})
</script>

<template>
  <div class="contact-map">
    <div class="map-container">
      <div id="map" ref="mapRef" class="map"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-map {
  position: relative;
  min-height: 400px;
  .map-container {
    background-color: $primary;
    padding: 3vw 3vw 0 3vw;
  }
  .map {
    aspect-ratio: 16/9;
    border-radius: $main-border-radius;
    overflow: hidden;
  }
}
</style>
