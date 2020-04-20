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
        <select class="site__langswitcher" @change="switchLanguage">
          <option
            v-for="locale in availableLocales"
            :key="locale.code"
            :value="locale.code"
            :selected="$i18n.locale === locale.code"
          >
            {{ locale.label }}
          </option>
        </select>

        <div class="header__menu header-menu header-menu--ls">
          <div class="header-menu__container">
            <div
              v-for="(item, key) in menuItems"
              :key="key"
              class="header-menu__item"
            >
              <a
                :href="
                  $router.resolve({ path: localePath('/'), hash: item.path })
                    .href
                "
                class="header-menu__link"
              >
                {{ item.label }}
              </a>
            </div>
          </div>
        </div>
        <a
          class="header__cta transition"
          :href="
            $router.resolve({ path: localePath('/'), hash: 'contact' }).href
          "
        >
          {{ $t("header_cta") }}
        </a>

        <div
          ref="mobileMenu"
          v-mobile-menu
          class="header__menu header-menu header-menu--ss"
        >
          <div ref="mobileMenuBg" class="header-menu__bg" />
          <div class="header-menu__container">
            <div
              v-for="(item, key) in menuItems"
              :key="key"
              class="header-menu__item"
            >
              <a
                :href="
                  $router.resolve({ path: localePath('/'), hash: item.path })
                    .href
                "
                class="header-menu__link"
                @click="
                  delayRouting(
                    { path: localePath('/'), hash: item.path },
                    $event
                  )
                "
              >
                {{ item.label }}
              </a>
            </div>
          </div>
        </div>

        <div
          ref="mobileMenuToggle"
          v-mobile-menu-toggle
          class="header__menu-toggle"
        >
          <span />
        </div>
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
        { label: this.$t("header_menu.our_services"), path: "#our-services" },
        { label: this.$t("header_menu.why_us"), path: "#why-us" },
        { label: this.$t("header_menu.how_it_works"), path: "#how-it-works" },
        { label: this.$t("header_menu.pricing"), path: "#pricing" },
        { label: this.$t("header_menu.our_clients"), path: "#our-clients" }
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
