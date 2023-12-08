// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.min.css'],

  build: {
    transpile: ['vuetify'],
  },

  imports: {
    dirs: ['stores', 'utils'],
  },

  modules: [
    // '@kevinmarrec/nuxt-pwa',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (options: any, nuxt: any) => {
      await nuxt.hooks.hook('vite:extendConfig', (config: any) =>
        config.plugins.push(
          vuetify({
            autoImport: true,
            styles: { configFile: './assets/styles/vuetify.scss' },
          }),
        ),
      )
    },
  ],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia',
      'acceptHMRUpdate',
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  // https://pwa.nuxtjs.org/icon
  // pwa: {
  //   meta: {
  //     name: 'Dr. Caroline Min, MD | Pasadena Plastic Surgeon',
  //     description:
  //       'Dr. Caroline Min, MD is a board certified plastic surgeon specializing in cosmetic surgery. She has completed additional fellowship training in aesthetic surgery and has the skills and expertise to help you achieve your goals for plastic surgery.',
  //     ogType: 'website',
  //     ogSiteName: 'Dr. Caroline Min, MD | Pasadena Plastic Surgeon',
  //     ogTitle:
  //       'Dr. Caroline Min, MD is a highly qualified plastic surgeon with over 16 years of experience.',
  //     ogDescription:
  //       'Dr. Caroline Min, MD is a board certified plastic surgeon specializing in cosmetic surgery. She has completed additional fellowship training in aesthetic surgery and has the skills and expertise to help you achieve your goals for plastic surgery.',
  //     ogImage: 'https://drcarolinemin.com/img/headshots/dr-min.jpg',
  //     ogUrl: 'https://drcarolinemin.com/',
  //     twitterCard: 'summary_large_image',
  //   },
  // },

  runtimeConfig: {
    public: {
      GOOGLE_MAPS_API_KEY: 'AIzaSyDQZDKJBwh9Z3JDV5dVTzUgFx3Ok-Oeysk',
      siteDomain: 'https://drcarolinemin.com',
    },
  },

  sourcemap: {
    server: false,
    client: false,
  },

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        types: ['vuetify'],
      },
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        // sass: {
        //   additionalData: '@import "@/assets/styles/main.sass";',
        // },
        scss: {
          // additionalData: '@import "./assets/styles/main.scss";',
          additionalData: '@use "@/assets/styles/main.scss" as *;',
        },
      },
    },
  },
})
