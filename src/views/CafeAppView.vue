<script setup>
import { ref, computed } from 'vue'
import SidebarLayout from '@/layouts/SidebarLayout.vue'
import CafeCard from '@/components/CafeCard.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseForm from '@/components/base/BaseForm.vue'
import BaseInput from '@/components/base/BaseInput.vue'

import { useFirestore, useCollection, useCurrentUser } from 'vuefire'
import { collection } from 'firebase/firestore'
const db = useFirestore()
const cafeCollection = useCollection(collection(db, 'cafes'))

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
</script>

<template>
  <v-container>
    <v-sheet>
      <h1 class="mb-4">Cafe Hive</h1>
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
              />
              <BaseCheckbox v-model="filterParams.favorite" label="Favorited" />
            </BaseForm>

            <v-btn :to="{ name: 'newCafe' }">Add Cafe</v-btn>
          </BaseContainer>
        </template>

        <template v-slot:main>
          <BaseContainer>
            <p v-if="user">Hey {{ user.displayName }}!</p>
            <CafeCard
              v-if="user"
              v-for="cafe in filteredCafes"
              v-bind="cafe"
              :docId="cafe.id"
              :key="cafe.id"
            />
            <p v-else>
              You're currently logged out. Please
              <RouterLink :to="{ name: 'signIn' }">sign in</RouterLink>
            </p>
          </BaseContainer>
        </template>
      </SidebarLayout>
    </v-sheet>
  </v-container>
</template>

<style></style>
