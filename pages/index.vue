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

export default {
  components: {
    Hero,
    Services,
    Featured,
    OurClients
  },
  head() {
    return {
      titleTemplate: "Corona-Service | %s",
      title: "Lebensmittel & Services bei lokalen Unternehmen bestellen"
    }
  }
}
</script>
