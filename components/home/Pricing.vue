<template>
  <section id="pricing" class="section section--pricing pricing">
    <div class="section__container pricing__container">
      <div class="pricing__header section__header">
        <h3 class="section__title pricing__title">
          {{ $t("pricing.title") }}
        </h3>
        <p class="section__subtitle pricing__subtitle">
          {{ $t("pricing.subtitle") }}
        </p>
      </div>
      <div class="pricing__content">
        <div
          v-for="pricing in allPricings"
          :key="pricing.id"
          class="pricing__item"
        >
          <div class="pricing-item" :class="`pricing-item--${pricing.id}`">
            <div v-if="pricing.bestchoice" class="pricing-item__bestchoice">
              {{ $t("pricing.bestchoice") }}
            </div>

            <div class="pricing-item__name">
              {{ pricing.name }}
            </div>
            <div v-if="pricing.price" class="pricing-item__price">
              {{ pricing.price }} &euro;
              <span class="pricing-item__per-month">
                &sol; {{ pricing.per_unit }}
              </span>
            </div>

            <div v-if="pricing.fees" class="pricing-item__fees">
              {{ pricing.fees }}
            </div>

            <div v-if="pricing.no_price" class="pricing-item__no-price">
              {{ pricing.no_price }}
            </div>

            <p class="pricing-item__description">
              {{ pricing.description }}
            </p>

            <ul v-if="pricing.features" class="pricing-item__features">
              <li
                v-for="(feature, key) in pricing.features"
                :key="key"
                class="pricing-item__feature"
              >
                {{ feature }}
              </li>
            </ul>

            <button
              class="cta pricing-item__cta"
              @click="showContactModal(pricing)"
            >
              {{ pricing.ctaLabel }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    pricingHref() {
      return `mailto:info@corona-service.org?subject=${encodeURIComponent(
        this.$t("services.modal.mailto_subject")
      )}`
    },
    allPricings() {
      return [
        {
          id: "plus",
          bestchoice: true,
          per_unit: this.$t("pricing.item_plus.per_unit"),
          name: this.$t("pricing.item_plus.name"),
          price: this.$t("pricing.item_plus.price"),
          fees: this.$t("pricing.item_plus.fees"),
          description: this.$t("pricing.item_plus.description"),
          features: this.$t("pricing.item_plus.features"),
          ctaLabel: this.$t("pricing.item_plus.ctaLabel")
        },
        {
          id: "enterprise",
          name: this.$t("pricing.item_enterprise.name"),
          description: this.$t("pricing.item_enterprise.description"),
          no_price: this.$t("pricing.item_enterprise.no_price"),
          ctaLabel: this.$t("pricing.item_enterprise.ctaLabel")
        }
      ]
    }
  },
  methods: {
    showContactModal(pricing) {
      if (pricing) {
        this.$showContactModal({ contactReason: `${pricing.id}_package` })
      } else {
        this.$showContactModal()
      }
    }
  }
}
</script>
