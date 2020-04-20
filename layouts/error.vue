<template>
  <section class="section section--error-page">
    <div class="section__container">
      <div class="error">
        <h2 v-if="error.statusCode === 404" class="error__title">
          {{ $t("errors.page_not_found") }}
        </h2>

        <h2 v-else class="error__title">
          {{ $t("errors.an_error_occured") }}
        </h2>

        <p class="error__subtitle">
          {{ $t("errors.subtitle") }}
        </p>

        <nuxt-link class="cta error__cta" :to="localePath('/')">
          {{ $t("errors.home") }}
        </nuxt-link>

        <p class="error__subtitle">
          {{ $t("errors.subtitle_contact") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
