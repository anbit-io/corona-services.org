<template>
  <modal :adaptive="true" name="services-modal" height="auto" width="700">
    <div class="services-modal">
      <h3 class="services-modal__title">
        {{ $t("site.title") }}
      </h3>
      <p class="services-modal__subtitle">
        In Kürze werden sie hier bei ihren lokalen Einzelhändel bestellen
        können.
      </p>
      <a
        class="services-modal__cta transition"
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:info@corona-service.org"
      >
        info@corona-service.org
      </a>
    </div>
  </modal>
</template>
