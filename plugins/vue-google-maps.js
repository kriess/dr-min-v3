export default defineNuxtPlugin((nuxtApp) => {
  useHead({
    meta: [
      // the other og tags are in nuxt.config.js
      {
        name: 'keywords',
        content: 'plastic surgeon, board certified, pasadena',
      },
      { property: 'og:image:width', content: '150' },
      { property: 'og:image:height', content: '200' },
      { property: 'og:image:type', content: 'image/jpg' },
      { property: 'og:locale', content: 'en_US' },
    ],
    link: [{ rel: 'canonical', href: 'https://drcarolinemin.com/' }],
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
        src: 'https://www.google.com/recaptcha/enterprise.js?render=6LepurAoAAAAAAO-f4JhmuJ5P7JA3uZ2N347jn0Q',
        // src: 'https://www.google.com/recaptcha/api.js?render=explicit&onload=onRecaptchaLoadCallback',
        async: true,
      },
    ],
  })
})
