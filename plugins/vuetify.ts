import { createVuetify } from 'vuetify'
import {
  MAIN_LIGHT_THEME,
  mainLightTheme,
  mainDarkTheme,
} from '@/helpers/themes'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: MAIN_LIGHT_THEME, // MAIN_LIGHT_THEME or MAIN_DARK_THEME,
      themes: {
        mainLightTheme,
        mainDarkTheme,
      },
      // add color variations
      variations: {
        colors: ['primary', 'secondary'],
        lighten: 3,
        darken: 3,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
