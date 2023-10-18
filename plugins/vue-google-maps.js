export default defineNuxtPlugin((nuxtApp) => {
  let config = useRuntimeConfig()
  useHead({
    script: [
      {
        src: '/scripts/map-init.js',
        async: false,
      },
      {
        src: `https://maps.googleapis.com/maps/api/js?key=${config.public.GOOGLE_MAPS_API_KEY}&libraries=places,drawing,geometry&callback=initMap`,
        async: false,
      },
    ],
  })
})
