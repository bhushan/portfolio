export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'bhushang.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/app.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Doc: https://go.nuxtjs.dev/eslint
    [
      '@nuxtjs/eslint-module',
      {
        fix: true,
      },
    ],

    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',

    // Doc: https://github.com/juliomrqz/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',

    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Doc: https://github.com/juliomrqz/nuxt-optimized-images
  optimizedImages: {
    inlineImageLimit: 1000,
    imagesName: ({ isDev }) => isDev ? '[path][name][hash:optimized].[ext]' : 'img/[contenthash:7].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',

    // https://go.nuxtjs.dev/content
    // '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
