export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "timerapper",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://github.com/nuxt-community/apollo-module
    "@nuxtjs/apollo",
    "@nuxtjs/auth",
    "@nuxtjs/axios",
    "@nuxtjs/vuetify"
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Apollo/GraphQL Configuration (https://github.com/nuxt-community/apollo-module#setup)
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://zeitraffer.app/api/v3/graphql"
      }
    }
  },
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: "#2A4758",
          secondary: "#3EA172",
          accent: "#FAC535",
          error: "#E45052"
        }
      }
    }
  },
  axios: {
    baseURL: 'https://zeitraffer.app/api/v3'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/auth/logout', method: 'delete' },
          user: { url: '/sessions/user', method: 'get', propertyName: 'user' }
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: true
      }
    }
  }
};
