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
      title: this.$t("privacy_page.title")
    }
  }
}
</script>
