<template>
  <client-only>
    <transition
      name="fade-in"
      @before-enter="beforeOverlayTransitionEnter"
      @after-enter="afterOverlayTransitionEnter"
      @before-leave="beforeOverlayTransitionLeave"
      @after-leave="afterOverlayTransitionLeave"
    >
      <div
        v-if="visibility.overlay"
        ref="modal"
        :data-modal="name"
        :aria-expanded="visibility.overlay.toString()"
        class="v-modal"
      >
        <div
          ref="modalBackdrop"
          class="v-modal__backdrop"
          @mousedown.self="onBackdropClick"
          @touchstart.self="onBackdropClick"
        />
        <div ref="modalWindow" class="v-modal__window">
          <transition
            :name="transition"
            @before-enter="beforeModalTransitionEnter"
            @after-enter="afterModalTransitionEnter"
            @before-leave="beforeModalTransitionLeave"
            @after-leave="afterModalTransitionLeave"
          >
            <div
              v-if="visibility.modal"
              ref="modalContent"
              class="v-modal__content"
              :aria-expanded="visibility.modal.toString()"
              role="dialog"
              aria-modal="true"
            >
              <slot />
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </client-only>
</template>

<script>
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock"

export const blurActiveElement = () => {
  if (
    typeof document !== "undefined" &&
    document.activeElement &&
    document.activeElement.tagName !== "BODY" &&
    document.activeElement.blur
  ) {
    document.activeElement.blur()
  }
}

export function freeze($el, e) {
  if (!$el.contains(e.target)) {
    e.preventDefault()
  }
}

export function modalWindowTouch(e) {
  var top = this.scrollTop,
    totalScroll = this.scrollHeight,
    currentScroll = top + this.offsetHeight

  if (top === 0 && currentScroll === totalScroll) {
    e.preventDefault()
  } else if (top === 0) {
    this.scrollTop = 1
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1
  }
}

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    transition: {
      type: String,
      default: "slide-in"
    },
    adaptive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false,
      visibility: {
        modal: false,
        overlay: false
      },
      viewport: {
        width: 0,
        height: 0
      },
      bodyScrollPosition: 0
    }
  },
  computed: {
    shouldShowModal() {
      return this.isOpen
    }
  },
  watch: {
    isOpen(val) {
      if (val) {
        this.visibility.overlay = val
      } else {
        this.visibility.modal = val
      }
    }
  },
  beforeMount() {
    window.addEventListener("keyup", this.onEscapeKeyUp)
  },
  mounted() {
    this.$modalEmitter.$on("modal-show", this.openModal)
    this.$modalEmitter.$on("modal-hide", this.closeModal)
    this.checkBodyScrollLock()
    this.setViewPortDimensions()
  },
  beforeDestroy() {
    this.$modalEmitter.$off("modal-show", this.openModal)
    this.$modalEmitter.$off("modal-hide", this.closeModal)
    window.removeEventListener("keyup", this.onEscapeKeyUp)
    clearAllBodyScrollLocks()
  },
  methods: {
    beforeOverlayTransitionEnter() {
      this.checkBodyScrollLock()
    },
    afterOverlayTransitionEnter() {
      this.visibility.modal = true
    },
    beforeOverlayTransitionLeave() {},
    afterOverlayTransitionLeave() {
      this.checkBodyScrollLock()
    },
    beforeModalTransitionEnter() {},
    afterModalTransitionEnter() {
      this.modalStyles()
    },
    beforeModalTransitionLeave() {
      document.removeEventListener(
        "touchmove",
        freeze.bind(null, this.$refs.modalWindow),
        false
      )
      document.removeEventListener(
        "touchstart",
        freeze.bind(null, this.$refs.modalWindow),
        false
      )
      // this.$refs.modalWindow.removeEventListener("touchmove", modalWindowTouch)
    },
    afterModalTransitionLeave() {
      this.visibility.overlay = false
    },
    setViewPortDimensions() {
      this.viewport.height = window.innerHeight
      this.viewport.width = window.innerWidth
    },
    modalStyles() {
      this.$refs.modalWindow.style.overflowY = "scroll"
      this.$refs.modalWindow.style.WebkitOverflowScrolling = "touch"

      document.addEventListener(
        "touchmove",
        freeze.bind(null, this.$refs.modalWindow),
        false
      )
      document.addEventListener(
        "touchstart",
        freeze.bind(null, this.$refs.modalWindow),
        false
      )
      // this.$refs.modalWindow.addEventListener("touchmove", modalWindowTouch)
    },
    onBackdropClick() {
      this.closeModal(this.name)
    },
    checkBodyScrollLock() {
      if (this.isOpen) {
        this.lockBodyScroll()
      } else {
        this.unlockBodyScroll()
      }
    },
    lockBodyScroll() {
      // let $body = window.document.body,
      //   $html = window.document.documentElement
      // $html.style.position = "fixed"
      // $body.style.position = "fixed"
      // $html.style.overflow = "hidden"
      // $body.style.overflow = "hidden"
      disableBodyScroll()
    },
    unlockBodyScroll() {
      // let $body = window.document.body,
      //   $html = window.document.documentElement
      // $html.style.position = "block"
      // $body.style.position = "block"
      // $html.style.overflow = null
      // $body.style.overflow = null
      enableBodyScroll()
    },
    openModal(name, params) {
      this.$emit("beforeOpen", { params })

      if (name === this.name) {
        /**
         * Need to unfocus previously focused element, otherwise
         * all keypress events (ESC press, for example) will trigger on that element.
         */
        blurActiveElement()
        this.isOpen = true
      }
    },
    closeModal(name) {
      this.$emit("beforeClose", {})

      if (name === this.name) {
        this.isOpen = false
        this.checkBodyScrollLock()
      }
    },
    onEscapeKeyUp(event) {
      if (event.which === 27 && this.isOpen) {
        this.closeModal(this.name)
      }
    }
  }
}
</script>

<style lang="scss">
@import "modal";
</style>
