<template>
  <section id="why-us" ref="whyus" class="section section--why-us why-us">
    <div class="section__container why-us__container">
      <div class="section__header why-us__header">
        <h3 class="section__title why-us__title">
          {{ $t("why_us.title") }}
        </h3>
        <p class="section__subtitle why-us__subtitle">
          {{ $t("why_us.subtitle") }}
        </p>
      </div>
      <div class="section__content why-us__content">
        <figure ref="mobilemockup" class="why-us__mobile-mockup">
          <progressive-image
            src="whyus-bg.jpg"
            type="image/jpg"
            :lazyload="true"
            alt="Mobile mockup"
          />
        </figure>
        <div class="why-us__features">
          <div
            v-for="feature in features"
            :key="feature.key"
            class="why-us__feature"
          >
            <div class="why-us-feature">
              <div class="why-us-feature__icon">
                <svg-icon :name="feature.key" />
              </div>
              <div class="why-us-feature__title">
                {{ feature.title }}
              </div>
              <div class="why-us-feature__description">
                {{ feature.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      animated: false
    }
  },
  computed: {
    features() {
      return [
        {
          key: "support-local",
          title: this.$t("why_us.support_local.title"),
          description: this.$t("why_us.support_local.description")
        },
        {
          key: "easy-to-use",
          title: this.$t("why_us.easy_to_use.title"),
          description: this.$t("why_us.easy_to_use.description")
        },
        {
          key: "quarantine-rules",
          title: this.$t("why_us.quarantine_rules.title"),
          description: this.$t("why_us.quarantine_rules.description")
        },
        {
          key: "protect-staff",
          title: this.$t("why_us.protect_staff.title"),
          description: this.$t("why_us.protect_staff.description")
        },
        {
          key: "pick-up",
          title: this.$t("why_us.pick_up.title"),
          description: this.$t("why_us.pick_up.description")
        },
        {
          key: "online-payment",
          title: this.$t("why_us.online_payment.title"),
          description: this.$t("why_us.online_payment.description")
        },
        {
          key: "optimize-workflows",
          title: this.$t("why_us.optimize_workflows.title"),
          description: this.$t("why_us.optimize_workflows.description")
        },
        {
          key: "mobile-menu",
          title: this.$t("why_us.mobile_menu.title"),
          description: this.$t("why_us.mobile_menu.description")
        },
        {
          key: "prestige",
          title: this.$t("why_us.prestige.title"),
          description: this.$t("why_us.prestige.description")
        }
      ]
    }
  },
  mounted() {
    // if (process.client) {
    //   this.attachScrollListener()
    // }
  },
  destroyed() {
    // if (process.client) {
    //   this.removeScrollListener()
    // }
  },
  methods: {
    attachScrollListener() {
      let widthMatch = window.matchMedia("(min-width: 768px)")

      if (widthMatch.matches) {
        document.addEventListener("scroll", this.handleStepsAnimation)
      }

      widthMatch.addEventListener("change", mediaQuery => {
        if (mediaQuery.matches) {
          document.addEventListener("scroll", this.handleStepsAnimation)
        } else {
          this.removeScrollListener()
        }
      })
    },
    removeScrollListener() {
      document.removeEventListener("scroll", this.handleStepsAnimation)
    },
    handleStepsAnimation(e) {
      let $docEl = e.target.documentElement,
        docScroll =
          (window.pageYOffset || $docEl.scrollTop) - ($docEl.clientTop || 0),
        $el = this.$refs.whyus,
        offsetDelta = 200 // we fire the animations before the element reaches top.

      if (docScroll >= $el.offsetTop - offsetDelta) {
        this.animateSteps()
      }
    },
    animateSteps() {
      if (!this.animated) {
        let stepsDelta = this.getDeltaOfAllSteps()
        let steps = this.getAllStepRefs()

        steps.forEach((step, index) => {
          let delta = stepsDelta[index]
          step.style.transform = `translate(${delta.x}px, ${delta.y}px)`
        })

        this.animated = true
      }
    },
    calculateDelta(coord) {
      let mobile = this.getCenterPointOfMobile()
      return {
        x: mobile.x - coord.x,
        y: mobile.y - coord.y
      }
    },
    getDeltaOfAllSteps() {
      return this.getCenterPointOfAllSteps().map(this.calculateDelta)
    },
    getCenterPointOfAllSteps() {
      let steps = this.getAllStepRefs()
      return steps.map(this.getCenterPointOfElement)
    },
    getCenterPointOfMobile() {
      return this.getCenterPointOfElement(this.$refs.mobilemockup)
    },
    getCenterPointOfElement(targetNode) {
      return {
        x: targetNode.offsetLeft + targetNode.offsetWidth / 2,
        y: targetNode.offsetTop + targetNode.offsetHeight / 2
      }
    },
    getAllStepRefs() {
      let steps = []
      for (let ref in this.$refs) {
        if (ref.startsWith("step")) {
          steps.push(this.$refs[ref][0])
        }
      }
      return steps
    }
  }
}
</script>
