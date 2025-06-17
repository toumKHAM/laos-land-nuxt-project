import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: true,
  // devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: [
    "~/assets/css/app.css",
    '@fortawesome/fontawesome-free/css/all.min.css',
    '@/assets/css/vue-good-table-custom.css'
  ],
  modules: ['@nuxt/icon','@pinia/nuxt'],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL
    }
  }
})
