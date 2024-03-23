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
    <h1 class="mb-4">Sign In</h1>
    <BaseCard>
      <template v-slot:default>
        <BaseForm>
          <BaseInput
            v-model="userInput.name"
            type="name"
            label="Name"
            required
            placeholder="eleanorshellstrop@thegoodplace.com"
          />
          <BaseInput
            v-model="userInput.email"
            type="email"
            label="Email"
            required
            placeholder="eleanorshellstrop@thegoodplace.com"
          />
          <BaseInput v-model="userInput.password" label="Password" type="password" required />
        </BaseForm>
      </template>
      <template v-slot:actions>
        <BaseButton @click="signInToFirebase" variant="tonal" color="success"> Sign In </BaseButton>
        <BaseButton @click="createUser" variant="tonal" color="secondary" outline>
          Create New User
        </BaseButton>
      </template>
    </BaseCard>
  </BaseContainer>
</template>

<style></style>
