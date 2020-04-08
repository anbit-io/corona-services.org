<template>
  <section class="section--page">
    <div class="page__container">
      <h2 class="page__title">
        {{ $t("imprint_page.title") }}
      </h2>
      <div class="page__content" v-html="pageContent" />
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    pageContent() {
      return this.$md.render(this.$t("imprint_page.content"))
    }
  },
  head() {
    let meta_url =
      this.$i18n.locale == this.$i18n.defaultLocale
        ? "https://corona-services.org/"
        : "https://corona-services.org/" + this.$i18n.locale

    return {
      titleTemplate: "Corona-Service | %s",
      title: this.$t("head.title"),
      meta: [
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
          hid: "url",
          name: "url",
          content: meta_url
        },
        {
          hid: "og:url",
          name: "og:url",
          content: meta_url
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: this.$t("head.og_site_name")
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("head.og_title")
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("head.description")
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t("head.og_title")
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("head.description")
        }
      ]
    }
  }
}
</script>
