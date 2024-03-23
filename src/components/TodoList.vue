<template>
  <div class="left-align">
    <div v-for="todo in todoList" :key="todo.id">
      <span @click="deleteTodo(todo.id)"> &#10060;</span>
      <span @click.stop="toggleCompleted(todo.id)"> &#10004;</span>
      <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
    </div>
  </div>
</template>

<script setup>
import { useTodoListStore } from '@/stores/todoList'
import { storeToRefs } from 'pinia'

const store = useTodoListStore()

// storeToRefs lets todoList keep reactivity:
const { todoList } = storeToRefs(store)

// destructuring action method doesn't require using storeToRefs:
const { toggleCompleted, deleteTodo } = store
</script>

<style scoped>
span {
  margin: 0 10px;
  cursor: pointer;
}
.item {
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  width: 80vw;
  padding: 5px;
}
.completed {
  text-decoration: line-through;
}
.left-align {
  text-align: left;
}
</style>
