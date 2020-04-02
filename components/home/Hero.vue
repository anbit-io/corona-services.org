<template>
  <Banner
    name="hero"
    :image="{
      name: 'hero.png',
      ext: 'png',
      alt: 'Business during corona pandemic'
    }"
    cta-href="tel:0241 - 5600 73 600"
    cta-label="0241 - 5600 73 600"
  />
</template>

<script>
import Banner from "../common/Banner"
export default {
  components: { Banner }
}
</script>
