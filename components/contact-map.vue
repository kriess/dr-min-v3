<script setup>
import { loadScript } from 'vue-plugin-load-script'

const mapRef = ref(null)
let config = useRuntimeConfig()
const target = ref(null)
let map
let marker

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      loadGoogleMap()
    }
  },
)

// methods
const loadGoogleMap = (view) => {
  const mapLink = '/scripts/map-init.js'
  loadScript(mapLink)
    .then(() => {
      initMap()
    })
    .catch(() => {
      console.log('failed to get google maps init file')
    })

  async function initMap() {
    const domEl = mapRef.value // document.getElementById('map')
    console.log('initMap: dom el', domEl)

    const position = { lat: 34.14752, lng: -118.139075 }
    const { Map } = await google.maps.importLibrary('maps')
    const { AdvancedMarkerElement } = await google.maps.importLibrary('marker')

    map = new Map(domEl, {
      zoom: 14,
      center: position,
      mapId: 'drcarolinemin',
    })
    marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: 'essentia ESTHETICS',
    })
  }
}

// lifecycle hooks
onUnmounted(() => {
  map = null
  marker = null
})
</script>

<template>
  <div class="contact-map">
    <div class="map-container" ref="target">
      <div id="map" ref="mapRef" class="map"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-map {
  position: relative;

  .map-container {
    padding: 0;
  }

  .map {
    aspect-ratio: 16/14;
    overflow: hidden;
  }
}
</style>
