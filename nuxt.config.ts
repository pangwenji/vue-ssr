// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
	'@nuxtjs/eslint-module'
  ],
  build:{
    transpile:[
      'naive-ui',
      'vueuc',
      '@css-render/vue3-ssr',
      '@juggle/resize-observer'
    ]
  },
  vite:{
    optimizeDeps:{
      'include':[

      ]
    }
  }
})
