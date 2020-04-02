<template>
  <section class="section section--featured featured">
    <div class="section__container featured__container">
      <div class="featured__bg">
        <figure class="featured__image">
          <picture>
            <source
              :data-srcset="require('~/assets/images/featured.png?webp').default"
              type="image/webp"
            >
            <source
              :data-srcset="require('~/assets/images/featured.png').default"
              type="image/png"
            >
            <img
              :src="require('~/assets/images/featured.png').default"
              alt="Business during corona pandemic"
            >
          </picture>
        </figure>
      </div>

      <div class="featured__content">
        <h2 class="featured__title">
          {{ $t("featured.title") }}
        </h2>
        <p class="featured__para">
          {{ $t("featured.para") }}
        </p>
        <CTA class="featured__cta" href="tel:0241560073600">
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
