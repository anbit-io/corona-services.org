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
import metaTagsMixin from "../mixins/metaTags"
export default {
  mixins: [metaTagsMixin],
  computed: {
    pageContent() {
      return this.$md.render(this.$t("imprint_page.content"))
    }
  }
}
</script>
