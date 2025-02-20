<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavMenu from './components/NavMenu.vue'
import AppLayout from './layouts/AppLayout.vue'
import { useFirebaseAuth } from 'vuefire'
import { ref } from 'vue'
import './assets/tailwind.css'

const route = useRoute()

// check to see if auth is working
const auth = useFirebaseAuth()
console.log(auth)

const links = ref([
  // { name: 'Home', linkName: 'home' },
  // { name: 'Contact', linkName: 'contact' },
  // { name: 'Events', linkName: 'events' },
  // { name: 'Create Event', linkName: 'eventCreate' },
  // { name: 'Todo App', linkName: 'todoApp' },
  // { name: 'Cafe App', linkName: 'cafeApp' },
  // { name: 'Movie Rating App', linkName: 'movieRating' },
  // { name: 'Dashboard', linkName: 'dashboard' }
  // { name: 'Sign up', linkName: 'signUp' },
  // { name: 'Add Cafe', linkName: 'newCafe' }
])
</script>

<template>
  <AppLayout>
    <template v-slot:topbar>
      <NavMenu :links="links" />
    </template>
    <template v-slot:content>
      <Suspense>
        <RouterView :key="route.fullPath" />
        <template v-slot:fallback>
          <p>404 Content not found.</p>
        </template>
      </Suspense>

      <v-footer class="">
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in links"
            :key="link.name"
            class="mx-2"
            color="white"
            rounded="xl"
            variant="text"
            :to="{ name: link.linkName }"
          >
            {{ link.name }}
          </v-btn>
          <v-col class="text-center mt-4" cols="12">
            &copy; {{ new Date().getFullYear() }} — <strong>Larry Babcock</strong>
          </v-col>
        </v-row>
      </v-footer>
    </template>
  </AppLayout>
</template>

<style></style>
