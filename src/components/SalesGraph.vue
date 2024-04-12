<script setup>
import { defineComponent } from 'vue'
import { VSparkline } from 'vuetify/labs/VSparkline'
defineProps({
  sale: {
    type: Object,
    required: true
  }
})
const components = { VSparkline }
defineComponent(components)
</script>

<template>
  <v-card :color="sale.color" dark>
    <v-card-text>
      <VSparkline
        :model-value="sale.sales"
        :labels="sale.labels"
        color="rgba(255, 255, 255, .7)"
        height="100"
        padding="24"
        stroke-linecap="round"
        smooth
      >
      </VSparkline>
    </v-card-text>

    <v-card-text class="text-center">
      <div class="display-1">{{ sale.title }}</div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.display-1 {
  color: white;
}
</style>
