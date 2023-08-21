import { ThemeDefinition } from 'vuetify'

// String that represents the name of the theme I am using
export const MAIN_LIGHT_THEME = 'mainLightTheme'

// Light mode theme
export const mainLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#00796B',
    secondary: '#26A69A',
    error: '#ef4444',
    info: '#3b82f6',
    success: '#22c55e',
    warning: '#f59e0b',
  },
}

// String that represents the name of the dark theme I am using
export const MAIN_DARK_THEME = 'mainDarkTheme'
// Dark mode theme
export const mainDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#00796B',
    surface: '#00796B',
    primary: '#00796B',
    secondary: '#9333ea',
    error: '#ef4444',
    info: '#3b82f6',
    success: '#22c55e',
    warning: '#f59e0b',
  },
}

// all theme names
export const THEME_NAMES = [
  {
    text: `Light Theme`,
    value: MAIN_LIGHT_THEME,
  },
  {
    text: `Dark Theme`,
    value: MAIN_DARK_THEME,
  },
]
