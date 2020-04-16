<template>
  <section class="section section--contact-form">
    <div class="section__container">
      <div class="section__header">
        <h3 class="section__title">
          {{ $t("footer.contact_form.title") }}
        </h3>
        <p class="section__subtitle">
          {{ $t("footer.contact_form.subtitle") }}
        </p>
      </div>
      <div class="section__content">
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="contact-form__field contact-form__field--text">
            <input
              v-model="name"
              class="contact-form__input"
              type="text"
              name="name"
              :placeholder="$t('footer.contact_form.label_name')"
            >
          </div>
          <div class="contact-form__field contact-form__field--email">
            <input
              v-model="email"
              class="contact-form__input"
              type="email"
              name="email"
              :placeholder="$t('footer.contact_form.label_email')"
            >
          </div>
          <div class="contact-form__field contact-form__field--textarea">
            <textarea
              v-model="message"
              class="contact-form__input"
              rows="5"
              name="message"
              :placeholder="$t('footer.contact_form.label_message')"
            />
          </div>
          <div class="contact-form__field contact-form__field--submit">
            <input
              type="submit"
              class="contact-form__submit transition"
              :value="$t('footer.contact_form.label_submit')"
            >
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: ""
    }
  },
  methods: {
    submitForm() {}
  }
}
</script>
