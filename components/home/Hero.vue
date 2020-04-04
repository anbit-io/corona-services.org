<template>
  <Banner
    name="hero"
    :image="{
      name: 'hero.png',
      ext: 'png',
      alt: 'Business during corona pandemic'
    }"
    :cta-href="`tel:${$t('contact_no')}`"
    :cta-label="$t('hero.cta_label')"
  />
</template>

<script>
import Banner from "../common/Banner"
export default {
  components: { Banner }
}
</script>
