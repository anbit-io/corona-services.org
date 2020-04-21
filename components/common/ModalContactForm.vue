<template>
  <form class="contact-form contact-form--modal" @submit.prevent="submitForm">
    <div
      v-if="acknowledgement"
      class="contact-form__acknowlegement"
      @click="$emit('dismiss')"
    >
      {{ acknowledgement }}
    </div>
    <div v-show="submitting" class="contact-form__spinner">
      <span class="loader" />
    </div>
    <div class="contact-form__header">
      {{ $t("modal_contact_form.title") }}
    </div>
    <div class="contact-form__row">
      <div class="contact-form__col contact-form__col--lg">
        <div class="contact-form__field contact-form__field--text">
          <label for="name" class="contact-form__label">
            {{ $t("footer.contact_form.label_name") }} :
          </label>
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
          <label for="email" class="contact-form__label">
            {{ $t("footer.contact_form.label_email") }} :
          </label>
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
            {{ $t("footer.contact_form.label_business") }} :
          </label>
          <div
            class="contact-form__field-group contact-form__field-group--styled"
          >
            <p v-for="(option, key) in businessTypeOptions" :key="key">
              <input
                v-model="business"
                type="radio"
                name="business"
                :value="option.value"
              >
              <span>{{ option.label }}</span>
            </p>
          </div>
          <span :v-if="errorsHas('business')" class="contact-form__error">
            {{ getError("business") }}
          </span>
        </div>
      </div>
      <div class="contact-form__col contact-form__col--sm">
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
      </div>
    </div>

    <div class="contact-form__row contact-form__row--footer">
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
        <span :v-if="errorsHas('gdpr_accepted')" class="contact-form__error">
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
    </div>
  </form>
</template>

<script>
export default {
  props: {
    businessType: {
      type: String,
      default: null
    },
    contactReason: {
      type: String,
      default: "general"
    }
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      reason: this.$props.contactReason,
      business: this.$props.businessType,
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
        reason: this.reasonOptions.find(option => option.value == this.reason)
          .label,
        business: this.businessTypeOptions.find(
          option => option.value == this.business
        ).label,
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
