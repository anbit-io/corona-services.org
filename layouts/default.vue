<template>
  <div class="site">
    <Header class="site__header" />
    <main class="site__main">
      <nuxt />
    </main>
    <Footer class="site__footer" />
    <ContactModal />
  </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"
import ContactModal from "../components/home/ContactModal"
export default {
  components: {
    Header,
    Footer,
    ContactModal
  }
}
</script>
