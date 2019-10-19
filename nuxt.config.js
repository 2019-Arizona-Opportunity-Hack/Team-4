import colors from "vuetify/es5/util/colors";
require("dotenv").config();

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "nuxt-fire",
      {
        // Required:
        config: {
          development: {
            apiKey: "AIzaSyDnpc19rZ3-4pt7la20amijhVmgKIbcYWY",
            authDomain: "f5-oh-64bd4.firebaseapp.com",
            databaseURL: "https://f5-oh-64bd4.firebaseio.com",
            projectId: "f5-oh-64bd4",
            storageBucket: "f5-oh-64bd4.appspot.com",
            messagingSenderId: "320893994703",
            appId: "1:320893994703:web:2ee7a5ffd9a717361459ba",
            measurementId: "G-M3SPVZ4X27"
          },
          production: {
            apiKey: "AIzaSyDnpc19rZ3-4pt7la20amijhVmgKIbcYWY",
            authDomain: "f5-oh-64bd4.firebaseapp.com",
            databaseURL: "https://f5-oh-64bd4.firebaseio.com",
            projectId: "f5-oh-64bd4",
            storageBucket: "f5-oh-64bd4.appspot.com",
            messagingSenderId: "320893994703",
            appId: "1:320893994703:web:2ee7a5ffd9a717361459ba",
            measurementId: "G-M3SPVZ4X27"
          }
        },
        // The following options are optional:
        useOnly: [
          "auth",
          "firestore",
          "functions",
          "storage",
          "realtimeDb",
          "messaging",
          "performance",
          "analytics"
        ],
        functionsLocation: "us-central1"
      }
    ]
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
