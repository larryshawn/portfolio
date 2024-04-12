<template>
  <BaseContainer>
    <TodoApp />
  </BaseContainer>
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
