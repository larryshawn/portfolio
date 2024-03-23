<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{
      horizontal: !vertical,
      vertical: vertical
    }"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :modelValue="modelValue"
      :name="name"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
</template>

<script>
import BaseRadio from './BaseRadio.vue'
export default {
  props: {
    options: {
      type: Array,
      requred: true
    },
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BaseRadio
  }
}
</script>

<style scoped>
.horizontal {
  margin-right: 20px;
}
.vertical {
  margin-bottom: 10px;
}
</style>
