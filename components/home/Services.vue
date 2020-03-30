<template>
  <section class="section section--services services">
    <div class="section__container services__container">
      <div class="service__header">
        <h3 class="services__title">
          Lieferdienste & Pick Ups
          <svg-icon name="cart" />
        </h3>
        <p class="services__subtitle">
          Online bestellen, liefern lassen oder abholen
        </p>
      </div>

      <div class="services__body">
        <div
          ref="servicesSwiper"
          v-swiper:servicesSwiper="swiperOptions"
          class="services__swiper"
        >
          <div class="swiper-wrapper">
            <div
              v-for="(service, idx) in swiperData"
              :key="idx"
              class="swiper-slide services__slide"
            >
              <div class="service-block transition" @click="showModal">
                <div class="service-block__icon">
                  <svg-icon :name="service.icon" />
                </div>
                <div class="service-block__name">
                  {{ service.name }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="services__swiper-navigation">
          <div
            v-show="nextIsVisible"
            class="services__swiper-next"
            @click="nextSlide"
          >
            <svg-icon name="arrow-right" />
          </div>
        </div>
      </div>
    </div>
    <Modal />
  </section>
</template>

<script>
import Modal from "./Modal"
import { directive } from "vue-awesome-swiper"

export default {
  directives: {
    swiper: directive
  },
  components: {
    Modal
  },
  data() {
    return {
      nextIsVisible: false,
      swiperOptions: {
        slidesPerView: 1,
        slidesPerColumnFill: "row",
        slidesPerColumn: 6,
        breakpoints: {
          360: {
            slidesPerView: 2,
            slidesPerColumn: 3
          },
          576: {
            slidesPerView: 3,
            slidesPerColumn: 2
          },
          640: {
            slidesPerView: 4,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column"
          },
          768: {
            slidesPerView: 4,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column"
          },
          1024: {
            slidesPerView: 5,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column"
          },
          1200: {
            slidesPerView: 6
          }
        }
      },
      swiperData: [
        {
          icon: "baker",
          name: `Bäcker,
                Konditor`
        },
        { icon: "butchery", name: "Metzger, Fischgeschäft" },
        { icon: "vegetables", name: "Obst, Gemüse, Lebensmittel" },
        { icon: "retail", name: "Einzelhändler (Kleidung, Sport...)" },
        { icon: "restaurant", name: "Restaurant" },
        { icon: "bar", name: "Getränke" }
      ]
    }
  },
  mounted() {
    this.checkNextVisibility()
  },
  methods: {
    showModal() {
      this.$modal.show("services-modal")
    },
    checkNextVisibility() {
      if (
        this.servicesSwiper.slides.length >
        this.servicesSwiper.params.slidesPerView
      ) {
        this.nextIsVisible = true
        return
      }

      this.nextIsVisible = false
    },
    nextSlide() {
      this.servicesSwiper.slideNext()
      this.checkNextVisibility()
    }
  }
}
</script>
