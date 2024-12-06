<script setup>
import LogoElement from './LogoElement.vue'
import { defineComponent, inject } from 'vue'

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

const toggleTheme = inject('toggleTheme')
const boo = inject('boo')

// Define function to handle button click
const onToggleThemeClick = () => {
  if (toggleTheme) {
    toggleTheme()
  }
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
  <v-app-bar class="navbar indigo-opaque" flat>
    <!-- insert color="indigo" above if color wanted again -->
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <RouterLink :to="{ name: 'home' }"><LogoElement /></RouterLink>
    <v-spacer></v-spacer>
    <v-tooltip text="Toggle Theme">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" @click="onToggleThemeClick" text rounded
          ><v-icon size="30">mdi-theme-light-dark</v-icon>
        </v-btn>
      </template>
    </v-tooltip>

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
  </v-app-bar>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center; /* Centers the logo vertically */
  /* height: 70px; */
  padding: 0 20px; /* Optional: adds space around the logo */
}

.logo {
  margin: 0 auto; /* Centers the logo horizontally */
  width: 50px;
  height: 50px;
}
</style>
