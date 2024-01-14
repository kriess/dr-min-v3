// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#D3756B',
    secondary: '#F0997D',
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

  css: ['~/assets/styles/site-wide.css', 'vuetify/styles'],

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
    '@vite-pwa/nuxt',
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

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Dr. Caroline Min',
      short_name: 'Dr. Min',
      theme_color: myCustomLightTheme.colors.primary,
      // icons: [
      //   {
      //     src: 'pwa-192x192.png',
      //     sizes: '192x192',
      //     type: 'image/png',
      //   },
      //   {
      //     src: 'pwa-512x512.png',
      //     sizes: '512x512',
      //     type: 'image/png',
      //   },
      //   {
      //     src: 'pwa-512x512.png',
      //     sizes: '512x512',
      //     type: 'image/png',
      //     purpose: 'any maskable',
      //   },
      // ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: false,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },

  runtimeConfig: {
    public: {
      GOOGLE_MAPS_API_KEY: 'AIzaSyDQZDKJBwh9Z3JDV5dVTzUgFx3Ok-Oeysk',
      siteDomain: 'https://drcarolinemin.com',
    },
  },

  site: {
    url: 'https://drcarolinemin.com',
    name: 'Dr. Caroline Min, MD',
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
      theme: false,
      // theme: {
      //   defaultTheme: 'myCustomLightTheme',
      //   themes: {
      //     myCustomLightTheme,
      //   },
      // },
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: false,

      /* vite-plugin-vuetify options */
      styles: 'sass',
      autoImport: true,
      useVuetifyLabs: false,
    },
  },
})
