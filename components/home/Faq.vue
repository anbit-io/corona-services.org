<template>
  <div class="section section--faq">
    <div class="section__container">
      <div class="section__header">
        <h3 class="section__title">
          {{ $t("faq.title") }}
        </h3>
      </div>
      <div class="section__content">
        <Accordion v-for="(item, key) in items" :key="key" :title="item.title">
          {{ item.content }}
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "../common/Accordion"
export default {
  components: {
    Accordion
  },
  computed: {
    items() {
      return this.$t("faq.items")
    }
  }
}
</script>
