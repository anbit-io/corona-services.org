export default {
  locales: [
    { code: "de", iso: "de-DE", label: "DE", file: "de-DE.js" },
    { code: "en", iso: "en-US", label: "EN", file: "en-US.js" }
    // { code: "fr", iso: "fr-FR", label: "FR", file: "fr-FR.js" },
  ],
  lazy: true,
  langDir: "translations/",
  defaultLocale: "en",
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_redirected",
    alwaysRedirect: true,
    fallbackLocale: "en"
  }
}
