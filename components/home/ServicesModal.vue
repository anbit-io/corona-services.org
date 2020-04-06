<template>
  <modal
    :adaptive="true"
    transition="nice-modal-fade"
    name="services-modal"
    height="auto"
    width="700"
  >
    <div class="services-modal">
      <h3 class="services-modal__title">
        {{ $t("services.modal.title") }}
      </h3>
      <p class="services-modal__subtitle">
        {{ $t("services.modal.content") }}
      </p>
      <CTA class="services-modal__cta" :href="ctaHref">
        {{ $t("services.modal.cta_label") }}
      </CTA>
    </div>
  </modal>
</template>

<script>
import CTA from "../common/CTA"
// import QueryForm from "./QueryForm"
export default {
  components: { CTA },
  computed: {
    ctaHref() {
      return `mailto:info@corona-service.org?subject=${encodeURIComponent(
        this.$t("services.modal.mailto_subject")
      )}`
    }
  }
}
</script>
