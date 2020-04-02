<template>
  <section
    class="section section--banner banner "
    :class="`banner--${name} ${name}`"
  >
    <div
      class="section__container banner__container"
      :class="`${name}__container`"
    >
      <div class="banner__bg" :class="`${name}__bg`">
        <figure class="banner__image" :class="`${name}__image`">
          <picture>
            <source
              :data-srcset="
                require(`~/assets/images/${image.name}?webp`).default
              "
              type="image/webp"
            >
            <source
              :data-srcset="require(`~/assets/images/${image.name}`).default"
              :type="`image/${image.ext}`"
            >
            <img
              v-if="lazyload"
              :data-src="require(`~/assets/images/${image.name}`).default"
              class="lazyload blur-up"
              :alt="image.alt"
            >
            <img
              v-if="(!lazyload)"
              :src="require(`~/assets/images/${image.name}`).default"
              :alt="image.alt"
            >
          </picture>
        </figure>
      </div>

      <div class="banner__content hero__content">
        <h2 class="banner__title hero__title">
          {{ $t(`${name}.title`) }}
        </h2>
        <p class="banner__para hero__para">
          {{ $t(`${name}.para`) }}
        </p>
        <CTA class="banner__cta hero__cta" :href="ctaHref">
          {{ ctaLabel }}
        </CTA>
      </div>
    </div>
  </section>
</template>

<script>
import CTA from "../common/CTA"
export default {
  components: { CTA },
  props: {
    image: {
      type: Object,
      default: null
    },
    name: {
      type: String,
      default: ""
    },
    ctaHref: {
      type: String,
      default: ""
    },
    ctaLabel: {
      type: String,
      default: ""
    },
    lazyload: {
      type: Boolean,
      default: false
    }
  }
}
</script>
