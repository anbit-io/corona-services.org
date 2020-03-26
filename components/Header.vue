<template>
  <header class="header">
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
