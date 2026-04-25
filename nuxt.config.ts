import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/input.css'],
  

  vite: {
    plugins: [
      tailwindcss() as any,
    ],
  },

  app: {
    head: {
      title: 'Dashboard Direktur — PT Media Antar Nusa',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.js', defer: true }
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_BASE_URL,
    }
  },

  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID
  },

  modules: ['nuxt-toast', 'nuxt-vue3-google-signin']
})