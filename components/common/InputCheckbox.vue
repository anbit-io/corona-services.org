<template>
  <span class="input-checkbox" @click="handleChange">
    <input v-model="localSelectedValue" type="checkbox" v-bind="$attrs">
    <span class="input-checkbox__style" />
  </span>
</template>

<script>
export default {
  model: {
    prop: "selectedValue",
    event: "change"
  },
  props: {
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
      this.$emit("change", !this.selectedValue)
    }
  }
}
</script>
