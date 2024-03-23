<template>
  <div>Day planner</div>
  <TodoForm />
  <TodoList />
</template>

<script setup></script>

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

<style scoped>
.todo-app {
  padding: 5vh;
  min-height: 100vh;
  width: 30vw;
  background-color: #f7f9fc;
}
</style>
