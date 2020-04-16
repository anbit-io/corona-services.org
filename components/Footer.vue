<template>
  <footer class="footer">
    <ContactForm />
    <div class="footer__container">
      <div class="footer__contact">
        <a
          class="footer__contact-link"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:info@corona-service.org"
        >
          <svg-icon name="email" />
          info@corona-service.org
        </a>
      </div>
      <nav class="footer__links">
        <nuxt-link :to="localePath('/privacy')" class="footer__link">
          {{ $t("footer.link_privacy") }}
        </nuxt-link>
        <nuxt-link :to="localePath('/imprint')" class="footer__link">
          {{ $t("footer.link_impressum") }}
        </nuxt-link>
      </nav>
    </div>
  </footer>
</template>

<script>
import ContactForm from "./footer/ContactForm"
export default {
  components: { ContactForm }
}
</script>
