// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt theory',
      meta: [
        {name: 'description', content: 'Everything about nuxt 3'}
      ],
       link: [
           {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
       ]
    }
  }
})
