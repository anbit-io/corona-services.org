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
        <ul class="header__menu header-menu">
          <li
            v-for="(item, key) in menuItems"
            :key="key"
            class="header-menu__item"
          >
            <nuxt-link :to="localePath(item.path)" class="header-menu__link">
              {{ item.label }}
            </nuxt-link>
          </li>
        </ul>
        <a
          class="header__cta transition"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:info@corona-service.org"
        >
          {{ $t("header_cta") }}
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
    },
    menuItems() {
      return [
        { label: this.$t("header_menu.our_services"), path: "/our-services" },
        { label: this.$t("header_menu.our_clients"), path: "/about-us" }
      ]
    }
  },
  methods: {
    switchLanguage($e) {
      this.$i18n.setLocale($e.target.value)
    }
  }
}
</script>
