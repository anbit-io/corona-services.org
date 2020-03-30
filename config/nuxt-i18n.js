export default {
  locales: [
    // { code: "en", iso: "en-US", label: "EN", file: "en-US.js" },
    // { code: "fr", iso: "fr-FR", label: "FR", file: "fr-FR.js" },
    { code: "de", iso: "de-DE", label: "DE", file: "de-DE.js" }
  ],
  lazy: true,
  langDir: "translations/",
  defaultLocale: "de",
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_redirected",
    alwaysRedirect: true,
    fallbackLocale: "de"
  }
}
