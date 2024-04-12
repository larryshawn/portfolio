<script setup>
import { ref } from 'vue'

import BaseButton from '@/components/base/BaseButton.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseForm from '@/components/base/BaseForm.vue'
import BaseInput from '@/components/base/BaseInput.vue'

import { useFirebaseAuth } from 'vuefire'
import { useRouter } from 'vue-router'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'

const userInput = ref({
  email: '',
  password: '',
  name: ''
})

const showPassword = ref(false)

const router = useRouter()

const auth = useFirebaseAuth()

async function signInToFirebase() {
  signInWithEmailAndPassword(auth, userInput.value.email, userInput.value.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      console.log('user: ', user)
      router.push({ name: 'cafeApp' })
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log('error code: ', errorCode)
      console.log('error message: ', errorMessage)
    })
}

async function createUser() {
  createUserWithEmailAndPassword(auth, userInput.value.email, userInput.value.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      console.log(user)
      addName()
      router.push({ name: 'cafeApp' })
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log('error code: ', errorCode)
      console.log('error message: ', errorMessage)
    })
}

async function addName() {
  updateProfile(auth.currentUser, {
    displayName: userInput.value.name
  })
    .then(() => {
      console.log('Profile updated!')
      // ...
    })
    .catch((error) => {
      console.log('An error occurred: ', error)
      // ...
    })
}
</script>

<template>
  <BaseContainer>
    <BaseCard class="mt-5 mx-a">
      <template v-slot:title><h1 class="mb-4">Login</h1></template>
      <template v-slot:default>
        <BaseForm>
          <BaseInput
            v-model="userInput.name"
            type="name"
            label="Name"
            required
            placeholder="you"
            variant="underlined"
          />
          <BaseInput
            v-model="userInput.email"
            type="email"
            label="Email"
            required
            variant="underlined"
            placeholder="you@your.com"
            prepend-icon="mdi-account-circle"
          />
          <BaseInput
            v-model="userInput.password"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            required
            variant="underlined"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </BaseForm>
        <v-divider></v-divider>
      </template>
      <template v-slot:actions>
        <BaseButton @click="signInToFirebase" variant="tonal" color="success"> Sign In </BaseButton>
        <v-spacer></v-spacer>
        <BaseButton @click="createUser" variant="tonal" color="secondary" outline>
          Create New User
        </BaseButton>
      </template>
    </BaseCard>
  </BaseContainer>
</template>

<style></style>
