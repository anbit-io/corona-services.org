import nuxtI18nConfig from "./config/nuxt-i18n"
import svgSpriteConfig from "./config/svgSprite"

export default {
  mode: "universal",

  dev: process.env.NODE_ENV !== "production",

  server: {
    host: "0.0.0.0",
    timing: false
  },

  head: {
    titleTemplate: "%s - Corona Service",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Corona Service"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lato:400,700|Oswald|Poppins:400,500,700&display=swap"
      }
    ]
  },

  buildModules: ["@nuxtjs/tailwindcss"],

  modules: [
    "@nuxtjs/markdownit",
    ["nuxt-i18n", nuxtI18nConfig],
    "@nuxtjs/sitemap",
    "~/modules/svg-sprite/module.js",
    "nuxt-responsive-loader"
  ],

  plugins: ["~/plugins/lazysizes.js"],

  render: {
    injectScripts: true,
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type)
      }
    }
  },

  generate: {
    fallback: true
  },

  build: {
    devtools: process.env.NODE_ENV !== "production",
    extractCSS: process.env.NODE_ENV === "production",
    postcss: { plugins: [require("tailwindcss"), require("autoprefixer")] },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(scss|css|vue)$/,
            chunks: "all",
            enforce: true
          }
        }
      }
    },

    /*
     ** You can extend webpack config here
     */
    // eslint-disable-next-line no-unused-vars
    extend(_config, _ctx) {}
  },

  sitemap: {
    hostname: "https://corona-service.org",
    gzip: true
  },

  tailwindcss: {
    configPath: "~/tailwind.config.js",
    cssPath: "~/assets/sass/main.scss",
    purgeCSSInDev: false,
    exposeConfig: false
  },

  markdownit: {
    injected: true,
    preset: "default",
    linkify: true,
    html: true,
    breaks: true,
    use: ["markdown-it-attrs", "markdown-it-link-attributes"]
  },

  svgSprite: svgSpriteConfig,

  responsiveLoader: {
    name: "img/[hash:7]-[width].[ext]",
    min: 420,
    max: 768,
    steps: 4,
    placeholder: true
  }
}
