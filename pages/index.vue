<template>
  <div>
    <section class="section section--hero hero">
      <div class="hero__container">
        <div class="hero__main">
          <figure class="hero__image">
            <img
              :src="require('~/assets/images/corona.png').placeholder"
              :srcset="require('~/assets/images/corona.png').srcSet"
              class="lazyload blur-up"
            >
          </figure>
          <div class="hero__content">
            <h2 class="hero__title">
              In schwierigen Zeiten zusammenhalten!
            </h2>
            <p class="hero__subtitle">
              Wir helfen Ihnen Ihre Produkte weiterhin Ihren Kunden anbieten zu
              können. Sie möchten Ihr Unternehmen hinzufügen?
            </p>

            <a href="tel:0241560073600" class="hero__cta">
              0241 - 5600 73 600
            </a>
          </div>
        </div>

        <div class="hero__sidebar">
          <h4 class="hero__sidebar-title">
            Wer ist schon dabei?
          </h4>

          <div class="hero__client">
            <img
              :src="require('~/assets/images/logo/la-becasse.png').placeholder"
              :srcset="require('~/assets/images/logo/la-becasse.png').srcSet"
              class="lazyload blur-up hero__client-logo"
            >
          </div>

          <div class="hero__client">
            <img
              :src="require('~/assets/images/logo/stobe.png').placeholder"
              :srcset="require('~/assets/images/logo/stobe.png').srcSet"
              class="lazyload blur-up hero__client-logo"
            >
          </div>

          <a class="hero__sidebar-cta transition" href="#">
            Alle anzeigen
          </a>
        </div>
      </div>
    </section>

    <section class="section section--services services" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  head: {
    titleTemplate: "Corona Service - %s",
    title: "Corona Service"
  }
};
</script>
