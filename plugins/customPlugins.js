import Vue from "vue"
import MobileMenu from "./MobileMenu"
import ContactForm from "./ContactForm"

const defaultOptions = {
  threshold: 0,
  hideScrollUp: false,
  bodyFixedHeaderClass: "body--has-fixed-header",
  fixedClass: "header--fixed"
}

function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop
}

function mergeOptions(bindingOptions) {
  return { ...defaultOptions, ...bindingOptions }
}

let lastScrollTop = getScrollTop()
let isFixed = false

/**
 *
 * @param { HTMLElement } $headerEl
 * @param { Object } bindingOptions
 * @param { Event } event
 */
const check = function($headerEl, bindingOptions, event) {
  let options = mergeOptions(bindingOptions),
    $body = this.document.body

  const { threshold, hideScrollUp } = options

  const currentScrollPos = getScrollTop()

  const isOverThreshold = currentScrollPos > threshold
  const isScrollDown = currentScrollPos >= lastScrollTop

  const newIsFixed = isScrollDown
    ? isOverThreshold
    : hideScrollUp
    ? false
    : isOverThreshold

  lastScrollTop = currentScrollPos

  if (isFixed !== newIsFixed) {
    isFixed = newIsFixed
  }

  if (isFixed) {
    if (!$headerEl.classList.contains(options.fixedClass)) {
      $headerEl.classList.add(options.fixedClass)
    }

    if (!$body.classList.contains(options.bodyFixedHeaderClass)) {
      $body.classList.add(options.bodyFixedHeaderClass)
    }
  } else {
    $headerEl.classList.remove(options.fixedClass)
    $body.classList.remove(options.bodyFixedHeaderClass)
  }
}

const FixedHeader = {
  install(Vue) {
    Vue.mixin({
      directives: {
        "fixed-header": {
          bind($el, binding) {
            window.addEventListener(
              "scroll",
              check.bind(self, $el, binding.value)
            )
          },
          undbind($el, binding) {
            window.removeEventListener(
              "scroll",
              check.bind(self, $el, binding.value)
            )
          }
        }
      }
    })
  }
}

Vue.use(MobileMenu)
Vue.use(ContactForm)
Vue.use(FixedHeader)
