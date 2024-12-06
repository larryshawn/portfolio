<template>
  <BaseContainer>
    <BaseCard class="mt-5 mx-a">
      <template v-slot:title>
        <!-- <h1 class="font-poppins text-xl">Shopping list</h1>
        <p class="font-quicksand text-lg">Shopping list</p>
        <h2 class="font-robotoSlab text-2xl">Shopping list</h2> -->
        <!-- <h3 class="font-caveat text-3xl">Shopping list</h3> -->
        <!-- <p class="font-nunito text-lg">Shopping list</p> -->
        <h1 class="font-pacifico text-3xl">Shopping list</h1>
      </template>
      <template v-slot:default>
        <BaseForm @submit.prevent="addItemAndClear(todo)">
          <BaseInput
            v-model="todo"
            type="text"
            label="Grocery Item"
            required
            placeholder="Item to add"
            variant="underlined"
            @keyup.enter="addItemAndClear(todo)"
          />
        </BaseForm>
        <v-divider></v-divider>
      </template>
      <template v-slot:actions>
        <v-tooltip text="Add Item">
          <template v-slot:activator="{ props }">
            <BaseButton
              v-bind="props"
              @click="addItemAndClear(todo)"
              variant="tonal"
              color="success"
            >
              <v-icon size="30">mdi-basket-plus</v-icon>
            </BaseButton>
          </template>
        </v-tooltip>

        <v-spacer></v-spacer>

        <v-tooltip text="Clear All Items">
          <template v-slot:activator="{ props }">
            <BaseButton v-bind="props" @click="clearItems" variant="tonal" color="warning" outline>
              <v-icon size="30">mdi-delete-sweep</v-icon>
            </BaseButton>
          </template>
        </v-tooltip>
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

function clearItems() {
  store.clearTodos() // Clear all items from the store
}
</script>

<style scoped></style>
