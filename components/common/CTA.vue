<template>
  <a
    class="cta transition"
    :class="{ 'cta--inverted': inverted }"
    target="_blank"
    rel="noopener noreferrer"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    inverted: {
      type: Boolean,
      default: false
    }
  }
}
</script>
