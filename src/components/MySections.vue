<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(section, index) in sections" :key="index" cols="12">
        <div :id="'section-' + index" class="section" v-intersect="onIntersect">
          <slot :name="'section-' + index"></slot>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const sections = ref([])

const onIntersect = (entry, observer) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('animate-section')
    observer.unobserve(entry.target)
  }
}
</script>

<style scoped>
.section {
  height: 100vh;
  opacity: 0;
  transform: translateY(20px) scale(0.9);
  transition:
    opacity 0.5s,
    transform 0.5s;
}

.animate-section {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
