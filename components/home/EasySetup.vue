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
        <CTA href="mailto:info@corona-service.org" :inverted="true">
          {{ $t("easy_setup.cta_label") }}
        </CTA>
      </div>
    </div>
  </section>
</template>

<script>
import CTA from "../common/CTA"
export default {
  components: {
    CTA
  },
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
  }
}
</script>
