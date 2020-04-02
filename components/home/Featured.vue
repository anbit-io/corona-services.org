<template>
  <Banner
    name="featured"
    :image="{
      name: 'featured.png',
      ext: 'png',
      alt: 'Order online during corona pandemic'
    }"
    cta-href="tel:0241 - 5600 73 600"
    cta-label="0241 - 5600 73 600"
    :lazyload="true"
  />
</template>

<script>
import Banner from "../common/Banner"
export default {
  components: { Banner }
}
</script>
