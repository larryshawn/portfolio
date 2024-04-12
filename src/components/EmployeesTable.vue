<script setup>
import { ref } from 'vue'
import employeeData from '@/data/employees.json'
const snackbar = ref(false)
const currentItem = ref('')
// const text = ref(`Hello, I'm a snackbar`)
const selectRow = (click, row) => {
  snackbar.value = true
  currentItem.value = row.item.name
}

const remove = (key) => {
  headers.value = headers.value.filter((header) => header.key !== key)
}

const headers = ref([
  {
    title: 'Employee',
    align: 'start',
    key: 'name',
    sortable: false,
    removable: false
  },
  { title: 'Employee Id', key: 'id', removable: true },
  { title: 'Title', key: 'title', removable: true },
  { title: 'Salary', key: 'salary', removable: true }
])
const employees = employeeData
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="employees"
    item-value="name"
    :items-per-page="5"
    @click:row="selectRow"
  >
    <template v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }">
      <tr>
        <template v-for="column in columns" :key="column.key">
          <td>
            <span class="mr-2 cursor-pointer" @click="() => toggleSort(column)">{{
              column.title
            }}</span>
            <template v-if="isSorted(column)">
              <v-icon :icon="getSortIcon(column)"></v-icon>
            </template>
            <v-icon
              v-if="column.removable"
              icon="$close"
              @click="() => remove(column.key)"
            ></v-icon>
          </td>
        </template>
      </tr>
    </template>
  </v-data-table>
  <!-- <v-snackbar v-model="snackbar" :disabled="$vuetify.breakpoint.lgAndUp"> -->
  <v-snackbar v-model="snackbar">
    You have selected {{ currentItem }}

    <template v-slot:actions>
      <v-btn color="pink" variant="text" @click="snackbar = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped></style>
