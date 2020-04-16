import Vue from "vue"
import lazySizes from "lazysizes"
import "lazysizes/plugins/blur-up/ls.blur-up"
import ProgressiveImageComponent from "./ProgressiveImage/ProgressiveImage"

const ProgressiveImage = {
  install: function(Vue, options) {
    Vue.component("progressive-image", ProgressiveImageComponent)
  }
}

Vue.use(ProgressiveImage)

export default lazySizes
