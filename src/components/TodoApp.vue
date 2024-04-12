<template>
  <TodoForm />
  <TodoList />
</template>

<script setup>
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
import { defineComponent } from 'vue'

const components = {
  TodoForm,
  TodoList
}

defineComponent({ components })
</script>

<style scoped></style>
