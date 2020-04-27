<template>
  <modal
    name="contact-modal"
    transition="nice-modal-fade"
    :adaptive="true"
    :scrollable="true"
    width="1140"
    height="auto"
    :reset="true"
    :pivot-y="0.5"
    :delay="100"
    :focus-trap="true"
    @before-open="beforeOpen"
  >
    <div class="modal">
      <button
        class="modal__close"
        :title="$t('modal_contact_form.close')"
        @click="closeModal"
      />
      <div class="modal__body">
        <ModalContactForm v-bind="modalParams" @dismiss="closeModal" />
      </div>
    </div>
  </modal>
</template>

<script>
import ModalContactForm from "../common/ModalContactForm"
export default {
  components: { ModalContactForm },
  data() {
    return {
      modalParams: null
    }
  },
  methods: {
    beforeOpen(event) {
      this.modalParams = event.params
    },
    closeModal() {
      this.$hideContactModal()
    }
  }
}
</script>
