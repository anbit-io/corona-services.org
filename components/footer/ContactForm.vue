<template>
  <section id="contact" class="section section--contact-form">
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
        <client-only>
          <form
            class="contact-form contact-form--footer"
            @submit.prevent="submitForm"
          >
            <div
              v-if="acknowledgement"
              class="contact-form__acknowlegement"
              @click="dismissAcknowledgement"
            >
              {{ acknowledgement }}
            </div>
            <div v-show="submitting" class="contact-form__spinner">
              <span class="loader" />
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
            <div class="contact-form__field contact-form__field--gdpr">
              <label for="privacypolicy" class="contact-form__label">
                <InputCheckbox v-model="gdpr_accepted" name="gdpr_accepted" />
                <span v-html="$t('footer.contact_form.label_gdpr')" />
              </label>
              <span
                :v-if="errorsHas('gdpr_accepted')"
                class="contact-form__error"
              >
                {{ getError("gdpr_accepted") }}
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
        </client-only>
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
      reason: "general",
      business: null,
      gdpr_accepted: false,
      acknowledgement: null,
      errors: {},
      submitting: false
    }
  },
  computed: {},
  mounted() {
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

      this.submitting = true

      let result = await this.postForm()

      if (result) {
        this.showAcknowledgement()
      } else {
        this.showErrorMessage()
      }
    },
    async postForm() {
      let data = {
        name: this.name,
        email: this.email,
        message: this.message,
        reason: "",
        business: "",
        gdpr_accepted: this.gdpr_accepted
      }

      const result = await this.$emailService.send(data)
      return result.status
    },
    showAcknowledgement() {
      this.submitting = false
      this.acknowledgement = this.$t("footer.contact_form.acknowledgement")
    },
    showErrorMessage() {
      this.submitting = false
      this.acknowledgement = this.$t("footer.contact_form.submit_error")
    },
    dismissAcknowledgement() {
      this.acknowledgement = null
      this.resetFields()
    },
    resetFields() {
      this.name = ""
      this.email = ""
      this.message = ""
      this.gdpr_accepted = false
    },
    verifyForm() {
      let fields = {
        name: this.name,
        email: this.email,
        message: this.message,
        gdpr_accepted: this.gdpr_accepted
      }

      let errors = {}

      for (const [fieldName, fieldValue] of Object.entries(fields)) {
        switch (fieldName) {
          case "gdpr_accepted":
            if (fieldValue == false) {
              errors[fieldName] = this.$t("errors.gdpr_accepted")
            }
            break
          default:
            if (fieldValue == "") {
              errors[fieldName] = this.$t("errors.empty")
            }
            break
        }
      }

      this.errors = errors
      return !Object.keys(errors).length
    }
  }
}
</script>
