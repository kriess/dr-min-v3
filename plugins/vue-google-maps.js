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
        // src: 'https://www.google.com/recaptcha/enterprise.js?render=6LepurAoAAAAAAO-f4JhmuJ5P7JA3uZ2N347jn0Q',
        src: 'https://www.google.com/recaptcha/api.js?render=explicit&onload=onRecaptchaLoadCallback',
        async: true,
      },
    ],
  })
})
