<template>
  <div>
    <Hero />
    <Services />
    <WhyUs />
    <EasySetup />
    <Pricing />
    <Featured />
    <OurClients />
    <Faq />
  </div>
</template>

<script>
import Hero from "../components/home/Hero"
import Services from "../components/home/Services"
import WhyUs from "../components/home/WhyUs"
import EasySetup from "../components/home/EasySetup"
import Pricing from "../components/home/Pricing"
import Featured from "../components/home/Featured"
import OurClients from "../components/home/OurClients"
import Faq from "../components/home/Faq.vue"
import metaTagsMixin from "../mixins/metaTags"

export default {
  components: {
    Hero,
    Services,
    WhyUs,
    EasySetup,
    Pricing,
    Featured,
    Faq,
    OurClients
  },
  mixins: [metaTagsMixin]
}
</script>
