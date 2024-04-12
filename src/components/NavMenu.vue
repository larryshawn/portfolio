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

defineProps({
  links: {
    type: Array,
    required: true
  }
})

defineComponent({ components })
</script>

<template>
  <v-app-bar color="indigo" flat>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-app-bar-title
      ><RouterLink :to="{ name: 'home' }"><LogoElement /></RouterLink
    ></v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="link in links"
      :key="`${link.name}-header-link`"
      class="mx-2"
      color="white"
      rounded="xl"
      variant="text"
      :to="{ name: link.linkName }"
    >
      {{ link.name }}
    </v-btn>
    <v-btn v-if="user" :to="{ name: 'cafeApp' }" @click="signOutOfFirebase">Sign out</v-btn>
    <v-btn v-else :to="{ name: 'signIn' }">Sign in</v-btn>
  </v-app-bar>
</template>

<style scoped></style>
