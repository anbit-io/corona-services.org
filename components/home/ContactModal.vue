<template>
  <modal
    name="contact-modal"
    :adaptive="true"
    transition="nice-modal-fade"
    height="auto"
    width="1140"
    :scrollable="true"
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
