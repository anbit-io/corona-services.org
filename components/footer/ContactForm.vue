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
          <div
            v-if="acknowledgement"
            class="contact-form__acknowlegement"
            @click="dismissAcknowledgement"
          >
            {{ acknowledgement }}
          </div>
          <div class="contact-form__field contact-form__field--text">
            <input
              ref="name"
              v-model="name"
              class="contact-form__input"
              type="text"
              name="name"
              :placeholder="$t('footer.contact_form.label_name')"
            >
            <span :v-if="errorsHas('name')" class="contact-form__error">
              {{ getError("name") }}
            </span>
          </div>
          <div class="contact-form__field contact-form__field--email">
            <input
              ref="email"
              v-model="email"
              class="contact-form__input"
              type="email"
              name="email"
              :placeholder="$t('footer.contact_form.label_email')"
            >
            <span :v-if="errorsHas('email')" class="contact-form__error">
              {{ getError("email") }}
            </span>
          </div>
          <div class="contact-form__field contact-form__field--textarea">
            <textarea
              ref="message"
              v-model="message"
              class="contact-form__input"
              rows="5"
              name="message"
              :placeholder="$t('footer.contact_form.label_message')"
            />
            <span :v-if="errorsHas('message')" class="contact-form__error">
              {{ getError("message") }}
            </span>
          </div>
          <div class="contact-form__field contact-form__field--agreement">
            <label for="privacypolicy" class="contact-form__label">
              <input
                v-model="agreement"
                class="contact-form__input"
                type="checkbox"
                name="privacypolicy"
              >
              <span v-html="$t('footer.contact_form.label_agreement')" />
            </label>
            <span :v-if="errorsHas('agreement')" class="contact-form__error">
              {{ getError("agreement") }}
            </span>
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
      message: "",
      agreement: false,
      acknowledgement: null,
      errors: {}
    }
  },
  mounted() {
    this.resetFields()
    this.dismissAcknowledgement()
  },
  methods: {
    errorsHas(field) {
      return this.errors[field] !== undefined
    },
    getError(field) {
      return this.errors[field]
    },
    async submitForm() {
      if (!this.verifyForm()) {
        return
      }

      let result = await this.postForm()

      if (result) {
        this.showAcknowledgement()
      }
    },
    postForm() {
      return true
    },
    showAcknowledgement() {
      this.acknowledgement = this.$t("footer.contact_form.acknowledgement")
    },
    dismissAcknowledgement() {
      this.acknowledgement = null
      this.resetFields()
    },
    resetFields() {
      this.name = ""
      this.email = ""
      this.message = ""
      this.agreement = false
    },
    verifyForm() {
      let fields = {
        name: this.name,
        email: this.email,
        message: this.message,
        agreement: this.agreement
      }

      let errors = {}

      for (const [fieldName, fieldValue] of Object.entries(fields)) {
        if (fieldName == "agreement") {
          if (fieldValue == false) {
            errors[fieldName] = this.$t("errors.unchecked")
          }
        } else {
          if (fieldValue == "") {
            errors[fieldName] = this.$t("errors.empty")
          }
        }
      }
      this.errors = errors
      return !Object.keys(errors).length
    }
  }
}
</script>
