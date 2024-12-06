<template>
  <v-sheet class="overflow-hidden">
    <v-timeline align-top :dense="true" :side>
      <!-- optional all on one side. Insert above: side="end" -->
      <v-timeline-item
        v-for="(item, i) in timeline"
        :key="i"
        :dot-color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <template v-slot:opposite>
          <span>{{ item.opposite }}</span>
        </template>
        <v-card :color="item.color" dark>
          <v-card-title class="title pt-3 pb-3">
            <h3 class="title">{{ item.title }}</h3>
          </v-card-title>
          <v-card-text class="bg-white text--primary">
            <p class="pt-3 body-1 mb-0">
              {{ item.text }}
            </p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-sheet>
</template>

<script setup>
defineProps({
  timeline: {
    type: Array,
    required: true
  },
  side: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.v-card .v-card-title {
  white-space: pre-wrap;
}
</style>
