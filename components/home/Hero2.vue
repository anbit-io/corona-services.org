<template>
  <section class="section section--hero hero">
    <div class="section__container hero__container">
      <div class="hero__bg">
        <figure class="hero__image">
          <picture>
            <source
              :data-srcset="require('~/assets/images/hero.png?webp').default"
              type="image/webp"
            >
            <source
              :data-srcset="require('~/assets/images/hero.png').default"
              type="image/png"
            >
            <img
              :src="require('~/assets/images/hero.png').default"
              alt="Business during corona pandemic"
            >
          </picture>
        </figure>
      </div>

      <div class="hero__content">
        <h2 class="hero__title">
          {{ $t("hero.title") }}
        </h2>
        <p class="hero__para">
          {{ $t("hero.para") }}
        </p>
        <CTA class="hero__cta" href="tel:0241560073600">
          0241 - 5600 73 600
        </CTA>
      </div>
    </div>
  </section>
</template>

<script>
import CTA from "../common/CTA"
export default {
  components: { CTA }
}
</script>
