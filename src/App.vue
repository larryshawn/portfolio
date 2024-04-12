<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavMenu from './components/NavMenu.vue'
import AppLayout from './layouts/AppLayout.vue'
import { useFirebaseAuth } from 'vuefire'
import { ref } from 'vue'

const route = useRoute()

// check to see if auth is working
const auth = useFirebaseAuth()
console.log(auth)

const links = ref([
  // { name: 'Home', linkName: 'home' },
  { name: 'Contact', linkName: 'contact' },
  // { name: 'Events', linkName: 'events' },
  // { name: 'Create Event', linkName: 'eventCreate' },
  { name: 'Todo App', linkName: 'todoApp' },
  { name: 'Cafe App', linkName: 'cafeApp' },
  { name: 'Dashboard', linkName: 'dashboard' },
  { name: 'Sign up', linkName: 'signUp' }
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
        <v-content>
          <RouterView :key="route.fullPath" />
          <template v-slot:fallback>
            <p>Content not found. Contact your developer for more info.</p>
          </template>
        </v-content>
      </Suspense>

      <v-footer class="bg-indigo-lighten-1" app>
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
            {{ new Date().getFullYear() }} — <strong>Larry Babcock</strong>
          </v-col>
        </v-row>
      </v-footer>
    </template>
  </AppLayout>
</template>

<style></style>
