<template>
  <div>
    <img src="./assets/logo.png" class="logo" @click="showModal" alt="{LB}" />
  <Home />
</div>
</template>

<script setup lang="ts">
import Home from './components/Home.vue'
</script>

<style scoped>
.logo {
  height: 5em;
  position: fixed;
  left: 0;
  top: 0;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #2362f6bd);
}
</style>
