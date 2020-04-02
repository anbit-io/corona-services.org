<template>
  <section class="section section--our-clients our-clients">
    <div class="section__container our-clients__container">
      <div class="our-clients__header">
        <h3 class="section__title our-clients__title">
          {{ $t("our_clients.title") }}
        </h3>
      </div>
      <div class="our-clients__content">
        <div class="our-clients__item">
          <figure class="our-clients__logo">
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

        <div class="our-clients__item">
          <figure class="our-clients__logo">
            <source
              :data-srcset="
                require('~/assets/images/logo/stobe.jpg?webp').default
              "
              type="image/webp"
            >
            <source
              :data-srcset="require('~/assets/images/logo/stobe.jpg').default"
              type="image/jpg"
            >
            <img
              :data-src="require('~/assets/images/logo/stobe.jpg').default"
              class="lazyload blur-up"
              alt="Stobe Logo"
            >
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
