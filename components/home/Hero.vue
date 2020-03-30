<template>
  <section class="section section--hero hero">
    <div class="section__container hero__container">
      <div class="hero__main">
        <figure class="hero__image">
          <picture>
            <source
              :data-srcset="require('~/assets/images/corona.png?webp').default"
              type="image/webp"
            >
            <source
              :data-srcset="require('~/assets/images/corona.png').default"
              type="image/png"
            >
            <img
              :data-src="require('~/assets/images/corona.png').default"
              class="lazyload blur-up"
              alt="Corona Virus"
            >
          </picture>
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
          <figure class="hero__client-logo">
            <source
              :data-srcset="
                require('~/assets/images/logo/la-becasse.png?webp').default
              "
              type="image/webp"
            >
            <source
              :data-srcset="
                require('~/assets/images/logo/la-becasse.png').default
              "
              type="image/png"
            >
            <img
              :data-src="require('~/assets/images/logo/la-becasse.png').default"
              class="lazyload blur-up"
              alt="LaBecasse Logo"
            >
          </figure>
        </div>

        <div class="hero__client">
          <figure class="hero__client-logo">
            <source
              :data-srcset="
                require('~/assets/images/logo/stobe.png?webp').default
              "
              type="image/webp"
            >
            <source
              :data-srcset="require('~/assets/images/logo/stobe.png').default"
              type="image/png"
            >
            <img
              :data-src="require('~/assets/images/logo/stobe.png').default"
              class="lazyload blur-up"
              alt="Stobe Logo"
            >
          </figure>
        </div>

        <!-- <a class="hero__sidebar-cta transition" href="#">
          Alle anzeigen
        </a> -->
      </div>
    </div>
  </section>
</template>
