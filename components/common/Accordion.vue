<template>
  <div
    class="accordion"
    :class="{
      'accordion--expanded': !collapsed
    }"
  >
    <div class="accordion__header" @click="toggleAccordion">
      <div class="accordion__title">
        {{ title }}
      </div>
      <div class="accordion__icon" />
    </div>
    <transition name="expand">
      <div v-show="!collapsed" class="accordion__body">
        <div class="accordion__content">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    expanded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      collapsed: !this.$props.expanded
    }
  },
  methods: {
    toggleAccordion() {
      this.collapsed = !this.collapsed
      this.$emit("onChange", this.collapsed)
    }
  }
}
</script>

<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
