<template>
  <div class="container center-aligned-col">
    <h1>Events For Good Leo</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
const events = ref(null)

onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<style scoped></style>
