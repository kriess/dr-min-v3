let map

function initMap() {
  const domEl = document.getElementById('map')
  console.log('domEl', domEl)
  // if (domEl) {
  //   map = new google.maps.Map(domEl, {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   })
  // }
}

window.initMap = initMap
