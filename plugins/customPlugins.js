import Vue from "vue"
import RafQueue from "./rafQueue"
import anime from "animejs/lib/anime.es.js"
let rafQueue = new RafQueue()

let menuAnimation = null

function elementCenterCoord(targetNode) {
  let elementRect = targetNode.getBoundingClientRect()
  let centerX = elementRect.left + targetNode.offsetWidth / 2
  let centerY = elementRect.top + targetNode.offsetHeight / 2
  return { x: centerX, y: centerY }
}

function putElementAt(targetNode, coord) {
  targetNode.style.left = `${coord.x - targetNode.offsetWidth / 2}px`
  targetNode.style.top = `${coord.y - targetNode.offsetHeight / 2}px`
}

function createMenuAnimation($el, duration, context) {
  let display = $el.getAttribute("data-expanded"),
    $body = self.document.body

  function onBeginAndComplete(instance) {
    rafQueue.clear()

    const displayMenu = instance.reversed ? !display : display

    if (!context.mobileMenuIsOpen) {
      instance.reverse()
    }

    if (displayMenu) {
      if (!instance.completed) {
        rafQueue.add(function() {
          $el.style.display = "flex"
          putElementAt(
            context.$refs.mobileMenuBg,
            elementCenterCoord(context.$refs.mobileMenuToggle)
          )
        })

        rafQueue.add(function() {
          $el.setAttribute("data-expanded", true)
        })

        rafQueue.add(function() {
          $body.classList.add("scroll-lock")
        })

        rafQueue.runQueue()
      }
    }

    if (!displayMenu) {
      if (instance.completed) {
        $el.style.display = "none"
        context.$refs.mobileMenuToggle.setAttribute("data-expanded", false)
        $body.classList.remove("scroll-lock")
        $el.setAttribute("data-expanded", false)
        context.$emit("navigate")
      }
    }
  }

  var timeline = anime.timeline({
    autoplay: false,
    duration,
    loop: false,
    easing: "easeInOutSine",
    begin: onBeginAndComplete,
    complete: onBeginAndComplete
  })

  timeline
    .add({
      targets: ".header-menu__bg",
      duration: 200,
      scale: [0, 1]
    })
    .add({
      targets: ".header-menu--ss .header-menu__item",
      opacity: [0, 1],
      translateY: display ? [-15, 0] : [0, -15],
      delay: (el, i) => i * 100
    })

  return timeline
}

const MobileMenu = {
  install: function(Vue) {
    Vue.mixin({
      directives: {
        "mobile-menu-toggle": {
          bind($el, binding, vnode) {
            let _this = vnode.context
            $el.addEventListener("click", _this.toggleMobileMenu)

            $el.style.position = "relative"
            $el.setAttribute("data-expanded", _this.mobileMenuIsOpen)
          },
          componentUpdated($el, binding, vnode) {
            let _this = vnode.context
            $el.setAttribute("data-expanded", _this.mobileMenuIsOpen)
          },
          unbind($el, binding, vnode) {
            let _this = vnode.context

            $el.removeEventListener("click", _this.toggleMobileMenu)
            $el.removeAttribute("data-expanded")
          }
        },
        "mobile-menu": {
          bind($el, binding, vnode) {
            let _this = vnode.context
            $el.setAttribute("data-expanded", vnode.context.mobileMenuIsOpen)
            menuAnimation = createMenuAnimation($el, 200, _this)

            $el
              .querySelectorAll(".header-menu__item")
              .forEach($item =>
                $item.addEventListener("click", _this.toggleMobileMenu)
              )
          },
          unbind($el, binding, vnode) {
            let _this = vnode.context
            $el
              .querySelectorAll(".header-menu__item")
              .forEach($item =>
                $item.removeEventListener("click", _this.toggleMobileMenu)
              )
          },
          componentUpdated($el, binding, vnode) {
            let _this = vnode.context
            if (!_this.mobileMenuIsOpen) {
              menuAnimation.reverse()
              menuAnimation.play()
            } else {
              menuAnimation.play()
            }
          }
        }
      },
      data() {
        return {
          mobileMenuIsOpen: false
        }
      },
      wathcQuery: true,
      created() {},
      methods: {
        delayRouting(pathConfig, e) {
          e.preventDefault()
          let cb = () => {
            this.$router.push(pathConfig)
            this.$off("navigate", cb)
          }
          this.$on("navigate", cb)
        },
        toggleMobileMenu() {
          this.mobileMenuIsOpen = !this.mobileMenuIsOpen
        }
      }
    })
  }
}

const ContactForm = {
  install: function(Vue) {
    let EventBus = new Vue()

    Vue.prototype.$EventBus = EventBus

    Vue.prototype.$selectContactReason = function(value) {
      this.$EventBus.$emit("select-contact-reason", value)
    }

    Vue.prototype.$selectBusinessType = function(value) {
      this.$EventBus.$emit("select-business-type", value)
    }

    Vue.prototype.$showContactModal = function(params = null) {
      this.$modal.show("contact-modal", params)
    }

    Vue.prototype.$hideContactModal = function() {
      this.$modal.hide("contact-modal")
    }

    Vue.prototype.$proxyRouterCall = function(routeConfig, e) {
      e.preventDefault()
      this.$router.push(routeConfig)
    }

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

    Vue.prototype.$emailService = emailService
  }
}

Vue.use(MobileMenu)
Vue.use(ContactForm)
