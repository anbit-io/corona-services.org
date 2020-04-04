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
            <a
              class="service-block"
              :href="servicesHref"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span class="service-block__icon transition">
                <svg-icon :name="service.icon" />
              </span>
              <span class="service-block__label">
                {{ service.label }}
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="services__footer">
        <div class="services__call-support">
          <span>
            {{ $t("services.call_support") }}
          </span>
          <a
            class="transition"
            :href="`tel:${$t('contact_no')}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t("contact_no") }}
          </a>
        </div>
      </div>
    </div>
    <Modal />
  </section>
</template>

<script>
// import Modal from "./Modal"
export default {
  // components: {
  //   Modal
  // },
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
  }
  // methods: {
  //   // showModal() {
  //   //   this.$modal.show("services-modal")
  //   // }
  // }
}
</script>
