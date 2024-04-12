<template>
  <!-- <form @submit.prevent="addItemAndClear(todo)">
    <BaseInput class="small-input" v-model="todo" label="Task" placeholder=" " type="text" />
    <button class="button">Add</button>
  </form> -->

  <BaseContainer>
    <BaseCard class="mt-5 mx-a">
      <template v-slot:title><h1 class="mb-4">Todos</h1></template>
      <template v-slot:default>
        <BaseForm @submit.prevent="addItemAndClear(todo)">
          <BaseInput
            v-model="todo"
            type="text"
            label="Task"
            required
            placeholder="eat"
            variant="underlined"
            @keyup.enter="addItemAndClear(todo)"
          />
        </BaseForm>
        <v-divider></v-divider>
      </template>
      <template v-slot:actions>
        <BaseButton @click="addItemAndClear(todo)" variant="tonal" color="success">
          Add task
        </BaseButton>
        <!-- <v-spacer></v-spacer>
        <BaseButton @click="createUser" variant="tonal" color="secondary" outline>
          Create New User
        </BaseButton> -->
      </template>
    </BaseCard>
  </BaseContainer>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '@/stores/todoList'
// import BaseInput from './BaseInput.vue'

import BaseButton from '@/components/base/BaseButton.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseForm from '@/components/base/BaseForm.vue'
import BaseInput from '@/components/base/BaseInput.vue'

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
