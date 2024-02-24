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
    pageTransition: {name: 'page', mode: 'out-in'},
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

  gtag: {
    id: 'G-H2RG9FR9ZE'
  },

  modules: [
    'nuxt-gtag',
    '@vite-pwa/nuxt',
    'nuxt-schema-org',
    'nuxt-simple-sitemap',
    '@vueuse/nuxt',
    '@invictus.codes/nuxt-vuetify',
    async (options: any, nuxt: any) => {
      await nuxt.hooks.hook('vite:extendConfig', (config: any) =>
        config.plugins.push(
          vuetify({
            autoImport: true,
            styles: {configFile: './assets/styles/vuetify.scss'},
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
      background_color: myCustomLightTheme.colors.primary, // '#fff',
      description: 'Pasadena Plastic Surgeon, Dr. Caroline Min',
      icons: [
        {
          src: 'img/icons/icon48.png',
          sizes: '48x48',
          type: 'image/png',
        },
        {
          src: 'img/icons/icon72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: 'img/icons/icon96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: 'img/icons/icon144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'img/icons/icon-maskable512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico,webp}'],
    },
    client: {
      installPrompt: false,
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
    name: 'Dr. Caroline Min',
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
        scss: {
          additionalData: '@use "@/assets/styles/main.scss" as *;',
        },
      },
    },
  },

  // https://github.com/invictus-codes/nuxt-vuetify
  vuetify: {
    vuetifyOptions: {
      theme: false,
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
