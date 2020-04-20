<template>
  <Banner
    name="featured"
    :image="{
      name: 'featured.png',
      ext: 'png',
      alt: 'Order online during corona pandemic'
    }"
    :cta-label="$t('featured.cta_label')"
    :lazyload="true"
  />
</template>

<script>
import Banner from "../common/Banner"
export default {
  components: { Banner }
}
</script>
