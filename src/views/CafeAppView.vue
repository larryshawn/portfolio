<script setup>
import { ref, computed } from 'vue'
import SidebarLayout from '@/layouts/SidebarLayout.vue'
import CafeCard from '@/components/CafeCard.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseForm from '@/components/base/BaseForm.vue'
import BaseInput from '@/components/base/BaseInput.vue'

import { useFirestore, useCollection, useCurrentUser, useFirebaseAuth } from 'vuefire'
import { collection } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const db = useFirestore()
const cafeCollection = useCollection(collection(db, 'cafes'))
const auth = useFirebaseAuth()

const filterParams = ref({
  text: '',
  favorite: false
})

const filteredCafes = computed(() => {
  return cafeCollection.value.filter((cafe) => {
    return (
      cafe.name.toLowerCase().includes(filterParams.value.text.toLowerCase()) &&
      (filterParams.value.favorite ? cafe.favorite : true)
    )
  })
})

const user = useCurrentUser()

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
</script>

<template>
  <v-container>
    <v-sheet>
      <h1 class="edu-au-vic-wa-nt-pre-me text-3xl mb-10">Cafe Hive</h1>
      <v-btn v-if="user" :to="{ name: 'cafeApp' }" @click="signOutOfFirebase">Sign out</v-btn>
      <div v-else>
        <v-btn class="ml-4" :to="{ name: 'signIn' }">Sign in</v-btn>
        <small class="ml-4">You're currently logged out.</small>
      </div>
      <SidebarLayout>
        <template v-slot:sidebar>
          <BaseContainer>
            <!-- <h2 class="mb-4">Filter</h2> -->
            <BaseForm>
              <BaseInput
                v-model="filterParams.text"
                label="Search"
                variant="underlined"
                prepend-icon="mdi-store-search"
                class="ml-2"
              />
              <BaseCheckbox v-model="filterParams.favorite" label="Favorited" />
            </BaseForm>

            <v-btn :to="{ name: 'newCafe' }">Add Cafe</v-btn>
          </BaseContainer>
        </template>

        <template v-slot:main>
          <BaseContainer v-if="user">
            <p>Welcome back {{ user.displayName }}</p>
            <CafeCard v-for="cafe in filteredCafes" v-bind="cafe" :docId="cafe.id" :key="cafe.id" />
          </BaseContainer>
        </template>
      </SidebarLayout>
    </v-sheet>
  </v-container>
</template>

<style>
.edu-au-vic-wa-nt-pre-me {
  font-family: 'Edu AU VIC WA NT Pre', cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
