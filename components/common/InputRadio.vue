<template>
  <span
    class="input-radio"
    :class="{ 'input-radio--block': blockStyled }"
    @click="handleChange"
  >
    <input
      v-model="localSelectedValue"
      type="radio"
      v-bind="$attrs"
      :value="value"
    >
    <span class="input-radio__style" />
    <span class="input-radio__label">{{ label }}</span>
  </span>
</template>

<script>
export default {
  model: {
    prop: "selectedValue",
    event: "change"
  },
  props: {
    blockStyled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number, Boolean],
      required: true
    },
    selectedValue: {
      type: [String, Number, Boolean],
      required: true
    }
  },
  computed: {
    localSelectedValue: {
      get() {
        return this.selectedValue
      },
      set(value) {
        this.$emit("change", value)
      }
    }
  },
  methods: {
    handleChange() {
      this.$emit("change", this.value)
    }
  }
}
</script>
