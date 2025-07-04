import { defineNuxtPlugin } from '#app'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VSelect', vSelect)
})