const metaTagsMixin = {
  head() {
    let meta = [
      {
        hid: "description",
        name: "description",
        content: this.$t("head.description")
      },
      {
        hid: "keywords",
        name: "keywords",
        content: this.$t("head.keywords")
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: this.$t("head.og_site_name")
      },
      {
        hid: "og:title",
        property: "og:title",
        content: this.$t("head.og_title")
      },
      {
        hid: "og:description",
        property: "og:description",
        content: this.$t("head.description")
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content: this.$t("head.og_title")
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content: this.$t("head.description")
      }
    ]

    let meta_url =
      this.$i18n.locale == this.$i18n.defaultLocale
        ? "https://corona-services.org/"
        : "https://corona-services.org/" + this.$i18n.locale

    meta.push({
      hid: "url",
      name: "url",
      content: meta_url
    })
    meta.push({
      hid: "og:url",
      property: "og:url",
      content: meta_url
    })

    this.$i18n.locales.forEach(locale => {
      if (this.$i18n.locale == locale.code) {
        meta.push({
          hid: "og:locale",
          property: "og:locale",
          content: locale.iso
        })
      } else {
        meta.push({
          hid: "og:locale:alternate",
          property: "og:locale:alternate",
          content: locale.iso
        })
      }
    })

    return {
      titleTemplate: "Corona-Service | %s",
      title: this.$t("head.title"),
      meta
    }
  }
}

export default metaTagsMixin
