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
    return {
      title: this.$t("imprint_page.title")
    }
  }
}
</script>
