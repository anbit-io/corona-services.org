<template>
  <form
    class="query-form"
    name="query-form"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input
      class="query-form__input"
      type="hidden"
      name="form-name"
      value="query-form"
    >
    <label v-for="(panelist, index) in panelists" :key="index">
      <input
        type="radio"
        name="panelist"
        :value="panelist"
        :checked="panelist === currentPanelist"
        @input="ev => updatePanelist"
      >
      <span>{{ panelist }}</span>
    </label>
    <button class="cta transition">
      Submit
    </button>
  </form>
</template>
<script>
export default {
  name: "QAForm",
  data() {
    return {
      panelists: ["Evan You", "Chris Fritz"],
      currentPanelist: "Evan You"
    }
  },
  methods: {
    updatePanelist(ev) {
      this.currentPanelist = ev.target.value
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/sass/components/_query-form.scss";
</style>
