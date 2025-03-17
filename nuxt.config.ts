// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['~/assets/style.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/strapi'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  }
})