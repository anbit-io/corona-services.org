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
          <div class="contact-form__field contact-form__field--gdpr">
            <label for="privacypolicy" class="contact-form__label">
              <input
                v-model="gdpr_accepted"
                class="contact-form__input"
                type="checkbox"
                name="gdpr_accepted"
              >
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
      </div>
    </div>
  </section>
</template>

<script>
const emailService = {
  serialize: function(o) {
    var r = []
    return (
      Object.keys(o).forEach(function(e) {
        var n = "boolean" == typeof o[e] ? +o[e] : o[e]
        r.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
      }),
      r.join("&")
    )
  },
  send: function(e) {
    return fetch(
      "https://email.microservices.corona-services.org/api/emails/send",
      {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "text/html, application/xhtml+xml",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: emailService.serialize(e)
      }
    )
      .then(function(e) {
        return e.text()
      })
      .then(function(e) {
        return JSON.parse(e)
      })
  }
}

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      gdpr_accepted: false,
      acknowledgement: null,
      errors: {}
    }
  },
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

      let result = await this.postForm()

      if (result) {
        this.showAcknowledgement()
      }
    },
    async postForm() {
      let data = {
        name: this.name,
        email: this.email,
        message: this.message,
        gdpr_accepted: this.gdpr_accepted
      }
      const result = await emailService.send(data)
      return result.status
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
        if (fieldName == "gdpr_accepted") {
          if (fieldValue == false) {
            errors[fieldName] = this.$t("errors.gdpr_accepted")
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
