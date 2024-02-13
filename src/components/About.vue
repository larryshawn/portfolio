<template>
    <div>
      <h1>{{ greeting }}</h1>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'About',
    data() {
      return {
        greeting: 'Hello, Vue 3 with TypeScript!'
      };
    }
  });
  </script>
  
  <style scoped>
  /* Your component styles */
  </style>
  