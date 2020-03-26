<template>
  <div class="site">
    <Header class="site__header" />
    <main class="site__main">
      <nuxt />
    </main>
    <Footer class="site__footer" />
  </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"

export default {
  components: {
    Header,
    Footer
  }
}
</script>
