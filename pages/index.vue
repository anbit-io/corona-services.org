<template>
  <div>
    <Hero />
    <Services />
  </div>
</template>

<script>
import Hero from "../components/home/Hero"
import Services from "../components/home/Services"

export default {
  components: {
    Hero,
    Services
  },
  data() {
    return {}
  },
  head: {
    titleTemplate: "Corona Service - %s",
    title: "Corona Service"
  }
}
</script>
