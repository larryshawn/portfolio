<template>
  <form @submit.prevent="addItemAndClear(todo)">
    <BaseInput class="small-input" v-model="todo" label="Task" placeholder=" " type="text" />
    <button class="button">Add</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '@/stores/todoList'
import BaseInput from './BaseInput.vue'

const todo = ref('')
const store = useTodoListStore()

function addItemAndClear(item) {
  if (item.length === 0) {
    return
  }
  // invokes function in the store:
  store.addTodo(item)
  todo.value = ''
}
</script>

<style scoped></style>
