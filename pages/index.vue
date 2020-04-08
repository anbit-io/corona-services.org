<template>
  <div>
    <Hero />
    <Services />
    <Featured />
    <OurClients />
  </div>
</template>

<script>
import Hero from "../components/home/Hero"
import Services from "../components/home/Services"
import Featured from "../components/home/Featured"
import OurClients from "../components/home/OurClients"
import metaTagsMixin from "../mixins/metaTags"

export default {
  components: {
    Hero,
    Services,
    Featured,
    OurClients
  },
  mixins: [metaTagsMixin]
}
</script>
