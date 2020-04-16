<template>
  <client-only>
    <picture>
      <source
        :data-srcset="require(`~/assets/images/${src}?webp`).default"
        type="image/webp"
      >
      <source
        :data-srcset="require(`~/assets/images/${src}`).default"
        :type="type"
      >
      <img
        v-if="lazyload"
        :data-src="require(`~/assets/images/${src}`).default"
        class="lazyload blur-up"
        :alt="alt"
      >
      <img v-else :src="require(`~/assets/images/${src}`).default" :alt="alt">
    </picture>
  </client-only>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    alt: {
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
