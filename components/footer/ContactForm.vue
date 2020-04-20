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
        <form class="contact-form" @submit.prevent="submitForm">
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
          <div class="contact-form__field contact-form__field--select">
            <label for="reason" class="contact-form__label">
              {{ $t("footer.contact_form.label_reason") }} :
            </label>
            <div class="contact-form__field-group">
              <p v-for="(option, key) in reasonOptions" :key="key">
                <input
                  v-model="reason"
                  type="radio"
                  name="reason"
                  :value="option.value"
                >
                <span>{{ option.label }}</span>
              </p>
            </div>
          </div>
          <div class="contact-form__field contact-form__field--select">
            <label for="reason" class="contact-form__label">
              {{ $t("footer.contact_form.label_business") }} :
            </label>
            <select
              ref="business"
              v-model="business"
              class="contact-form__input"
              name="business"
            >
              <option :value="null">
                {{ $t("footer.contact_form.placeholder_business") }}
              </option>
              <option
                v-for="(option, key) in businessTypeOptions"
                :key="key"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
            <span :v-if="errorsHas('business')" class="contact-form__error">
              {{ getError("business") }}
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
      reason: "general",
      business: null,
      gdpr_accepted: false,
      acknowledgement: null,
      errors: {},
      submitting: false
    }
  },
  computed: {
    reasonOptions() {
      return [
        { value: "general", label: this.$t("reason_options.general") },
        {
          value: "plus_package",
          label: this.$t("reason_options.plus_package")
        },
        {
          value: "enterprise_package",
          label: this.$t("reason_options.enterprise_package")
        }
      ]
    },
    businessTypeOptions() {
      return [
        { label: this.$t("services.items.bakery"), value: "bakery" },
        { label: this.$t("services.items.butchery"), value: "butchery" },
        { label: this.$t("services.items.vegetables"), value: "veg" },
        { label: this.$t("services.items.retail"), value: "retailer" },
        { label: this.$t("services.items.restaurant"), value: "restaurant" },
        { label: this.$t("services.items.beverages"), value: "beverages" }
      ]
    }
  },
  mounted() {
    this.dismissAcknowledgement()
    this.$EventBus.$on("select-contact-reason", this.setContactReason)
    this.$EventBus.$on("select-business-type", this.setBusinessType)
  },
  methods: {
    setContactReason(value) {
      this.reason = value
    },
    setBusinessType(value) {
      this.business = value
    },
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
        reason: this.reasonOptions.find(option => option.value == this.reason)
          .label,
        business: this.businessTypeOptions.find(
          option => option.value == this.business
        ).label,
        gdpr_accepted: this.gdpr_accepted
      }

      const result = await emailService.send(data)
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
        business: this.business,
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
          case "business":
            if (fieldValue == null) {
              errors[fieldName] = this.$t("errors.business")
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
