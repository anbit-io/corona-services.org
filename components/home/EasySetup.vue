<template>
  <section id="how-it-works" class="section section--easy-setup easy-setup">
    <div class="section__container easy-setup__container">
      <h3 class="easy-setup__title">
        {{ $t("easy_setup.title") }}
      </h3>
      <div class="easy-setup__steps">
        <div v-for="(step, key) in steps" :key="key" class="easy-setup__step">
          <div class="easy-setup__step-icon">
            <svg-icon :name="step.icon" />
          </div>
          <div class="easy-setup__step-title">
            {{ step.title }}
          </div>
          <div class="easy-setup__step-description">
            {{ step.description }}
          </div>
        </div>
      </div>
      <div class="easy-setup__cta-wrapper">
        <button class="cta cta--inverted transition " @click="showContactModal">
          {{ $t("easy_setup.cta_label") }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    steps() {
      return [
        {
          icon: "01",
          title: this.$t("easy_setup.step_1.title"),
          description: this.$t("easy_setup.step_1.description")
        },
        {
          icon: "02",
          title: this.$t("easy_setup.step_2.title"),
          description: this.$t("easy_setup.step_2.description")
        },
        {
          icon: "shop",
          title: this.$t("easy_setup.step_3.title"),
          description: this.$t("easy_setup.step_3.description")
        }
      ]
    }
  },
  methods: {
    showContactModal() {
      this.$showContactModal()
    }
  }
}
</script>
