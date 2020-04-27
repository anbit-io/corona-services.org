import Modal from "./Modal.vue"

export class ModalState {
  constructor($emitter) {
    this.$emitter = $emitter
  }

  show(name, params) {
    this.$emitter.$emit("modal-show", name, params)
  }

  hide(name) {
    this.$emitter.$emit("modal-hide", name)
  }
}

export default {
  install(Vue) {

    let ModalEmitter = new Vue()

    Vue.component("modal", Modal)

    Vue.prototype.$modalEmitter = ModalEmitter
    Vue.prototype.$modal = new ModalState(ModalEmitter)
  }
}
