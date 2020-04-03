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
            <div class="service-block">
              <div class="service-block__icon transition">
                <svg-icon :name="service.icon" />
              </div>
              <p class="service-block__label">
                {{ service.label }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="services__footer">
        <CTA class="services__cta" href="mailto:info@corona-service.org">
          {{ $t("services.cta") }}
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
  }
}
</script>
