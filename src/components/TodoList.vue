<template>
  <v-container>
    <div class="left-align">
      <div v-for="todo in todoList" :key="todo.id">
        <span @click="deleteTodo(todo.id)"
          ><BaseIcon icon="mdi-trash-can-outline" color="red"
        /></span>

        <span @click.stop="toggleCompleted(todo.id)">
          <template v-if="todo.completed"
            ><BaseIcon icon="mdi-check-circle" color="green" />
          </template>
          <template v-else><BaseIcon icon="mdi-check-circle-outline" color="green" /> </template>
        </span>

        <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { useTodoListStore } from '@/stores/todoList'
import { storeToRefs } from 'pinia'
import BaseIcon from '@/components/base/BaseIcon.vue'

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
