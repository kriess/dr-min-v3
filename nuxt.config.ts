// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#00796B',
    secondary: '#26A69A',
    error: '#ffcc00',
    info: '#3b82f6',
    success: '#22c55e',
    warning: '#f59e0b',
  },
}

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
      siteDomain: 'http://v3.drcarolinemin.com',
    },
  },

  site: {
    url: 'http://v3.drcarolinemin.com',
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

  // https://github.com/invictus-codes/nuxt-vuetify
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
          myCustomLightTheme
        },
      },
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
