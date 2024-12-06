<template>
  <v-navigation-drawer
    :model-value="drawer"
    @update:model-value="$emit('update:drawer', $event)"
    app
    location="right"
    width="350"
    temporary
  >
    <v-btn icon @click="$emit('update:drawer', false)" class="close-btn ml-3">
      <v-icon>mdi-close</v-icon>
    </v-btn>

    <slot></slot>
  </v-navigation-drawer>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  drawer: Boolean
})
</script>
