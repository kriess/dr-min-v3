<script lang="ts" setup>
import { useTheme } from 'vuetify'
import { THEME_NAMES as themes } from '~/helpers/themes'
const config = useRuntimeConfig()
const appConfig = useAppConfig()
const theme = useTheme()
const selectedTheme = ref(themes[0])
// console.log(themes)

const setTheme = () => {
  console.log(selectedTheme.value)
  theme.global.name.value = selectedTheme.value.toString()
}
</script>

<template>
  <div class="dev-info">
    <h1>Dev Info</h1>

    <h6>Runtime Config</h6>
    <pre>{{ config }}</pre>

    <h6>App Config</h6>
    <pre>{{ appConfig }}</pre>

    <!--
    <v-btn @click="toggleTheme">toggle theme</v-btn>
    <v-icon>mdi-weather-sunny</v-icon>
    <v-icon>mdi-weather-night</v-icon>
    -->

    <v-select
      v-model="selectedTheme"
      label="Select Theme"
      item-title="text"
      item-value="value"
      :items="themes"
      @update:model-value="setTheme"
    ></v-select>
  </div>
</template>

<style lang="scss" scoped>
.dev-info {
  width: auto;
}
</style>
