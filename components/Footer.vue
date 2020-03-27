<template>
  <footer class="footer">
    <nav class="footer__links">
      <nuxt-link :to="localePath('/privacy')" class="footer__link">
        {{ $t("footer.link_privacy") }}
      </nuxt-link>
      <nuxt-link :to="localePath('/imprint')" class="footer__link">
        {{ $t("footer.link_impressum") }}
      </nuxt-link>
    </nav>
  </footer>
</template>
