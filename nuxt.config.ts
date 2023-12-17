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

  devServer: {
    host: 'dev.drcarolinemin.com',
  },

  imports: {
    dirs: ['stores', 'utils'],
  },

  modules: [
    'nuxt-schema-org',
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
    '@vueuse/nuxt',
    '@invictus.codes/nuxt-vuetify',
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

  runtimeConfig: {
    public: {
      GOOGLE_MAPS_API_KEY: 'AIzaSyDQZDKJBwh9Z3JDV5dVTzUgFx3Ok-Oeysk',
      siteDomain: 'https://drcarolinemin.com',
    },
  },

  site: {
    url: 'https://drcarolinemin.com',
    name: 'Dr. Caroline Min, M.D.',
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

  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,

      /* vite-plugin-vuetify options */
      styles: 'sass',
      autoImport: true,
      useVuetifyLabs: false,
    }
  }
})
