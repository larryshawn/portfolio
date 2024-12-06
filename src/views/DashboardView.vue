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

const loadNewContent = ref(false)
const showMoreContent = (isIntersecting, entries) => {
  loadNewContent.value = entries[0].isIntersecting
}

defineComponent({ components })
</script>

<template>
  <v-container>
    <h1 class="vollkorn-font text-3xl">Dashboard</h1>
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

    <v-row id="below-the-fold">
      <v-col cols="12" md="8">
        <EmployeesTable :employees="employees" @select-employee="setEmployee" />
      </v-col>
      <v-col cols="12" md="4">
        <EventTimeline :timeline="timeline" side="end" />
      </v-col>
    </v-row>

    <!-- <v-row>
      <v-col>
        <h1 v-intersect="showMoreContent">About to load</h1>
      </v-col>
    </v-row>

    <v-row v-if="loadNewContent" id="more-content">
      <v-col>
        <Transition name="fade" appear>
          <v-skeleton-loader
            :is="view"
            ref="skeleton"
            type="table"
            class="mx-auto"
          ></v-skeleton-loader>
        </Transition>
      </v-col>
    </v-row> -->

    <v-snackbar v-model="snackbar" left="true">
      You have selected {{ selectedEmployee.name }},
      {{ selectedEmployee.title }}
      <v-btn color="pink" text @click="snackbar = false"> Close </v-btn>
    </v-snackbar>
  </v-container>
</template>

<style scoped>
.fade-enter-active {
  transition: all 1.3s ease-in;
}

.fade-leave-active {
  transition: all 2.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.vollkorn-font {
  font-family: 'Vollkorn', serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
</style>
