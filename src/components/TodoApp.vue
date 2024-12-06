<template>
  <div class="bg-image">
    <TodoForm />
  </div>
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

<style scoped>
.bg-image {
  background: url('@/assets/apples.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>
