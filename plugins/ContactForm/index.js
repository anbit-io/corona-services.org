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

    Vue.prototype.$emailService = emailService
  }
}

export default ContactForm
