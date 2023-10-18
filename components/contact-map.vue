<script lang="ts" setup>
// lifecycle hooks
onMounted(() => {
  let map
  async function initMap() {
    const latLong = { lat: 34.4099, lng: -118.55489 }
    const { Map } = await google.maps.importLibrary('maps')
    map = new Map(document.getElementById('map'), {
      center: latLong,
      zoom: 18,
    })
    new google.maps.Marker({
      position: latLong,
      map,
      title: 'Hello World!',
    })
  }
  initMap()
})
</script>

<template>
  <div class="contact-map">
    <div class="mb-20">
      <div id="map" ref="map" class="map"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-map {
  position: relative;
  min-height: 500px;
  border: 1px solid #c00;
  .map {
    aspect-ratio: 1/1;
  }
}
</style>
