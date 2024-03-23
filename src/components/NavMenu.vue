<script setup>
import LogoElement from './LogoElement.vue'
import { defineComponent } from 'vue'

import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { signOut } from 'firebase/auth'

import { useRouter } from 'vue-router'

const router = useRouter()

const auth = useFirebaseAuth()

async function signOutOfFirebase() {
  signOut(auth)
    .then(() => {
      console.log('Sign-out successful.')
      router.push({ name: 'cafeApp' })
    })
    .catch((error) => {
      console.log('error: ', error)
    })
}

const user = useCurrentUser()
console.log('user: ', user)

const components = {
  LogoElement
}

defineComponent({ components })
</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'home' }"><LogoElement /></RouterLink>
    <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
    <RouterLink :to="{ name: 'events' }">Events</RouterLink>
    <RouterLink :to="{ name: 'eventCreate' }">Create Event</RouterLink>
    <RouterLink :to="{ name: 'todoApp' }">Todo App</RouterLink>
    <RouterLink :to="{ name: 'cafeApp' }">Cafe App</RouterLink>
    <RouterLink :to="{ name: 'newCafe' }">Add Cafe</RouterLink>
    <RouterLink v-if="user" :to="{ name: 'cafeApp' }" @click="signOutOfFirebase"
      >Sign out</RouterLink
    >
    <RouterLink v-else :to="{ name: 'signIn' }">Sign in</RouterLink>
  </nav>
</template>

<style scoped>
/* Scoped styles for SfcComponent.vue */
/* Old styles for reference */
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  width: 100%;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
