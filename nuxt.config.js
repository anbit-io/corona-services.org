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
    titleTemplate: "%s | Corona Service",
    htmlAttrs: {
      lang: "de-DE"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Einfach Essen, Getränke oder andere Dienstleistungen unter Beachtung der Quarantänemaßnahmen bestellen."
      },
      {
        hid: "keywords",
        name: "keywords",
        content: ""
      },
      {
        name: "copyright",
        content: "Impax Web"
      },
      {
        hid: "url",
        name: "url",
        content: "https://corona-services.org"
      },
      {
        hid: "og:locale",
        property: "og:locale",
        content: "de-DE"
      },
      {
        hid: "og:locale:alternate",
        property: "og:locale:alternate",
        content: "en-US"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Corona Service App & Website"
      },
      {
        hid: "og:title",
        property: "og:title",
        content:
          "Corona Service | Lebensmittel & Services bei lokalen Unternehmen bestellen"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Einfach Essen, Getränke oder andere Dienstleistungen unter Beachtung der Quarantänemaßnahmen bestellen."
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://corona-services.org/images/hero.png"
      },
      {
        hid: "og:image:url",
        property: "og:image:url",
        content: "https://corona-services.org/images/hero.png"
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "https://corona-services.org/images/hero.png"
      },
      {
        hid: "og:image:type",
        property: "og:image:type",
        content: "image/png"
      },
      {
        hid: "og:image:width",
        property: "og:image:width",
        content: "597"
      },
      {
        hid: "og:image:height",
        property: "og:image:height",
        content: "563"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://corona-services.org/"
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content:
          "Corona Service | Lebensmittel & Services bei lokalen Unternehmen bestellen"
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "Einfach Essen, Getränke oder andere Dienstleistungen unter Beachtung der Quarantänemaßnahmen bestellen."
      },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content: "https://corona-services.org/images/hero.png"
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        id: "CookieBot",
        src: "https://consent.cookiebot.com/uc.js",
        "data-cbid": "28705f59-5bbb-413b-8a43-68e591c38a2b",
        "data-blockingmode": "auto",
        type: "text/javascript"
      },
      {
        id: "CookieDeclaration",
        src:
          "https://consent.cookiebot.com/28705f59-5bbb-413b-8a43-68e591c38a2b/cd.js",
        type: "text/javascript",
        defer: true
      }
    ],
    bodyAttrs: { class: "body" }
  },

  buildModules: ["@nuxtjs/tailwindcss"],

  modules: [
    "@nuxtjs/markdownit",
    ["nuxt-i18n", nuxtI18nConfig],
    "@nuxtjs/sitemap",
    "~/modules/svg-sprite/module.js",
    "@bazzite/nuxt-optimized-images"
  ],

  plugins: [
    {
      src: "~/plugins/lazysizes.js",
      ssr: false
    },
    {
      src: "~/plugins/mobileMenu.js",
      ssr: false
    },
    {
      src: "~/plugins/vue-modal.js"
    }
  ],

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
    hostname: "https://corona-services.org",
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

  optimizedImages: {
    handleImages: ["jpeg", "png", "webp"],
    optimizeImages: true,
    defaultImageLoader: " img-loader",
    mozjpeg: {
      quality: 45
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.45, 0.65]
    },
    webp: {
      quality: 45
    },
    responsive: {
      name: "img/[hash:7]-[width].[ext]",
      min: 240,
      max: 360,
      steps: 2,
      quality: 45,
      placeholder: true
    }
  }
}
