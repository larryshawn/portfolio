<template>
  <label :for="uuid" v-if="label">{{ label }}</label>
  <select
    :value="modelValue"
    class="field"
    :id="uuid"
    v-bind="{
      ...$attrs,
      onChange: ($event) => {
        $emit('update:modelValue', $event.target.value)
      }
    }"
  >
    <option value="" disabled>{{ label }}</option>
    <option v-for="option in options" :key="option" :selected="option === modelValue">
      {{ option }}
    </option>
  </select>
</template>

<script>
import UniqueID from '../features/UniqueID'
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      required: true
    }
  },
  setup() {
    const uuid = UniqueID().getID()
    return {
      uuid
    }
  }
}
</script>

<style lang="scss" scoped></style>
