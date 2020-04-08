<template>
  <section class="section section--page section--privacy">
    <div class="page__container">
      <h2 class="page__title">
        {{ $t("privacy_page.title") }}
      </h2>
      <div class="page__content" v-html="pageContent"/>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    pageContent() {
      return this.$md.render(this.$t("privacy_page.content"))
    }
  },
  head() {
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
