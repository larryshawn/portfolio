<template>
  <div class="container center-aligned-col">
    <TodoApp />
  </div>
</template>

<script setup>
import TodoApp from '@/components/TodoApp.vue'
import { defineComponent } from 'vue'

const components = {
  TodoApp
}

defineComponent({ components })
</script>

<style scoped></style>
