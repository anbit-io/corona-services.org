<template>
  <section id="our-services" class="section section--services services">
    <div class="section__container services__container">
      <div class="services__header">
        <h3 class="section__title services__title">
          {{ $t("services.title") }}
        </h3>
      </div>
      <div class="services__content">
        <ul class="services__list">
          <li
            v-for="(service, key) in services"
            :key="key"
            class="services__item"
          >
            <div class="service-block" @click="showContactModal(service)">
              <span class="service-block__icon transition">
                <svg-icon :name="service.icon" />
              </span>
              <span class="service-block__label">
                {{ service.label }}
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div class="services__footer">
        <button class="services__cta cta transition " @click="showContactModal">
          {{ $t("services.cta_label") }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    servicesHref() {
      return `mailto:info@corona-service.org?subject=${encodeURIComponent(
        this.$t("services.modal.mailto_subject")
      )}`
    },
    services() {
      return [
        { label: this.$t("services.items.bakery"), icon: "bakery" },
        { label: this.$t("services.items.butchery"), icon: "butchery" },
        { label: this.$t("services.items.vegetables"), icon: "veg" },
        { label: this.$t("services.items.retail"), icon: "retailer" },
        { label: this.$t("services.items.restaurant"), icon: "restaurant" },
        { label: this.$t("services.items.beverages"), icon: "beverages" }
      ]
    }
  },
  methods: {
    showContactModal(service) {
      if (service) {
        this.$showContactModal({ businessType: service.icon })
      } else {
        this.$showContactModal()
      }
    }
  }
}
</script>
