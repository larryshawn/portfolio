<script setup>
import EmployeesTable from '@/components/EmployeesTable.vue'
import EventTimeline from '@/components/EventTimeline.vue'
import SalesGraph from '@/components/SalesGraph.vue'
import StatisticCard from '@/components/StatisticCard.vue'

import employeesData from '@/data/employees.json'
import timelineData from '@/data/timeline.json'
import salesData from '@/data/sales.json'
import statisticsData from '@/data/statistics.json'
import { ref, defineComponent } from 'vue'

const components = {
  EmployeesTable,
  EventTimeline,
  SalesGraph,
  StatisticCard
}

const employees = ref(employeesData)
const sales = ref(salesData)
const selectedEmployee = ref({
  name: '',
  title: ''
})
const snackbar = ref(false)
const statistics = ref(statisticsData)
const timeline = ref(timelineData)

const setEmployee = (event) => {
  this.snackbar = true
  this.selectedEmployee.name = event.name
  this.selectedEmployee.title = event.title
}

defineComponent({ components })
</script>

<template>
  <v-container>
    <h1>Dashboard</h1>
    <v-row>
      <v-col v-for="sale in sales" :key="`${sale.title}`" cols="12" md="4">
        <SalesGraph :sale="sale" />
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="statistic in statistics" :key="`${statistic.title}`" cols="12" md="3">
        <StatisticCard :statistic="statistic" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <EmployeesTable :employees="employees" @select-employee="setEmployee" />
      </v-col>
      <v-col cols="12" md="4">
        <EventTimeline :timeline="timeline" />
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" left="true">
      You have selected {{ selectedEmployee.name }},
      {{ selectedEmployee.title }}
      <v-btn color="pink" text @click="snackbar = false"> Close </v-btn>
    </v-snackbar>
  </v-container>
</template>
