<template>
  <header class="header">
    <nav class="header__nav">
      <nuxt-link :to="localePath('/')" class="site__info transition">
        <h1 class="site__title">
          {{ $t("site.title") }}
        </h1>
        <p class="site__slogan">
          {{ $t("site.slogan") }}
        </p>
      </nuxt-link>
      <div class="header__actions">
        <a
          class="header__cta transition"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:info@corona-service.org"
        >
          <svg-icon name="email" />
          info@corona-service.org
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales
    }
  },
  methods: {
    switchLanguage($e) {
      this.$i18n.setLocale($e.target.value)
    }
  }
}
</script>
