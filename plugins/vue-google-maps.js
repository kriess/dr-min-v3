export default defineNuxtPlugin((nuxtApp) => {
  useHead({
    style: [
      {
        src: '/styles/google.css',
      },
    ],
    script: [
      {
        src: '/scripts/map-init.js',
        async: false,
      },
      {
        src: 'https://www.google.com/recaptcha/api.js',
        async: false,
      },
      { src: 'https://use.fontawesome.com/releases/v6.2.0/js/all.js' },
    ],
  })
})
